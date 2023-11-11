package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.ConvertToResponse;
import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.dto.response.CategoryResponse;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertCategory;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/category/create")
    public ResponseEntity<CategoryResponse> createCategory(@Valid @RequestBody CategoryRequest categoryRequest, Principal principal) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        categoryRequest.setUserId(userId);

        Category category = categoryService.createCategory(categoryRequest);

        return ResponseEntity.ok(convertCategory(category));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/api/v1/category/update")
    public ResponseEntity<CategoryResponse> updateCategory(@Valid @RequestBody CategoryRequest categoryRequest) {

        Category category = categoryService.updateCategory(categoryRequest);

        return ResponseEntity.ok(convertCategory(category));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/api/v1/category/delete")
    public ResponseEntity<MessageResponse> deleteCategory(@RequestParam("categoryId") Long id) {

        categoryService.deleteCategory(id);

        return ResponseEntity.ok(new MessageResponse("Success delete category"));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category")
    public ResponseEntity<CategoryResponse> getCategory(@RequestParam Long categoryId) {

        Category category = categoryService.getCategoryById(categoryId);

        return ResponseEntity.ok(convertCategory(category));
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/get-all")
    public ResponseEntity<List<CategoryResponse>> getAllCategory(Principal principal) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Category> categories = categoryService.getAllCategory(userId);

        return ResponseEntity.ok(categories.stream().map(ConvertToResponse::convertCategory).toList());
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/category/by-value")
    public ResponseEntity<List<CategoryResponse>> getAllCategory(@RequestParam("value") boolean value, Principal principal) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Category> categories = categoryService.getAllByValue(value, userId);

        return ResponseEntity.ok(categories.stream().map(ConvertToResponse::convertCategory).toList());
    }
}
