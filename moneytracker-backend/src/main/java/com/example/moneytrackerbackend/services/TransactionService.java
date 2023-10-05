package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.stereotype.Service;

@Service
public interface TransactionService {
    Transaction createTransaction(TransactionRequest transactionRequest);
}
