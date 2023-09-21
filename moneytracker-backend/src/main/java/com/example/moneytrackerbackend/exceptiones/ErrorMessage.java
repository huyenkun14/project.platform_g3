package com.example.moneytrackerbackend.exceptiones;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ErrorMessage {
    private int statusCode;
    private String timestamp;
    private String message;
    private String description;
}
