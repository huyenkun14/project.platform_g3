package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.entities.Image;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/api/v1/image/upload")
    public ResponseEntity<MessageResponse> uploadImage(@RequestParam("image") MultipartFile image) {

        Long imgId= imageService.saveUploadedFile(image);

        return ResponseEntity.ok( new MessageResponse("Success: "+imgId));
    }
    @GetMapping ("/api/image")
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
        }
    }



}
