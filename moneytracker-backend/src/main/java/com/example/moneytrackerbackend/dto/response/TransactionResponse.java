package com.example.moneytrackerbackend.dto.response;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TransactionResponse {
    private Long transactionId;
    private CategoryResponse category;
    private int amount;
    private String description;
    private LocalDate date;
    private String urlImage;
}
