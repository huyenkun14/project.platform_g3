package com.example.moneytrackerbackend.dto.request;

import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDate;

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
