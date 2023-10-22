package com.example.moneytrackerbackend.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class UserRequest {
    private String username;
    private String password;
    private MultipartFile avatar;
    private String email;
    private String phoneNumber;
}
