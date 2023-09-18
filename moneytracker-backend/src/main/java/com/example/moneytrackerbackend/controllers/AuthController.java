package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;

    @PostMapping(value = "/api/auth/login")
    public ResponseEntity login(){
        return ResponseEntity.status(200).build();
    }
    @GetMapping("api/auth/register")
    public ResponseEntity register(@RequestBody User user){
        return ResponseEntity.ok().build();
    }
}
