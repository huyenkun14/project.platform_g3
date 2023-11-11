package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.LoginRequest;
import com.example.moneytrackerbackend.dto.request.RegisterRequest;
import com.example.moneytrackerbackend.dto.request.UserRequest;
import com.example.moneytrackerbackend.dto.response.LoginResponse;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.dto.response.UserResponse;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.security.JwtUtils;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.CategoryService;
import com.example.moneytrackerbackend.services.TransactionService;
import com.example.moneytrackerbackend.services.UserServiceImp;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertUser;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImp userService;
    private final TransactionService transactionService;

    private final AuthenticationManager authenticationManager;
    private final JwtUtils tokenProvider;
    private final CategoryService categoryService;

    @PostMapping("/api/auth/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = tokenProvider.generateJwtToken(authentication);

        return ResponseEntity.ok(new LoginResponse(jwt, userDetails.getId(), userDetails.getUsername()));
    }

    @PostMapping("api/auth/register")
    public ResponseEntity<MessageResponse> register(@Valid @RequestBody RegisterRequest registerRequest) {

        User user = userService.saveUser(registerRequest);
        categoryService.createDefaultCategory(user.getId());

        return ResponseEntity.ok(new MessageResponse("Success register account"));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("api/v1/user")
    public ResponseEntity<UserResponse> getUser(Principal principal) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        User user = userService.getUser(userId);

        List<Transaction> transactions = transactionService.getAllTransaction(userId);
        int totalIncome = 0;
        int totalSpending = 0;

        for (Transaction transaction : transactions) {
            if (transaction.getCategory().isValue()) {
                totalIncome += transaction.getAmount();
            } else {
                totalSpending += transaction.getAmount();
            }
        }

        return ResponseEntity.ok(convertUser(user, totalIncome, totalSpending));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("api/v1/user/update")
    public ResponseEntity<MessageResponse> updateUser(Principal principal,
                                                      UserRequest userRequest) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        userRequest.setUserId(userId);

        userService.updateUser(userRequest);

        return ResponseEntity.ok(new MessageResponse("Success update your account."));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("api/v1/user/reset-password")
    public ResponseEntity<MessageResponse> updateUserPassword(Principal principal,
                                                              @RequestParam("prePassword") String prePassword,
                                                              @RequestParam("password") String password) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        userService.updatePassword(prePassword, password, userId);

        return ResponseEntity.ok(new MessageResponse(""));
    }
}