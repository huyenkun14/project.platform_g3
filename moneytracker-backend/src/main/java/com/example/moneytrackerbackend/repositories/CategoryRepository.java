package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT COUNT(c) FROM Category c WHERE c.user.id = :userId AND c.title = :title")
    int existsByTitle(@Param("title") String title, @Param("userId") Long userId);

    @Query("SELECT c FROM Category c WHERE c.user.id = :userId AND c.value = :value ORDER BY CASE  WHEN c.title = 'Thu nhập mặc định' THEN 1 WHEN c.title= 'Chi tiêu mặc định' THEN 2 ELSE 0 END ASC , c.title DESC")
    List<Category> findAllByValueAndUserId(@Param("value") boolean value, @Param("userId") Long userId);

    @Query("SELECT c FROM Category c WHERE c.user.id = :userId ORDER BY CASE  WHEN c.title = 'Thu nhập mặc định' THEN 1 WHEN c.title= 'Chi tiêu mặc định' THEN 2 ELSE 0 END ASC , c.title DESC")
    List<Category> findAllByUserId(@Param("userId") Long userId);

}
