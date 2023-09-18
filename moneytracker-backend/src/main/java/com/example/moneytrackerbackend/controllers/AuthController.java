package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.request.LoginRequest;
import com.example.moneytrackerbackend.dto.response.LoginResponse;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.security.AuthTokenFilter;
import com.example.moneytrackerbackend.security.JwtUtils;
import com.example.moneytrackerbackend.security.UserDetailsImpl;
import com.example.moneytrackerbackend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils tokenProvider;
    @PostMapping(value = "/api/auth/login")
    public ResponseEntity login(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken((UserDetailsImpl) authentication.getPrincipal());
        return ResponseEntity.ok(new LoginResponse(jwt));
    }
    @GetMapping("api/auth/register")
    public ResponseEntity register(@RequestBody User user){
        return ResponseEntity.ok().build();
    }
}
