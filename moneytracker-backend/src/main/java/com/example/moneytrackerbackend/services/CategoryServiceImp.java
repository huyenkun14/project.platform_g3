package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.CategoryRequest;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImp implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserServiceImp userService;
    public Category createCategory(CategoryRequest categoryRequest){
        if(categoryRepository.existsByTitle(categoryRequest.getTitle())){
            throw new CustomException("Error: Name category da ton tai!!!");
        }
        User user = userService.getUser(categoryRequest.getUserId());
        Category category = Category.builder()
                .title(categoryRequest.getTitle())
                .user(user)
                .value(categoryRequest.isValue()).build();
        return categoryRepository.save(category);
    }
    public List<Category> getAllCategory(Long userId){
        User user = userService.getUser(userId);
        List<Category> categories=categoryRepository.findAllByUser(user);
        return categories;
    }
    public List<Category> getAllByValue(boolean value, Long userId){
        User user = userService.getUser(userId);
        List<Category> categories = categoryRepository.findAllByValueAndUser(value,user);
        return categories;
    }

    public Category getCategoryById(Long id){
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new CustomException("Error: no category"));
        return category;
    }
}
