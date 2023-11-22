package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query("SELECT t FROM Transaction t WHERE t.category.user.id = :userId ORDER BY t.date DESC, t.id DESC")
    List<Transaction> findAllOrderByIdDesc(Long userId);

    List<Transaction> findAllByCategoryIdOrderByIdDesc(Long categoryId);

    @Query("SELECT t FROM Transaction t WHERE t.category.user.id = :userId AND MONTH(t.date) = :month AND YEAR(t.date) = :year ORDER BY t.date DESC, t.id DESC")
    List<Transaction> findAllByMonth(@Param("userId") Long userId, @Param("month") int month, @Param("year") int year);

    @Query("SELECT COALESCE(sum(t.amount), 0) FROM Transaction t WHERE t.category.id =:categoryId AND MONTH(t.date) = :month AND YEAR(t.date) = :year")
    int sumAmountByCategory(@Param("categoryId") Long categoryId, @Param("month") int month, @Param("year") int year);

    @Query("SELECT t FROM Transaction t WHERE t.category.id = :categoryId AND MONTH(t.date) = :month AND YEAR(t.date) = :year ORDER BY t.date DESC, t.id DESC ")
    List<Transaction> findAllByCategoryAndMonth(@Param("categoryId") Long categoryId, @Param("month") int month, @Param("year") int year);
}
