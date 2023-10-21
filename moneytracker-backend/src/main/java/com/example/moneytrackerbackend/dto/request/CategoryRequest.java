package com.example.moneytrackerbackend.dto.request;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRequest {
    private Long categoryId;
    private Long userId;
    private String title;
    private Long iconId;
    private boolean value;
}
