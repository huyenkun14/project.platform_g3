package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class BudgetRequest {

    private Long BudgetId;

    @NotBlank
    private Long categoryId;

    @NotBlank
    private int amount;

    @NotBlank
    private String startDate;

    @NotBlank
    private String endDate;
}
