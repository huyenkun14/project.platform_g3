package com.example.moneytrackerbackend.dto.request;

import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class BudgetRequest {
    private Long id;
    private Long userId;
    private Long categoryId;
    private int amount;
    private String startDate;
    private String endDate;
    private String description;
}
