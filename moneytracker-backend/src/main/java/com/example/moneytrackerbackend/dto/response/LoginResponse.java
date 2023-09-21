package com.example.moneytrackerbackend.dto.response;

import lombok.Data;

@Data
public class LoginResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private Long id;
    private String username;

    public LoginResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
