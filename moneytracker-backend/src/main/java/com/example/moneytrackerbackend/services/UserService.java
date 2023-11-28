package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.RegisterRequest;
import com.example.moneytrackerbackend.dto.request.ResetPasswordRequest;
import com.example.moneytrackerbackend.dto.request.UserRequest;
import com.example.moneytrackerbackend.entities.User;

public interface UserService {

    User getUser(Long id);

    User saveUser(RegisterRequest userRequest);

    void updateUser(UserRequest userRequest);

    void updatePassword(ResetPasswordRequest resetPasswordRequest, Long userId);
}
