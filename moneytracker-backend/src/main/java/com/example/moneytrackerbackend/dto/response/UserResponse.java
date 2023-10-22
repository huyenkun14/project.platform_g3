package com.example.moneytrackerbackend.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder

public class UserResponse {
    private Long id;
    private String username;
    private String urlImage;
    private String email;
    private String phoneNumber;
    private int totalIncomeMoney;
    private int totalSpendingMoney;
}
