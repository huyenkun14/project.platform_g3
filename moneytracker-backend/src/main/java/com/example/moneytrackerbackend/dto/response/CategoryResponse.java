package com.example.moneytrackerbackend.dto.response;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class CategoryResponse {
    private String title;
//    private MultipartFile image;
    private String status;
    private boolean value;
}
