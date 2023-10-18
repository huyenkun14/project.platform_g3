package com.example.moneytrackerbackend.dto.request;

import jakarta.persistence.Column;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRequest {
    private Long userId;
    private String title;
    private Long imageId;
//    private String status;
    private boolean value;
}
