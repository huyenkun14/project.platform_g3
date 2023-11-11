package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRequest {

    private Long categoryId;
    @NotBlank
    private Long userId;
    @NotBlank
    private String title;
    private Long iconId;
    @NotBlank
    private boolean value;
}
