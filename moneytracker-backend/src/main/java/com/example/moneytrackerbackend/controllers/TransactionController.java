package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.dto.response.TransactionResponse;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertTransaction;

@RestController
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/transaction/create")
    public ResponseEntity createTransaction(@RequestParam Long categoryId,
                                            @RequestParam int amount,
                                            @RequestParam String description,
                                            @RequestParam String date, Principal principal) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        TransactionRequest transactionRequest = TransactionRequest.builder()
                .userId(userId)
                .amount(amount)
                .categoryId(categoryId)
                .date(date)
                .description(description)
                .build();
        Transaction transaction = transactionService.createTransaction(transactionRequest);
        return ResponseEntity.ok(convertTransaction(transaction));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/api/v1/transaction/delete")
    public ResponseEntity deleteTransaction(@RequestParam("transactionId") Long id) {
        transactionService.deleteTransaction(id);
        return ResponseEntity.ok(new MessageResponse("Success delete transaction"));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction/get-all")
    public ResponseEntity getAllTransaction(Principal principal) {
        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Transaction> transactions = transactionService.getAllTransaction(userId);
        List<TransactionResponse> transactionResponses = new ArrayList<>();
        for (Transaction transaction : transactions) {
            transactionResponses.add(convertTransaction(transaction));
        }
        return ResponseEntity.ok(transactionResponses);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/api/v1/transaction/update")
    public ResponseEntity updateTransaction(@RequestParam Long transactionId,
                                            @RequestParam Long categoryId,
                                            @RequestParam int amount,
                                            @RequestParam String description,
                                            @RequestParam String date
                                            ) {
        TransactionRequest transactionRequest = TransactionRequest.builder()
                .transactionId(transactionId)
                .categoryId(categoryId)
                .amount(amount)
                .date(date)
                .description(description)
                .build();
        Transaction transaction = transactionService.updateTransaction(transactionRequest);
        return ResponseEntity.ok(convertTransaction(transaction));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction")
    public ResponseEntity getTransaction(@RequestParam("transactionId") Long id) {
        Transaction transaction = transactionService.getTransaction(id);
        return ResponseEntity.ok(convertTransaction(transaction));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction/get-of-month")
    public ResponseEntity getAllTransactionOfMonth(Principal principal, @RequestParam String monthAndYear) {
        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Transaction> transactionsOfMonth = transactionService.getTransactionOfMonth(monthAndYear, userId);
        List<TransactionResponse> transactionResponses = new ArrayList<>();
        for (Transaction transaction : transactionsOfMonth) {
            transactionResponses.add(convertTransaction(transaction));
        }
        return ResponseEntity.ok(transactionResponses);
    }
}
