package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.ConvertToResponse;
import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.dto.response.TransactionResponse;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.TransactionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertTransaction;

@RestController
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/transaction/create")
    public ResponseEntity<TransactionResponse> createTransaction(@Valid TransactionRequest transactionRequest) {

        Transaction transaction = transactionService.createTransaction(transactionRequest);

        return ResponseEntity.ok(convertTransaction(transaction));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/api/v1/transaction/update")
    public ResponseEntity<TransactionResponse> updateTransaction(@Valid TransactionRequest transactionRequest) {

        Transaction transaction = transactionService.updateTransaction(transactionRequest);

        return ResponseEntity.ok(convertTransaction(transaction));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/api/v1/transaction/delete")
    public ResponseEntity<MessageResponse> deleteTransaction(@RequestParam("transactionId") Long id) {

        transactionService.deleteTransaction(id);

        return ResponseEntity.ok(new MessageResponse("Success delete transaction"));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction")
    public ResponseEntity<TransactionResponse> getTransaction(@RequestParam("transactionId") Long id) {

        Transaction transaction = transactionService.getTransaction(id);

        return ResponseEntity.ok(convertTransaction(transaction));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/transaction/get-transactions")
    public ResponseEntity<List<TransactionResponse>> getAllTransactionOfMonth(Principal principal,
                                                                              @RequestParam(value = "monthAndYear", required = false) String monthAndYear,
                                                                              @RequestParam(value = "categoryId", required = false) Long categoryId) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Transaction> transactions;

        if (monthAndYear != null && categoryId != null) {
            transactions = transactionService.getTransactionByCategoryOnMonth(monthAndYear, categoryId);
        } else if (monthAndYear != null) {
            transactions = transactionService.getTransactionOfMonth(monthAndYear, userId);
        } else if (categoryId != null) {
            transactions = transactionService.getTransactionByCategory(categoryId);
        } else {
            transactions = transactionService.getAllTransaction(userId);
        }

        return ResponseEntity.ok(transactions.stream().map(ConvertToResponse::convertTransaction).toList());
    }

}
