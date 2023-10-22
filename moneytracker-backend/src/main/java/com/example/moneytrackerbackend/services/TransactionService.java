package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TransactionService {
    Transaction createTransaction(TransactionRequest transactionRequest);

    void deleteTransaction(Long id);
    List<Transaction> getAllTransaction(Long userId);
    Transaction updateTransaction(TransactionRequest transactionRequest);
    Transaction getTransaction(Long id);
    List<Transaction> getTransactionOfMonth(String monthAndYear, Long userId);
    List<Transaction> getTransactionByCategory(Long categoryId);
    List<Transaction> getTransactionByCategoryOnMonth(String monthAndYear, Long categoryId);

    int getSumAmountByCategory(Long categoryId, String monthAndYear);
}
