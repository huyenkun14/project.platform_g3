package com.example.moneytrackerbackend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AmountOfCategory {
    private CategoryResponse category;
    private int totalAmount;
}
