package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Image;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface ImageService {
    Image getImage(Long id);

    String getPathImage(Long id);

    Long saveUploadedFile(MultipartFile file);
    void deleteImage(Long id);
}
