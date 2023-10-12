package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BudgetService {
    Transaction createBudget(BudgetRequest budgetRequest);

    Object updateBudget(BudgetRequest budgetRequest);

    Object getBudget(Long id);

    void deleteBudget(Long id);

    List<Budget> getAllBudget();
}
