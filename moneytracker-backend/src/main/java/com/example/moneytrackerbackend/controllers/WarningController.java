package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
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
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class WarningController {
    private final TransactionService transactionService;
    private final WarningService warningService;
    private final UserServiceImp userService;

    private final EmailService emailService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/warning/check")
    public ResponseEntity warning(@RequestParam Long transactionId, Principal principal) {
        Transaction transaction = transactionService.getTransaction(transactionId);
        int check = warningService.checkBudget(transaction.getCategory().getId(), transaction.getDate());
        if (check < 0) {
            UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
            Long userId = userDetails.getId();
            User user = userService.getUser(userId);

            Category category = transaction.getCategory();
            String content = "Chi tiêu của bạn cho " + category.getTitle() + " đã vượt mức ngân sách là " + (-check) + ".";

            Warning warning = Warning.builder()
                    .user(user)
                    .message(content)
                    .date(LocalDateTime.now())
                    .build();

            emailService.sendEmail(user.getEmail(), "Cảnh bảo từ Moly", warning.getMessage());
            return ResponseEntity.ok(warning);
        }
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/warning/get-all")
    public ResponseEntity<List<Warning>> getAll(Principal principal) {
        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        return ResponseEntity.ok(warningService.getAllWarning(userId));
    }
}
