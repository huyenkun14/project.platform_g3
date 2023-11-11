package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.BudgetRepository;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import static com.example.moneytrackerbackend.utils.TimeUtil.formatterDate;

@Service
@RequiredArgsConstructor
public class BudgetServiceImp implements BudgetService {
    private final BudgetRepository budgetRepository;
    private final CategoryRepository categoryRepository;



    public Budget createBudget(BudgetRequest budgetRequest) {

        Category category = categoryRepository.findById(budgetRequest.getCategoryId())
                .orElseThrow(() -> new CustomException("Error: no category"));

        Budget budget = Budget.builder()
                .category(category)
                .startDate(formatterDate(budgetRequest.getStartDate()))
                .endDate(formatterDate(budgetRequest.getEndDate()))
                .amount(budgetRequest.getAmount())
                .build();
        budget = budgetRepository.save(budget);

        return budget;
    }

    public Budget updateBudget(BudgetRequest budgetRequest) {

        Budget budget = getBudget(budgetRequest.getBudgetId());
        budget.setAmount(budgetRequest.getAmount());
        budget = budgetRepository.save(budget);

        return budget;
    }

    public Budget getBudget(Long id) {
        return budgetRepository.findById(id)
                .orElseThrow(() -> new CustomException("Error: no budget"));
    }

    public void deleteBudget(Long id) {
        budgetRepository.deleteById(id);
    }

    public List<Budget> getAllBudget(Long userId) {
        return budgetRepository.findAllByCategoryUserIdOrderById(userId);
    }

    public List<Budget> getAllBudgetOfMonth(String monthAndYear, Long userId) {

        String[] monthYear = monthAndYear.split("-");
        return budgetRepository.findBudgetByOfMonth(userId, Integer.parseInt(monthYear[0]), Integer.parseInt(monthYear[1]));
    }

    public List<Budget> getOverBudgets(Long userId) {

        LocalDate today = LocalDate.now();
        return budgetRepository.findOverBudget(userId, today);
    }
}
