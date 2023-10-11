package com.example.moneytrackerbackend.dto.request;


import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TransactionRequest {
    private Long transactionId;
    private Long userId;
    private Long categoryId;
    private int amount;
    private String description;
    private LocalDate date;
}
