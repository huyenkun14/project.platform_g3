package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByTitleAndUserId(String title, Long userID);

    @Query("select COUNT(c) FROM Category c WHERE c.user.id = :userId AND c.title = :title")
    int existsByTitle(@Param("title") String title, @Param("userId") Long userId);

    List<Category> findAllByValueAndUserId(boolean value, Long userId);

    List<Category> findAllByUserId(Long userId);

}
