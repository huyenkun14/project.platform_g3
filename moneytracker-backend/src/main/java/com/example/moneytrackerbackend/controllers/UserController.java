package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.dto.request.LoginRequest;
import com.example.moneytrackerbackend.dto.request.UserRequest;
import com.example.moneytrackerbackend.dto.response.LoginResponse;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.dto.response.UserResponse;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.UserRepository;
import com.example.moneytrackerbackend.security.JwtUtils;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.CategoryService;
import com.example.moneytrackerbackend.services.ImageService;
import com.example.moneytrackerbackend.services.TransactionService;
import com.example.moneytrackerbackend.services.UserServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertUser;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final PasswordEncoder encoder;
    private final UserServiceImp userService;
    private final TransactionService transactionService;

    private final AuthenticationManager authenticationManager;
    private final JwtUtils tokenProvider;
    private final UserRepository userRepository;
    private final ImageService imageService;
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
    public ResponseEntity<MessageResponse> register(@RequestBody UserRequest registerRequest) {

        if(userRepository.existsByEmail(registerRequest.getEmail())){
            throw new CustomException("Error: Email is already taken!");
        }

        User user = User.builder().username(registerRequest.getUsername())
                .password(encoder.encode(registerRequest.getPassword()))
                .email(registerRequest.getEmail())
                .phoneNumber(registerRequest.getPhoneNumber())
                .build();
        user = userService.saveUser(user);

        CategoryRequest defaultIncomeCategory = CategoryRequest.builder()
                .userId(user.getId())
                .title("Default Income")
                .iconId(Long.parseLong( "1"))
                .value(true)
                .build();
        categoryService.createCategory(defaultIncomeCategory);

        CategoryRequest defaultSpendingCategory = CategoryRequest.builder()
                .userId(user.getId())
                .title("Default Expenditure")
                .iconId(Long.parseLong( "1"))
                .value(false)
                .build();
        categoryService.createCategory(defaultSpendingCategory);

        return ResponseEntity.ok(new MessageResponse("Success register account"));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("api/v1/user")
    public ResponseEntity<UserResponse> getUser(Principal principal){

        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        User user = userService.getUser(userId);

        List<Transaction> transactions = transactionService.getAllTransaction(userId);
        int totalIncome = 0;
        int totalSpending = 0;

        for (Transaction transaction: transactions){
            if(transaction.getCategory().isValue()){
                totalIncome+= transaction.getAmount();
            }
            else {
                totalSpending += transaction.getAmount();
            }
        }

        return ResponseEntity.ok(convertUser(user, totalIncome, totalSpending));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("api/v1/user/set-avatar")
    public ResponseEntity<MessageResponse> setAvatar(@RequestParam("image")MultipartFile image, Principal principal) {

        Long imgId= imageService.saveUploadedFile(image);

        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        User user = userService.getUser(userId);

        user.setImageId(imgId);
        userService.saveUser(user);

        return ResponseEntity.ok( new MessageResponse("Success set avatar"));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("api/v1/user/update")
    public ResponseEntity<MessageResponse> updateUser(Principal principal,
                                                   @RequestParam(value = "avatar", required = false) MultipartFile avatar,
                                                   @RequestParam("username") String username,
                                                   @RequestParam("password") String password,
                                                   @RequestParam("email") String email,
                                                   @RequestParam("phoneNumber") String phoneNumber){

        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        User user = userService.getUser(userId);

        if(!user.getEmail().equals(email)){
            if(userRepository.existsByEmail(email)){
                throw new CustomException("Error: Email is already taken!");
            }
            user.setEmail(email);
        }
        if(avatar!=null){
            Long imgId= imageService.saveUploadedFile(avatar);
            if(user.getImageId()!=null){
                imageService.deleteImage(user.getImageId());
            }
            user.setImageId(imgId);
        }

        user.setPassword(encoder.encode(password));
        user.setUsername(username);
        user.setPhoneNumber(phoneNumber);
        userService.saveUser(user);

        return ResponseEntity.ok(new MessageResponse("Success update your account."));
    }

}
