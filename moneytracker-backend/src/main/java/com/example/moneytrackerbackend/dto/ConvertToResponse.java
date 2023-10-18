package com.example.moneytrackerbackend.dto;

import com.example.moneytrackerbackend.dto.response.BudgetResponse;
import com.example.moneytrackerbackend.dto.response.CategoryResponse;
import com.example.moneytrackerbackend.dto.response.TransactionResponse;
import com.example.moneytrackerbackend.dto.response.UserResponse;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.entities.User;

public class ConvertToResponse {
    public static CategoryResponse convertCategory(Category category){
        CategoryResponse categoryResponse = CategoryResponse.builder()
                .categoryId(category.getId())
                .title(category.getTitle())
                .value(category.isValue())
                .build();
        return categoryResponse;
    }

    public static UserResponse convertUser(User user, int totalIncome, int totalSpending){
        UserResponse userResponse = UserResponse.builder()
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .urlImage("")
                .id(user.getId())
                .username(user.getUsername())
                .money(user.getMoney())
                .totalIncomeMoney(totalIncome)
                .totalSpendingMoney(totalSpending)
                .build();
        return userResponse;
    }

    public static TransactionResponse convertTransaction(Transaction transaction){
        TransactionResponse transactionResponse = TransactionResponse.builder()
                .transactionId(transaction.getId())
                .date(transaction.getDate())
                .description(transaction.getDescription())
                .amount(transaction.getAmount())
                .category(convertCategory(transaction.getCategory()))
                .build();
        return transactionResponse;
    }
    public static BudgetResponse convertBudget(Budget budget){
        BudgetResponse budgetResponse = BudgetResponse.builder()
                .id(budget.getId())
                .startDate(budget.getStartDate())
                .description(budget.getDescription())
                .amount(budget.getAmount())
                .category(convertCategory(budget.getCategory()))
                .endDate(budget.getEndDate())
                .build();
        return budgetResponse;
    }
}
