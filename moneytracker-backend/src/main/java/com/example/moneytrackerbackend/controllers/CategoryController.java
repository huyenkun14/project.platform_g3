package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @PostMapping("/api/v1/category/create")
    public ResponseEntity createCategory(@RequestBody CategoryRequest categoryRequest){
        Category category = categoryService.createCategory(categoryRequest);
        return ResponseEntity.ok(category);
    }
    @GetMapping("/api/vi/category")
    public ResponseEntity getCategory(@RequestParam Long categoryId){
        Category category = categoryService.getCategoryById(categoryId);
        return ResponseEntity.ok(category);
    }
    @GetMapping("/api/vi/category/categories")
    public  ResponseEntity getAllCategory(){
        List<Category> categories = categoryService.getAllCategory();
        return ResponseEntity.ok(categories);
    }
}
