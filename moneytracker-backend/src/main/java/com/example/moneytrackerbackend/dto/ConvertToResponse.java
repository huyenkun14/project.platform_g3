package com.example.moneytrackerbackend.dto;

import com.example.moneytrackerbackend.dto.response.*;
import com.example.moneytrackerbackend.entities.*;

public class ConvertToResponse {
    public static CategoryResponse convertCategory(Category category) {

        CategoryResponse categoryResponse = CategoryResponse.builder()
                .categoryId(category.getId())
                .iconId(category.getIconId())
                .title(category.getTitle())
                .value(category.isValue())
                .build();

        if (category.getIconId()!= null){
            categoryResponse.setUrlIcon("/icon?iconId=" + category.getIconId());
        }

        return categoryResponse;
    }

    public static UserResponse convertUser(User user, int totalIncome, int totalSpending) {

        UserResponse userResponse = UserResponse.builder()
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .id(user.getId())
                .username(user.getUsername())
                .totalIncomeMoney(totalIncome)
                .totalSpendingMoney(totalSpending)
                .build();

        if (user.getImageId()!= null){
            userResponse.setUrlImage("/image?imageId=" + user.getImageId());
        }

        return userResponse;
    }

    public static TransactionResponse convertTransaction(Transaction transaction) {

        TransactionResponse transactionResponse = TransactionResponse.builder()
                .transactionId(transaction.getId())
                .date(transaction.getDate())
                .description(transaction.getDescription())
                .amount(transaction.getAmount())
                .category(convertCategory(transaction.getCategory()))
                .build();

        if (transaction.getImageId()!= null){
            transactionResponse.setUrlImage("/image?imageId=" +  transaction.getImageId());
        }

        return transactionResponse;
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
    public static WarningResponse convertWarning(Warning warning){

        return WarningResponse.builder()
                .warningId(warning.getId())
                .message(warning.getMessage())
                .date(warning.getDate())
                .build();
    }
}
