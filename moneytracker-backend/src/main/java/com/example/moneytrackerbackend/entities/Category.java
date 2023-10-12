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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(name = "image_id")
    private Long imageId;
    private String status;
    //xác định khoản thu hay chi: true=0=thu, false=1=chi
    private boolean value;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
