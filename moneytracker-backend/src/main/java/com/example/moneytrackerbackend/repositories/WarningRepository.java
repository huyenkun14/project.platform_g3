package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Warning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface WarningRepository extends JpaRepository<Warning, Long> {
    List<Warning> findAllByUserIdOrderByIdDesc(Long userId);
}
