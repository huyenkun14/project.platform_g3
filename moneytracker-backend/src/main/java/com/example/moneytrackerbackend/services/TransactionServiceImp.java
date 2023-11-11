package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.TransactionRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import static com.example.moneytrackerbackend.utils.TimeUtil.formatterDate;

@Service
@RequiredArgsConstructor
public class TransactionServiceImp implements TransactionService {
    private final TransactionRepository transactionRepository;
    private final CategoryRepository categoryRepository;
    private final ImageService imageService;

    public Transaction createTransaction(TransactionRequest transactionRequest) {

        Category category = categoryRepository.findById(transactionRequest.getCategoryId()).orElseThrow(() -> new CustomException("Error: no category"));

        LocalDate date = formatterDate(transactionRequest.getDate());


        Transaction transaction = Transaction.builder()
                .amount(transactionRequest.getAmount())
                .category(category)
                .date(date)
                .description(transactionRequest.getDescription())
                .build();
        if(transactionRequest.getImage()!= null){
            Long imageId = imageService.saveUploadedFile(transactionRequest.getImage());
            transaction.setImageId(imageId);
        }
        transaction = transactionRepository.save(transaction);

        return transaction;
    }

    public void deleteTransaction(Long id) {

        Transaction transaction = getTransaction(id);
        if(transaction.getImageId()!=null){
            imageService.deleteImage(transaction.getImageId());
        }
        transactionRepository.delete(transaction);
    }

    public List<Transaction> getAllTransaction(Long userId) {
        return transactionRepository.findAllOrderByIdDesc(userId);
    }

    public Transaction updateTransaction(TransactionRequest transactionRequest){

        Transaction transaction = transactionRepository.findById(transactionRequest.getTransactionId()).orElseThrow(() -> new CustomException("no transaction"));

        Category category = categoryRepository.findById(transactionRequest.getCategoryId())
                .orElseThrow(() -> new CustomException("Error: no category"));
        if(transactionRequest.getImage()!= null){
            Long imageId = imageService.saveUploadedFile(transactionRequest.getImage());
            transaction.setImageId(imageId);
        }

        transaction.setAmount(transactionRequest.getAmount());
        transaction.setCategory(category);
        transaction.setDescription(transactionRequest.getDescription());
        transaction.setDate(formatterDate(transactionRequest.getDate()));
        transaction = transactionRepository.save(transaction);

        return transaction;
    }

    public Transaction getTransaction(Long id) {
        return transactionRepository.findById(id).orElseThrow(() -> new CustomException("no transaction"));
    }

    public List<Transaction> getTransactionOfMonth(String monthAndYear, Long userId) {

        String[] mothYear = monthAndYear.split("-");
        return transactionRepository.findAllByMonth(userId, Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
    }

    public List<Transaction> getTransactionByCategory(Long categoryId) {
        return transactionRepository.findAllByCategoryIdOrderByIdDesc(categoryId);
    }
    public List<Transaction> getTransactionByCategoryOnMonth(String monthAndYear, Long categoryId) {

        String[] mothYear = monthAndYear.split("-");
        return transactionRepository.findAllByCategoryAndMonth(categoryId, Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
    }
    public int getSumAmountByCategory(Long categoryId, String monthAndYear){
        String[] mothYear = monthAndYear.split("-");
        List<Transaction> transactions= transactionRepository.findAllByCategoryAndMonth(categoryId, Integer.parseInt(mothYear[0]), Integer.parseInt(mothYear[1]));
        return transactions.stream().mapToInt(Transaction::getAmount).sum();
    }
}
