package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class BudgetRequest {

    private Long BudgetId;

    @NotNull(message = "Category must not null")
    private Long categoryId;

    @NotNull(message = "Amount must not null")
    private int amount;

    @NotBlank(message = "Start date must not null")
    private String startDate;

    @NotBlank(message = "End date must not null")
    private String endDate;
}
