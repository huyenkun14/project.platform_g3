package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class TransactionServiceImp implements TransactionService {
    private final TransactionRepository transactionRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public TransactionServiceImp(TransactionRepository transactionRepository, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.transactionRepository = transactionRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    public Transaction createTransaction(TransactionRequest transactionRequest) {
        Category category = categoryRepository.findById(transactionRequest.getTransactionId()).orElseThrow(() -> new CustomException("Error: no category"));
        User user = userRepository.findById(transactionRequest.getUserId()).orElseThrow(() -> new CustomException("Error: no use"));
        LocalDate date = LocalDate.parse(transactionRequest.getDate(), formatter);
        Transaction transaction = Transaction.builder()
                .amount(transactionRequest.getAmount())
                .category(category)
                .date(date)
                .description(transactionRequest.getDescription())
                .user(user)
                .build();
        transaction = transactionRepository.save(transaction);
        int money = updateMoney(transaction.getAmount(), user.getMoney(), transaction.getCategory().isValue());
        user.setMoney(money);
        userRepository.save(user);
        return transaction;
    }

    public void deleteTransaction(Long id) {
        Transaction transaction = getTransaction(id);
        User user = transaction.getUser();
        int money = updateMoney(transaction.getAmount(), user.getMoney(), !transaction.getCategory().isValue());
        user.setMoney(money);
        userRepository.save(user);
        transactionRepository.delete(transaction);
    }

    public List<Transaction> getAllTransaction(Long userId) {
        return transactionRepository.findAllByUserIdOrderByDate(userId);
    }

    public Transaction updateTransaction(TransactionRequest transactionRequest) {
        Transaction transaction = transactionRepository.findById(transactionRequest.getTransactionId()).orElseThrow(() -> new CustomException("no transaction"));
        User user = transaction.getUser();
        int money = user.getMoney();
        money = updateMoney(transaction.getAmount(), money, !transaction.getCategory().isValue());
        Category category = categoryRepository.findById(transactionRequest.getCategoryId())
                .orElseThrow(() -> new CustomException("Error: no category"));
        transaction.setAmount(transactionRequest.getAmount());
        transaction.setCategory(category);
        transaction.setDescription(transactionRequest.getDescription());
        transaction.setDate(LocalDate.parse(transactionRequest.getDate(), formatter));
        transaction = transactionRepository.save(transaction);
        money = updateMoney(transaction.getAmount(), money, transaction.getCategory().isValue());
        user.setMoney(money);
        userRepository.save(user);
        return transaction;
    }

    public Transaction getTransaction(Long id) {
        return transactionRepository.findById(id).orElseThrow(() -> new CustomException("no transaction"));
    }

    public int updateMoney(int amount, int money, boolean value) {
        if (value) {
            money += amount;
        } else {
            money -= amount;
        }
        return money;
    }

    public List<Transaction> getTransactionOfMonth(String monthAndYear, Long userId) {
        String[] mothYear = monthAndYear.split("/");
        return transactionRepository.findTransactionsOfMonth(userId, Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
    }

    public List<Transaction> getTransactionByCategory(Long categoryId) {
        return transactionRepository.findAllByCategoryIdOrderByDate(categoryId);
    }
}
