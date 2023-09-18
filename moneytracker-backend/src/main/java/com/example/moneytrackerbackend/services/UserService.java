package com.example.moneytrackerbackend.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserDetails loadUserByUsername(String username);

    UserDetails loadUserById(Long id);
}
