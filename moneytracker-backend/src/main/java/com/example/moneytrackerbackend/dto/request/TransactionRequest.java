package com.example.moneytrackerbackend.dto.request;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TransactionRequest {

    private Long transactionId;

    @NotNull(message = "Category must not null")
    private Long categoryId;

    @NotNull(message = "Amount must not null")
    private int amount;

    private MultipartFile image;

    private String description;

    @NotBlank(message = "Date must not null")
    private String date;
}
