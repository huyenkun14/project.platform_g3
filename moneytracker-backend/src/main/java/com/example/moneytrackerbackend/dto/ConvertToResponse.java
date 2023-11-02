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
    public static CategoryResponse convertCategory(Category category) {
        return CategoryResponse.builder()
                .categoryId(category.getId())
                .iconId(category.getIconId())
                .urlIcon("/icon?iconId=" + category.getIconId())
                .title(category.getTitle())
                .value(category.isValue())
                .build();
    }

    public static UserResponse convertUser(User user, int totalIncome, int totalSpending) {
        return UserResponse.builder()
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .urlImage("/image?imageId=" + user.getImageId())
                .id(user.getId())
                .username(user.getUsername())
                .totalIncomeMoney(totalIncome)
                .totalSpendingMoney(totalSpending)
                .build();
    }

    public static TransactionResponse convertTransaction(Transaction transaction) {
        return TransactionResponse.builder()
                .transactionId(transaction.getId())
                .date(transaction.getDate())
                .description(transaction.getDescription())
                .amount(transaction.getAmount())
                .category(convertCategory(transaction.getCategory()))
                .urlImage("/image?imageId=" + transaction.getImageId())
                .build();
    }

    public static BudgetResponse convertBudget(Budget budget) {
        return BudgetResponse.builder()
                .budgetId(budget.getId())
                .startDate(budget.getStartDate())
                .amount(budget.getAmount())
                .category(convertCategory(budget.getCategory()))
                .endDate(budget.getEndDate())
                .build();
    }
}
