package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @PostMapping("/api/v1/transaction/create")
    public ResponseEntity createTrasaction(TransactionRequest transactionRequest){
        Transaction transaction = transactionService.createTransaction(transactionRequest);
        return ResponseEntity.ok(transaction);
    }


}
