package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImp implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public Category createCategory(CategoryRequest categoryRequest) {

        if (categoryRepository.existsByTitle(categoryRequest.getTitle(), categoryRequest.getUserId()) > 0) {
            throw new CustomException("Error: Name category already exists!!!");
        }

        User user = userRepository.findById(categoryRequest.getUserId()).orElseThrow(() -> new CustomException("Error: no use"));

        Category category = Category.builder()
                .title(categoryRequest.getTitle())
                .user(user)
                .iconId(categoryRequest.getIconId())
                .value(categoryRequest.isValue()).build();

        return categoryRepository.save(category);
    }
    public Category updateCategory(CategoryRequest categoryRequest){

        Category category = getCategoryById(categoryRequest.getCategoryId());
        category.setIconId(categoryRequest.getIconId());
        category.setTitle(categoryRequest.getTitle());
        category.setValue(categoryRequest.isValue());

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

        List<Transaction> transactions = transactionRepository.findAllByCategoryIdOrderByIdDesc(category.getId());
        if(!transactions.isEmpty()){
            throw new CustomException("Error: Have transaction of this category");
        }
        categoryRepository.deleteById(id);
    }
    public void createDefaultCategory(Long userId){
        CategoryRequest defaultIncomeCategory = CategoryRequest.builder()
                .userId(userId)
                .title("Thu nhập mặc định")
                .iconId(Long.parseLong("1"))
                .value(true)
                .build();
        createCategory(defaultIncomeCategory);

        CategoryRequest defaultSpendingCategory = CategoryRequest.builder()
                .userId(userId)
                .title("Chi tiêu mặc định")
                .iconId(Long.parseLong("1"))
                .value(false)
                .build();

        createCategory(defaultSpendingCategory);
    }
}
