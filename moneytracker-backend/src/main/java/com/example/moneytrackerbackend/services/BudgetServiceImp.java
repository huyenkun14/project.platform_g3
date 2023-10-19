package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.BudgetRepository;
import com.example.moneytrackerbackend.repositories.CategoryRepository;
import com.example.moneytrackerbackend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class BudgetServiceImp implements BudgetService {
    private final BudgetRepository budgetRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public BudgetServiceImp(BudgetRepository budgetRepository, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.budgetRepository = budgetRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    public Budget createBudget(BudgetRequest budgetRequest) {
        Category category = categoryRepository.findById(budgetRequest.getCategoryId())
                .orElseThrow(() -> new CustomException("Error: no category"));
        User user = userRepository.findById(budgetRequest.getUserId()).orElseThrow(() -> new CustomException("Error: no use"));

        Budget budget = Budget.builder()
                .user(user)
                .category(category)
                .startDate(LocalDate.parse(budgetRequest.getStartDate(), formatter))
                .endDate(LocalDate.parse(budgetRequest.getEndDate(), formatter))
                .amount(budgetRequest.getAmount())
                .description(budgetRequest.getDescription())
                .build();
        budget = budgetRepository.save(budget);
        return budget;
    }

    public Budget updateBudget(BudgetRequest budgetRequest) {
        Budget budget = getBudget(budgetRequest.getId());
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
        return budgetRepository.findAllByUserId(userId);
    }

    public List<Budget> getAllBudgetOfMonth(String monthAndYear, Long userId) {
        String[] monthYear = monthAndYear.split("/");
        return budgetRepository.findBudgetByOfMonth(userId, Integer.parseInt(monthYear[0]), Integer.parseInt(monthYear[1]));
    }

    public List<Budget> getOverBudgets(Long userId) {
        LocalDate now = LocalDate.now();
        int month = now.getMonthValue();
        int year = now.getYear();
        return budgetRepository.findOverBudget(userId, month, year);
    }
}
