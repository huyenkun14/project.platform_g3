package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/category/create")
    public ResponseEntity createCategory(@RequestBody CategoryRequest categoryRequest){
        Category category = categoryService.createCategory(categoryRequest);
        return ResponseEntity.ok(category);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category")
    public ResponseEntity getCategory(@RequestParam Long categoryId){
        Category category = categoryService.getCategoryById(categoryId);
        return ResponseEntity.ok(category);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/get-all")
    public  ResponseEntity getAllCategory(){
        List<Category> categories = categoryService.getAllCategory();
        return ResponseEntity.ok(categories);
    }
}
