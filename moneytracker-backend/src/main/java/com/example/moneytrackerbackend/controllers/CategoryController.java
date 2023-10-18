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

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertCategory;

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
        return ResponseEntity.ok(convertCategory(category));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/get-all")
    public  ResponseEntity getAllCategory(Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Category> categories = categoryService.getAllCategory(userId);
        List<CategoryResponse> responses = new ArrayList<>();
        for (Category category: categories){
            responses.add(convertCategory(category));
        }
        return ResponseEntity.ok(responses);
    }
//    @PreAuthorize("hasRole('ROLE_USER')")
//    @DeleteMapping("/api/v1/category/delete")
//    public ResponseEntity deleteCategory(@RequestParam("categoryId") Long id){
//        categoryService.
//    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/by-value")
    public ResponseEntity getAllCategory(@RequestParam("value") boolean value, Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Category> categories = categoryService.getAllByValue(value, userId);
        List<CategoryResponse> responses = new ArrayList<>();
        for (Category category: categories){
            responses.add(convertCategory(category));
        }
        return ResponseEntity.ok(responses);
    }

}
