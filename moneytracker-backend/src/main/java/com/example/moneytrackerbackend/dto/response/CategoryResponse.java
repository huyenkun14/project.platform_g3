package com.example.moneytrackerbackend.dto.response;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class CategoryResponse {
    private Long categoryId;
    private String title;
    private String urlIcon;
    private Long iconId;
    private boolean value;
}
