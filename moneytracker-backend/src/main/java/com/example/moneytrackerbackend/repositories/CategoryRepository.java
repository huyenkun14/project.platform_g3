package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByTitle(String title);
    Boolean existsByTitle(String title);
}
