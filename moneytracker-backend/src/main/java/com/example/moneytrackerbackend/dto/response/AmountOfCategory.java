package com.example.moneytrackerbackend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AmountOfCategory implements Comparable<AmountOfCategory> {
    private String color;
    private CategoryResponse category;
    private int totalAmount;

    @Override
    public int compareTo(AmountOfCategory o) {
        return this.totalAmount - o.getTotalAmount();
    }
}
