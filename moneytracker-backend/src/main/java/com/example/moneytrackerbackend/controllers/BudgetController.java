package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.ConvertToResponse;
import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.dto.response.BudgetResponse;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.BudgetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

import static com.example.moneytrackerbackend.dto.ConvertToResponse.convertBudget;

@RestController
@RequiredArgsConstructor
public class BudgetController {

    private final BudgetService budgetService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/budget/create")
    public ResponseEntity<BudgetResponse> createBudget(@Valid @RequestBody BudgetRequest budgetRequest){

        Budget budget = budgetService.createBudget(budgetRequest);

        return ResponseEntity.ok(convertBudget(budget));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/api/v1/budget/update")
    public ResponseEntity<BudgetResponse> updateBudget(@Valid @RequestBody BudgetRequest budgetRequest){

        Budget budget = budgetService.updateBudget(budgetRequest);

        return ResponseEntity.ok(convertBudget(budget));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/api/v1/budget/delete")
    public ResponseEntity<MessageResponse> deleteBudget(@RequestParam("budgetId") Long id){

        budgetService.deleteBudget(id);

        return ResponseEntity.ok(new MessageResponse("Success delete budget"));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget/get-all")
    public ResponseEntity<List<BudgetResponse>> getAllBudget(Principal principal){

        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Budget> budgets = budgetService.getAllBudget(userId);

        return ResponseEntity.ok(budgets.stream().map(ConvertToResponse::convertBudget).toList());
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget")
    public ResponseEntity<BudgetResponse> getTransaction(@RequestParam("budgetId") Long id){

        Budget budget = budgetService.getBudget(id);

        return ResponseEntity.ok(convertBudget(budget));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget/get-of-month")
    public ResponseEntity<List<BudgetResponse>> getAllBudgetOfMonth(Principal principal, @RequestParam String monthAndYear){

        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Budget> budgetsOfMonth = budgetService.getAllBudgetOfMonth(monthAndYear, userId);
        return ResponseEntity.ok(budgetsOfMonth.stream().map(ConvertToResponse::convertBudget).toList());
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget/get-over")
    public ResponseEntity<List<BudgetResponse>> getAllBudgetOfMonth(Principal principal){

        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();

        List<Budget> overBudgets = budgetService.getOverBudgets( userId);
        return ResponseEntity.ok(overBudgets.stream().map(ConvertToResponse::convertBudget).toList());
    }
}
