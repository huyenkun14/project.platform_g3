package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
