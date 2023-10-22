package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImp implements TransactionService {
    private final TransactionRepository transactionRepository;
    private final CategoryRepository categoryRepository;
    private final ImageService imageService;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public Transaction createTransaction(TransactionRequest transactionRequest) throws IOException {

        Category category = categoryRepository.findById(transactionRequest.getCategoryId()).orElseThrow(() -> new CustomException("Error: no category"));

        LocalDate date = LocalDate.parse(transactionRequest.getDate(), formatter);
        Long imageId = imageService.saveUploadedFile(transactionRequest.getImage());

        Transaction transaction = Transaction.builder()
                .amount(transactionRequest.getAmount())
                .category(category)
                .imageId(imageId)
                .date(date)
                .description(transactionRequest.getDescription())
                .build();
        transaction = transactionRepository.save(transaction);

        return transaction;
    }

    public void deleteTransaction(Long id) {

        Transaction transaction = getTransaction(id);

        imageService.deleteImage(transaction.getImageId());
        transactionRepository.delete(transaction);
    }

    public List<Transaction> getAllTransaction(Long userId) {
        return transactionRepository.findAllByUserIdOrderByDate(userId);
    }

    public Transaction updateTransaction(TransactionRequest transactionRequest) throws IOException {

        Transaction transaction = transactionRepository.findById(transactionRequest.getTransactionId()).orElseThrow(() -> new CustomException("no transaction"));

        Category category = categoryRepository.findById(transactionRequest.getCategoryId())
                .orElseThrow(() -> new CustomException("Error: no category"));

        Long imageId = imageService.saveUploadedFile(transactionRequest.getImage());

        transaction.setImageId(imageId);
        transaction.setAmount(transactionRequest.getAmount());
        transaction.setCategory(category);
        transaction.setDescription(transactionRequest.getDescription());
        transaction.setDate(LocalDate.parse(transactionRequest.getDate(), formatter));
        transaction = transactionRepository.save(transaction);

        return transaction;
    }

    public Transaction getTransaction(Long id) {
        return transactionRepository.findById(id).orElseThrow(() -> new CustomException("no transaction"));
    }

    public List<Transaction> getTransactionOfMonth(String monthAndYear, Long userId) {

        String[] mothYear = monthAndYear.split("-");
        return transactionRepository.findTransactionsOfMonth(userId, Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
    }

    public List<Transaction> getTransactionByCategory(Long categoryId) {
        return transactionRepository.findAllByCategoryIdOrderByDate(categoryId);
    }
    public List<Transaction> getTransactionByCategoryOnMonth(String monthAndYear, Long categoryId) {

        String[] mothYear = monthAndYear.split("-");
        return transactionRepository.findTransactionByCategoryAndMonth(categoryId, Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
    }
    public int getSumAmountByCategory(Long categoryId){
        return transactionRepository.sumAmountByCategory(categoryId);
    }
}
