package com.example.moneytrackerbackend.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class WarningResponse {
    private Long warningId;
    private String message;
    private LocalDateTime date;
}
