package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Warning;
import com.example.moneytrackerbackend.repositories.BudgetRepository;
import com.example.moneytrackerbackend.repositories.TransactionRepository;
import com.example.moneytrackerbackend.repositories.WarningRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WaringServiceImp implements WarningService{
    private final TransactionRepository transactionRepository;
    private final WarningRepository warningRepository;
    private final BudgetRepository budgetRepository;

    public int checkBudget(Long categoryId, LocalDate date){
        int sumAmount = transactionRepository.sumAmountByCategory(categoryId, date.getMonthValue(), date.getYear());
        Budget budget = budgetRepository.findByCategoryId(categoryId, date.getMonthValue(), date.getYear());
        if(budget.getAmount()>0){
            return budget.getAmount() - sumAmount;
        }
        else return 0;
    }
    public List<Warning> getAllWarning(Long userId){
        return warningRepository.findAllByUserIdOrderByDate(userId);
    }
}
