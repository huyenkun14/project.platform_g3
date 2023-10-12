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
    private UserRepository userRepository;
    public Category createCategory(CategoryRequest categoryRequest){
        if(categoryRepository.existsByTitle(categoryRequest.getTitle())){
            throw new CustomException("Error: Name category ddax toonf taij!!!");
        }
        User user = userRepository.findById(categoryRequest.getUserId())
                .orElseThrow(()-> new CustomException("Error: not user")) ;

        Category category = Category.builder()
                .title(categoryRequest.getTitle())
                .user(user)
                .status(categoryRequest.getStatus())
                .value(categoryRequest.isValue()).build();
        return categoryRepository.save(category);
    }
    public List<Category> getAllCategory(){

        List<Category> categories=categoryRepository.findAll();
        return categories;
    }
    public List<Category> getAllByValue(boolean value){
        List<Category> categories = categoryRepository.findAllByValue(value);
        return categories;
    }

    public Category getCategoryById(Long id){
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new CustomException("Error: Category nay khong ton tai"));
        return category;
    }
}
