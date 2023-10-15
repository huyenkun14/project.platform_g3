package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.dto.response.CategoryResponse;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/category/create")
    public ResponseEntity createCategory(@RequestBody CategoryRequest categoryRequest, Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        categoryRequest.setUserId(userId);
        Category category = categoryService.createCategory(categoryRequest);
        CategoryResponse categoryResponse = convertCategory(category);
        return ResponseEntity.ok(categoryResponse);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category")
    public ResponseEntity getCategory(@RequestParam Long categoryId){
        Category category = categoryService.getCategoryById(categoryId);
        CategoryResponse categoryResponse = convertCategory(category);
        return ResponseEntity.ok(categoryResponse);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/get-all")
    public  ResponseEntity getAllCategory(Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Category> categories = categoryService.getAllCategory(userId);
        List<CategoryResponse> responses = convertList(categories);
        return ResponseEntity.ok(responses);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/get")
    public  ResponseEntity getAllCategory(@RequestParam("value") boolean value, Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Category> categories = categoryService.getAllByValue(value, userId);
        List<CategoryResponse> responses = convertList(categories);
        return ResponseEntity.ok(responses);
    }

    public List<CategoryResponse> convertList(List<Category> categories){
        List<CategoryResponse> responses = new ArrayList<>();
        for (Category category: categories){
            CategoryResponse categoryResponse = CategoryResponse.builder()
                    .categoryId(category.getId())
                    .title(category.getTitle())
                    .value(category.isValue())
                    .build();
            responses.add(categoryResponse);
        }
        return responses;
    }
    public CategoryResponse convertCategory(Category category){
        CategoryResponse categoryResponse = CategoryResponse.builder()
                .categoryId(category.getId())
                .title(category.getTitle())
                .value(category.isValue())
                .build();
        return categoryResponse;
    }
}
