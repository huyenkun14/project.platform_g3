package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class RegisterRequest {

    @NotBlank(message = "Username must not null")
    private String username;

    @NotBlank(message = "Password must not null")
    @Min(value = 8, message = "Password must min 8 chart")
    private String password;

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "Phone number must not null")
    private String phoneNumber;
}
