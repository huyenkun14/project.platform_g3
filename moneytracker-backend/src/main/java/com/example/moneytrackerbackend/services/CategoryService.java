package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    Category createCategory(CategoryRequest categoryRequest);
    List<Category> getAllCategory();
    Category getCategoryById(Long id);
}
