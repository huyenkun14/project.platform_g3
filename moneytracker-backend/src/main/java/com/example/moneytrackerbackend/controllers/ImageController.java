package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.entities.Image;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.services.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class ImageController {
    private ImageService imageService;
    @PostMapping("/api/v1/image/upload")
    public ResponseEntity uploadImage(@RequestParam("image") MultipartFile img)throws IOException {
        Long imgId= imageService.saveUploadedFiles(img);
        return ResponseEntity.ok(imgId);
    }
    @PostMapping ("/api/v1/image")
    public ResponseEntity<Resource> getImage(@RequestParam("imageId") Long imageId) throws IOException {
        Path path = Paths.get(imageService.getPathImage(imageId));
        Image media =imageService.getImage(imageId);
        Resource resource = new UrlResource(path.toUri());
        if (resource.exists()) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.valueOf(media.getType()).toString())
                    .body(resource);
        } else {
            throw new CustomException("Error: can open image");
//            return ResponseEntity.notFound().build();
        }
    }
}