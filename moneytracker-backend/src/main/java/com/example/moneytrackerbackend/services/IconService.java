package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Icon;
import com.example.moneytrackerbackend.entities.Image;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface IconService {
    Icon getIcon(Long id);

    String getPathIcon(Long id);

    Long saveUploadedIcon(MultipartFile file) throws IOException;

    void uploadFiles(MultipartFile[] files) throws IOException;

    List<Icon> getAllIcon();
}
