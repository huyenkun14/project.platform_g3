package com.example.moneytrackerbackend.entities;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    @Column(name = "image_id")
    private Long imageId;
    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;
}
