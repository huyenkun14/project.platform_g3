package com.example.moneytrackerbackend.repositories;

import com.example.moneytrackerbackend.entities.Icon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IconRepository extends JpaRepository<Icon, Long> {

}
