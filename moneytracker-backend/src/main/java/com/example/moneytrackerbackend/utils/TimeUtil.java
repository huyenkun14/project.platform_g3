package com.example.moneytrackerbackend.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class TimeUtil {
    static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    public static LocalDate formatterDate(String date){
        return LocalDate.parse(date, formatter);
    }
}
