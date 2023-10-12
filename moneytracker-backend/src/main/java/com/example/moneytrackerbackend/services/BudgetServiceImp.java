package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.repositories.BudgetRepository;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BudgetServiceImp  implements BudgetService{
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private BudgetRepository budgetRepository;

//    public Budget createBudget(){
//
//    }
}
