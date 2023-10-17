package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.BudgetRequest;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.entities.Budget;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class BudgetController {
    @Autowired
    private BudgetService budgetService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/budget/create")
    public ResponseEntity createBudget(@RequestBody BudgetRequest budgetRequest, Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        budgetRequest.setUserId(userId);
        Budget budget = budgetService.createBudget(budgetRequest);
        return ResponseEntity.ok(budget);
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/api/v1/budget/delete")
    public ResponseEntity deleteBudget(@RequestParam("budgetId") Long id){
        budgetService.deleteBudget(id);
        return ResponseEntity.ok(new MessageResponse("Success delete budget"));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget/get-all")
    public ResponseEntity getAllBudget(Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        return ResponseEntity.ok(budgetService.getAllBudget(userId));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/api/v1/budget/update")
    public ResponseEntity updateBudget(@RequestBody BudgetRequest budgetRequest){
        return ResponseEntity.ok(budgetService.updateBudget(budgetRequest));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget")
    public ResponseEntity getTransaction(@RequestParam("budgetId") Long id){
        return ResponseEntity.ok(budgetService.getBudget(id));
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget/get-of-month")
    public ResponseEntity getAllBudgetOfMonth(Principal principal, @RequestParam String monthAndYear){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Budget> budgetsOfMonth = budgetService.getAllBudgetOfMonth(monthAndYear, userId);
        return ResponseEntity.ok(budgetsOfMonth);
    }


    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/api/v1/budget/get-over")
    public ResponseEntity getAllBudgetOfMonth(Principal principal){
        UserDetailsImpl userDetails= (UserDetailsImpl) ((UsernamePasswordAuthenticationToken) principal).getPrincipal();
        Long userId = userDetails.getId();
        List<Budget> overBudgets = budgetService.getOverBudgets( userId);
        return ResponseEntity.ok(overBudgets);
    }
}
