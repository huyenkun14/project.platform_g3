package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.ConvertToResponse;
import com.example.moneytrackerbackend.dto.response.WarningResponse;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.entities.Warning;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertWarning;

@RestController
@RequiredArgsConstructor
public class WarningController {

    private final UserServiceImp userService;
    private final WarningService warningService;
    private final EmailService emailService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/warning/check")
    public ResponseEntity<WarningResponse> warning(@RequestParam Long categoryId, @RequestParam String date, Principal principal) {

        int check = warningService.checkBudget(categoryId, date);

        if (check < 0) {

            UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
            Long userId = userDetails.getId();
            User user = userService.getUser(userId);

            Warning warning = warningService.createWarning(categoryId, check);

            emailService.sendEmail(user.getEmail(), "!!MOLY: CẢNH BÁO CHI TIÊU!!", warning.getMessage());

            return ResponseEntity.ok(convertWarning(warning));
        }

        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/warning/get-all")
    public ResponseEntity<List<WarningResponse>> getAll(Principal principal) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Warning> warnings = warningService.getAllWarning(userId);

        return ResponseEntity.ok(warnings.stream().map(ConvertToResponse::convertWarning).toList());
    }
}
