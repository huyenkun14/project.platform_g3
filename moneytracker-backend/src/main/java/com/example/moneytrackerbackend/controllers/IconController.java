package com.example.moneytrackerbackend.controllers;

import com.example.moneytrackerbackend.dto.response.IconResponse;
import com.example.moneytrackerbackend.dto.response.MessageResponse;
import com.example.moneytrackerbackend.entities.Icon;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.services.IconService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class IconController {
    private final IconService iconService;
    @PostMapping("/api/icon/upload")
    public ResponseEntity<MessageResponse> uploadIcon(@RequestParam("icons") MultipartFile[] icons)throws IOException {

        iconService.uploadFiles(icons);

        return ResponseEntity.ok( new MessageResponse("Success"));
    }
    @GetMapping("/api/icon")
    public ResponseEntity<Resource> getIcon(@RequestParam("iconId") Long iconId) throws IOException {

        Path path = Paths.get(iconService.getPathIcon(iconId));
        Icon media =iconService.getIcon(iconId);
        Resource resource = new UrlResource(path.toUri());

        if (resource.exists()) {

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.valueOf(media.getType()).toString())
                    .body(resource);
        } else {

            throw new CustomException("Error: can open icon");
        }
    }
    @GetMapping("/api/icon/get-all")
    public ResponseEntity<List<IconResponse>> getAllIcon(){

        List<Icon> icons = iconService.getAllIcon();
        List<IconResponse> iconResponses = new ArrayList<>();

        for(Icon icon: icons){
            iconResponses.add(new IconResponse(icon.getId()));
        }

        return ResponseEntity.ok(iconResponses);
    }
}
