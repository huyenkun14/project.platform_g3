package com.example.moneytrackerbackend.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyData {
    private String month;
    private int incomeMoney;
    private int spendingMoney;
}
