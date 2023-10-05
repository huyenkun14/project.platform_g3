package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class TransactionServiceImp implements TransactionService{
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserRepository userRepository;
    public Transaction createTransaction(TransactionRequest transactionRequest)
    {
        Category category = categoryRepository.findById(transactionRequest.getCategoryId()).orElseThrow(()->new CustomException("Error: category"));
        User user = userRepository.findById(transactionRequest.getUserId()).orElseThrow(()-> new CustomException("Error: user")) ;
        Transaction transaction= Transaction.builder()
                .amount(transactionRequest.getAmount())
                .category(category)
                .datetime(LocalDateTime.now())
                .description(transactionRequest.getDescription())
                .user(user)
                .build();
        return transactionRepository.save(transaction);
    }
}
