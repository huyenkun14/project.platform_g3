package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Icon;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.IconRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class IconServiceImp implements IconService {
    @Value("${media.icon_path}")
    private String iconFolder;
    private final IconRepository iconRepository;

    public Icon getIcon(Long id) {
        return iconRepository.findById(id).orElse(null);
    }

    public String getPathIcon(Long id) {

        Icon icon = iconRepository.findById(id).orElse(null);
        String path = "";

        if (icon != null) {
            path = iconFolder + File.separator + icon.getFilename();
        }

        return path;
    }

    public Long saveUploadedIcon(MultipartFile file) throws IOException {

        File dirIcon = new File(iconFolder);
        if (!dirIcon.exists()) {
            boolean created = dirIcon.mkdirs();
            if (!created) {
                throw new CustomException("Error: Failed to create directory.");
            }
        }

        Random rand = new Random();
        int ranNum = rand.nextInt();

        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(dirIcon + "//" + file.getName() + ranNum + getFileExtension(file.getOriginalFilename()));
            Files.write(path, bytes);
            Icon icon = new Icon();
            icon.setFilename(path.getFileName().toString());
            icon.setType(file.getContentType());
            icon = iconRepository.save(icon);
            return icon.getId();
        } else throw new CustomException("Error: File null, can not save!!");
    }

    public void uploadFiles(MultipartFile[] files) {

        Arrays.stream(files).forEach(file -> {
            try {
                saveUploadedIcon(file);
            } catch (IOException e) {
                throw new CustomException(e.getMessage());
            }
        });
    }

    public String getFileExtension(String fileName) {
        return "." + FilenameUtils.getExtension(fileName);
    }

    public List<Icon> getAllIcon() {
        return iconRepository.findAll();
    }

}
