package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BudgetService {
    Budget createBudget(BudgetRequest budgetRequest);

    Budget updateBudget(BudgetRequest budgetRequest);

    Budget getBudget(Long id);

    void deleteBudget(Long id);

    List<Budget> getAllBudget(Long userId);

    List<Budget> getAllBudgetOfMonth(String monthAndYear, Long userId);

    List<Budget> getOverBudgets(Long userId);
}
