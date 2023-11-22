package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    @Size(min = 8, message = "Password must min 8 chart")
    private String password;

    @NotBlank
    @Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    private String email;

    @NotBlank(message = "Phone number must not null")
    private String phoneNumber;
}
