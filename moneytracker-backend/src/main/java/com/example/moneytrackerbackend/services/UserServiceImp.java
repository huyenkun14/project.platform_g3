package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.UserRepository;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserDetailsService {
    private final UserRepository userRepository;

    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new CustomException("User not found with username: " + username);
        }
        return UserDetailsImpl.build(user);
    }

    public User getUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new CustomException("Error: no use"));
        return user;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

}
