package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/transaction/create")
    public ResponseEntity createTransaction(@RequestBody TransactionRequest transactionRequest){
        Transaction transaction = transactionService.createTransaction(transactionRequest);
        return ResponseEntity.ok(transaction);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/api/v1/transaction/delete")
    public ResponseEntity deleteTransaction(@RequestParam("transactionId") Long id){
        transactionService.deleteTransaction(id);
        return ResponseEntity.ok(new MessageResponse("Success delete transaction"));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction/get-all")
    public ResponseEntity getAllTransaction(){
        return ResponseEntity.ok(transactionService.getAllTransaction());
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/api/v1/transaction/update")
    public ResponseEntity updateTransaction(@RequestBody TransactionRequest transactionRequest){
        return ResponseEntity.ok(transactionService.updateTransaction(transactionRequest));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction")
    public ResponseEntity getTransaction(@RequestParam("transactionId") Long id){
        return ResponseEntity.ok(transactionService.getTransaction(id));
    }
}
