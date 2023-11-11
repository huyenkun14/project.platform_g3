package com.example.moneytrackerbackend.dto.request;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class TransactionRequest {

    private Long transactionId;
    private Long categoryId;
    private int amount;
    private MultipartFile image;
    private String description;
    private String date;
}
