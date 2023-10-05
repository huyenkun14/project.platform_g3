package com.example.moneytrackerbackend.dto.request;


import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TransactionRequest {
    private Long userId;
    private Long categoryId;
    private Double amount;
    private String description;
    private LocalDateTime datetime;
}
