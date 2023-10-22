package com.example.moneytrackerbackend.dto.response;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class BudgetResponse {
    private Long budgetId;
    private CategoryResponse category;
    private LocalDate startDate;
    private LocalDate endDate;
    private int amount;
}
