package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ResetPasswordRequest {

    @NotBlank(message = "Password must not null")
    @Size(min = 8, message = "Password must min 8 chart")
    private String prePassword;

    @NotBlank(message = "Password must not null")
    @Size(min = 8, message = "Password must min 8 chart")
    private String password;
}
