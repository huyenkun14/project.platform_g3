package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Warning;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface WarningService {
    int checkBudget(Long categoryId, LocalDate date);
    List<Warning> getAllWarning(Long userId);
    Warning createWarning(Long transactionId, int amount);
}
