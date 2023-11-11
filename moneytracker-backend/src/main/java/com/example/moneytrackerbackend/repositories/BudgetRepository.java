package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {

    @Query("SELECT b FROM Budget b WHERE b.category.id = :categoryId AND MONTH(b.startDate) = :month AND YEAR(b.startDate) = :year")
    Budget findByCategoryId(@Param("categoryId") Long categoryId,  @Param("month") int month, @Param("year") int year);
    List<Budget> findAllByCategoryUserIdOrderById(Long userId);

    @Query("SELECT b FROM Budget b WHERE b.category.user.id = :userId AND MONTH(b.startDate) = :month AND YEAR(b.startDate) = :year ORDER BY b.id")
    List<Budget> findBudgetByOfMonth(@Param("userId") Long userId, @Param("month") int month, @Param("year") int year);

    @Query("SELECT b FROM Budget b WHERE b.category.user.id = :userId AND b.endDate < :today ORDER BY b.id")
    List<Budget> findOverBudget(@Param("userId") Long userId, @Param("today") LocalDate today);
}

