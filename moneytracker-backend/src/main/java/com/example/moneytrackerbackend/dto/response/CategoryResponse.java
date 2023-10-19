package com.example.moneytrackerbackend.dto.response;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class CategoryResponse {
    private Long categoryId;
    private String title;
    private String urlIcon;
    private boolean value;
}
