package com.example.moneytrackerbackend.dto.response;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class BudgetResponse {
    private Long id;
    private CategoryResponse category;
    private LocalDate startDate;
    private LocalDate endDate;
    private int amount;
    private String description;
}
