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

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class TransactionServiceImp implements TransactionService{
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserRepository userRepository;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/d/yyyy");
    public Transaction createTransaction(TransactionRequest transactionRequest)
    {
        Category category = categoryRepository.findById(transactionRequest.getCategoryId())
                .orElseThrow(()->new CustomException("Error: category"));
        User user = userRepository.findById(transactionRequest.getUserId())
                .orElseThrow(()-> new CustomException("Error: user")) ;
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
    public void deleteTransaction(Long id){
        Transaction transaction = transactionRepository.findById(id).orElseThrow(()-> new CustomException("no transaction"));
        transactionRepository.delete(transaction);
    }
    public List<Transaction> getAllTransaction(Long userId){
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new CustomException("Error: no user"));
        return transactionRepository.findAllByUserOrderByDate(user);
    }
    public Transaction updateTransaction( TransactionRequest transactionRequest){
        Transaction transaction = transactionRepository.findById(transactionRequest.getTransactionId()).orElseThrow(()-> new CustomException("no transaction"));
        int money = transaction.getAmount();

        money = updateMoney(transaction.getAmount(),money, !transaction.getCategory().isValue());
        Category category = categoryRepository.findById(transactionRequest.getCategoryId()).orElseThrow(()->new CustomException("Error: category"));

        transaction.setAmount(transactionRequest.getAmount());
        transaction.setCategory(category);
        transaction.setDescription(transactionRequest.getDescription());
        transaction.setDate(LocalDate.parse(transactionRequest.getDate(), formatter));
        transaction = transactionRepository.save(transaction);
        money = updateMoney(transaction.getAmount(), money, transaction.getCategory().isValue());
        User user = transaction.getUser();
        user.setMoney(money);
        userRepository.save(user);
        return transaction;
    }
    public Transaction getTransaction(Long id){
        return transactionRepository.findById(id).orElseThrow(()-> new CustomException("no transaction"));
    }
    public int updateMoney(int amount, int money, boolean value){
        if(value){
            money += amount;
        }
        else {
            money -= amount;
        }
        return money;
    }
}
