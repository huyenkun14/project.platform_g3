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
    private CategoryService categoryService;
    @Autowired
    private UserServiceImp userService;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/d/yyyy");
    public Transaction createTransaction(TransactionRequest transactionRequest)
    {
        Category category = categoryService.getCategoryById(transactionRequest.getTransactionId());
        User user = userService.getUser(transactionRequest.getUserId());
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
        userService.updateUser(user);
        return transaction;
    }
    public void deleteTransaction(Long id){
        Transaction transaction = getTransaction(id);
        User user = transaction.getUser();
        int money = updateMoney(transaction.getAmount(), user.getMoney(), !transaction.getCategory().isValue());
        user.setMoney(money);
        userService.updateUser(user);
        transactionRepository.delete(transaction);
    }
    public List<Transaction> getAllTransaction(Long userId){
        User user = userService.getUser(userId);
        return transactionRepository.findAllByUserOrderByDate(user);
    }
    public Transaction updateTransaction( TransactionRequest transactionRequest){
        Transaction transaction = transactionRepository.findById(transactionRequest.getTransactionId()).orElseThrow(()-> new CustomException("no transaction"));
        int money = transaction.getAmount();
        money = updateMoney(transaction.getAmount(),money, !transaction.getCategory().isValue());
        Category category = categoryService.getCategoryById(transactionRequest.getCategoryId());
        transaction.setAmount(transactionRequest.getAmount());
        transaction.setCategory(category);
        transaction.setDescription(transactionRequest.getDescription());
        transaction.setDate(LocalDate.parse(transactionRequest.getDate(), formatter));
        transaction = transactionRepository.save(transaction);
        money = updateMoney(transaction.getAmount(), money, transaction.getCategory().isValue());
        User user = transaction.getUser();
        user.setMoney(money);
        userService.updateUser(user);
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
    public List<Transaction> getTransactionOfMonth(String monthAndYear, Long userId){
        String[] mothYear = monthAndYear.split("/");
        List<Transaction> transactionsOfMonth = transactionRepository.findTransactionsOfMonth(userId,Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
        return transactionsOfMonth;
    }
}
