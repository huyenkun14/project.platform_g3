package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    Category createCategory(CategoryRequest categoryRequest);
    void createDefaultCategory(Long userId);

    List<Category> getAllCategory(Long userId);

    List<Category> getAllByValue(boolean value, Long userId);

    Category getCategoryById(Long id);

    void deleteCategory(Long id);

    Category updateCategory(CategoryRequest categoryRequest);
}
