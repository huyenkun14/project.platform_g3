package com.example.moneytrackerbackend.dto.request;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRequest {
    private Long userId;
    private String title;
    private Long iconId;
//    private String status;
    private boolean value;
}
