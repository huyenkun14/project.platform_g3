package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.BudgetRepository;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetServiceImp  implements BudgetService{
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private BudgetRepository budgetRepository;
    @Autowired
    private UserRepository userRepository;

    public Budget createBudget(BudgetRequest budgetRequest){
        Category category = categoryRepository.findById(budgetRequest.getCategoryId())
                .orElseThrow(()-> new CustomException("Error: no category"));
        User user =   userRepository.findById(budgetRequest.getUserId())
                .orElseThrow(()-> new CustomException("Error: no user"));
        Budget budget = Budget.builder()
                .user(user)
                .category(category)

                .amount(budgetRequest.getAmount())
                .description(budgetRequest.getDescription())
                .build();
        budget = budgetRepository.save(budget);
        return budget;
    }

    public Budget updateBudget(BudgetRequest budgetRequest){
        Budget budget = Budget.builder().build();
        budget = budgetRepository.save(budget);
        return budget;
    }

    public Budget getBudget(Long id){
        Budget budget= budgetRepository.findById(id)
                .orElseThrow(()-> new CustomException("Error: no budget"));
        return budget;
    }

    public void deleteBudget(Long id){
        budgetRepository.deleteById(id);
    }

    public List<Budget> getAllBudget(){
        return budgetRepository.findAll();
    };
}
