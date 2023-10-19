package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CategoryServiceImp implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public CategoryServiceImp(CategoryRepository categoryRepository, TransactionRepository transactionRepository, UserRepository userRepository) {
        this.categoryRepository = categoryRepository;
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }

    public Category createCategory(CategoryRequest categoryRequest) {
        if (categoryRepository.existsByTitle(categoryRequest.getTitle(), categoryRequest.getUserId()) > 0) {
            throw new CustomException("Error: Name category already exists!!!");
        }
        User user = userRepository.findById(categoryRequest.getUserId()).orElseThrow(() -> new CustomException("Error: no use"));

        Category category = Category.builder()
                .title(categoryRequest.getTitle())
                .user(user)
                .value(categoryRequest.isValue()).build();
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategory(Long userId) {
        return categoryRepository.findAllByUserId(userId);
    }

    public List<Category> getAllByValue(boolean value, Long userId) {
        return categoryRepository.findAllByValueAndUserId(value, userId);
    }

    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new CustomException("Error: no category"));
    }

    public void deleteCategory(Long id) {
        Category category = getCategoryById(id);
        List<Transaction> transactions = transactionRepository.findAllByCategoryIdOrderByDate(category.getId());
        if(!transactions.isEmpty()){
            throw new CustomException("Error: Have transaction of this category");
        }
        categoryRepository.deleteById(id);
    }
}
