package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.entities.Transaction;
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

@RestController
@RequiredArgsConstructor
public class WarningController {
    private final TransactionService transactionService;
    private final WarningService warningService;

    private final EmailService emailService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/warning/check")
    public ResponseEntity<Warning> warning(@RequestParam Long transactionId){

        Transaction transaction = transactionService.getTransaction(transactionId);

        int check = warningService.checkBudget(transaction.getCategory().getId(), transaction.getDate());

        if (check < 0) {

            Warning warning = warningService.createWarning(transactionId, check);
            emailService.sendEmail(transaction.getCategory().getUser().getEmail(), "Cảnh bảo chi tiêu từ Moly", warning.getMessage());
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
