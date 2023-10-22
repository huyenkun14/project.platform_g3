package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public interface TransactionService {
    Transaction createTransaction(TransactionRequest transactionRequest) throws IOException;

    void deleteTransaction(Long id);
    List<Transaction> getAllTransaction(Long userId);
    Transaction updateTransaction(TransactionRequest transactionRequest) throws IOException;
    Transaction getTransaction(Long id);
    List<Transaction> getTransactionOfMonth(String monthAndYear, Long userId);
    List<Transaction> getTransactionByCategory(Long categoryId);
    List<Transaction> getTransactionByCategoryOnMonth(String monthAndYear, Long categoryId);

    int getSumAmountByCategory(Long categoryId);
}
