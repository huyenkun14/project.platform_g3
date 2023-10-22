package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    @Query("SELECT t FROM Transaction t WHERE t.category.user.id = :userId ORDER BY t.date")
    List<Transaction> findAllByUserIdOrderByDate(Long userId);

    List<Transaction> findAllByCategoryIdOrderByDate(Long categoryId);

    @Query("SELECT t FROM Transaction t WHERE t.category.user.id = :userId AND MONTH(t.date) = :month AND YEAR(t.date) = :year ")
    List<Transaction> findTransactionsOfMonth(@Param("userId") Long userId, @Param("month") int month, @Param("year") int year);

    @Query("SELECT sum(t.amount) FROM Transaction t WHERE t.category.id =:categoryId")
    int sumAmountByCategory(@Param("categoryId") Long categoryId);

    @Query("SELECT t FROM Transaction t WHERE t.category.id = :categoryId AND MONTH(t.date) = :month AND YEAR(t.date) = :year ")
    List<Transaction> findTransactionByCategoryAndMonth(@Param("categoryId") Long categoryId, @Param("month") int month, @Param("year") int year);
}
