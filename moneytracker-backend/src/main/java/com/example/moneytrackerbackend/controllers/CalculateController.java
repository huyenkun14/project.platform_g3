package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.response.AmountOfCategory;
import com.example.moneytrackerbackend.dto.response.MonthlyData;
import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.Transaction;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.CategoryService;
import com.example.moneytrackerbackend.services.TransactionService;
import com.example.moneytrackerbackend.utils.ColorUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertCategory;

@RestController
@RequiredArgsConstructor
public class CalculateController {
    private final CategoryService categoryService;
    private final TransactionService transactionService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/financial-summary/yearly")
    public ResponseEntity<List<MonthlyData>> calculateYearly(Principal principal, @RequestParam("year") int year) {

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<String> listMonthOfYear = new ArrayList<>();
        for (int month = 1; month <= 12; month++) {
            listMonthOfYear.add(month + "-" + year);
        }

        List<MonthlyData> yearlyData = new ArrayList<>();
        for (String monthAndYear : listMonthOfYear) {
            List<Transaction> transactions = transactionService.getTransactionOfMonth(monthAndYear, userId);
            MonthlyData monthlyData = new MonthlyData();
            monthlyData.setMonth(monthAndYear);
            monthlyData.setIncomeMoney(transactions.stream()
                    .filter(t -> t.getCategory().isValue())
                    .mapToInt(Transaction::getAmount).sum());
            monthlyData.setSpendingMoney(transactions.stream()
                    .filter(t -> !t.getCategory().isValue())
                    .mapToInt(Transaction::getAmount).sum());
            yearlyData.add(monthlyData);
        }

        return ResponseEntity.ok(yearlyData);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/financial-summary/each-category")
    public ResponseEntity<List<AmountOfCategory>> calculateForEachCategory(@RequestParam boolean value, @RequestParam String monthAndYear, Principal principal){

        UserDetailsImpl userDetails = (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();

        Long userId = userDetails.getId();
        List<Category> categories = categoryService.getAllByValue(value, userId);

        List<AmountOfCategory> dataOfCategories = new ArrayList<>();
        for (Category category:categories){
            AmountOfCategory dataOfCategory = new AmountOfCategory();
            dataOfCategory.setColor(ColorUtil.getColorByIndex(dataOfCategories.size()));
            dataOfCategory.setCategory(convertCategory(category));
            dataOfCategory.setTotalAmount(transactionService.getSumAmountByCategory(category.getId(), monthAndYear));
            if(dataOfCategory.getTotalAmount()!=0){
                dataOfCategories.add(dataOfCategory);
            }
        }
        Collections.sort(dataOfCategories);

        return ResponseEntity.ok(dataOfCategories);
    }
}
