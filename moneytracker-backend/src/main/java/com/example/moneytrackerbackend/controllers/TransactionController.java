package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/transaction/create")
    public ResponseEntity createTransaction(TransactionRequest transactionRequest){
        Transaction transaction = transactionService.createTransaction(transactionRequest);
        return ResponseEntity.ok(transaction);
    }
}
