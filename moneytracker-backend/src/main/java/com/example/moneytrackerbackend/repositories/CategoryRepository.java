package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Category;
import com.example.moneytrackerbackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByTitle(String title);
    @Query("select COUNT(c) FROM Category c WHERE c.user.id = :userId AND c.title = :title")
    int existsByTitle(@Param("title") String title, @Param("userId") Long userId);
    List<Category> findAllByValueAndUser(boolean value, User user);
    List<Category> findAllByUser(User user);

}
