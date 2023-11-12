package com.example.moneytrackerbackend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryRequest {

    private Long categoryId;

    private Long userId;

    @NotBlank(message = "Title must not null")
    private String title;

    private Long iconId;

    @NotNull(message = "Value must not null")
    private boolean value;
}
