package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Image;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.ImageRepository;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;

@Service
public class ImageServiceImp implements ImageService {
    @Value("${media.img_path}")
    private String imgFolder;
    @Autowired
    private ImageRepository imageRepository;

    public Image getImage(Long id) {
        return imageRepository.findById(id).orElse(null);
    }

    public String getPathImage(Long id) {
        Image media = imageRepository.findById(id).orElse(null);
        String path = "";
        if (media != null) {
            path = imgFolder + File.separator + media.getFilename();
        }
        return path;
    }

    public Long saveUploadedFiles(MultipartFile file) throws IOException {
        File dir = new File(imgFolder);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        Random rand = new Random();
        int ranNum = rand.nextInt();
        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(dir + "//" + file.getName() + ranNum + getFileExtension(file.getOriginalFilename()));
            Files.write(path, bytes);
            Image image = new Image();
            image.setFilename(path.getFileName().toString());
            image.setType(file.getContentType());
            image = imageRepository.save(image);
            return image.getId();
        } else throw new CustomException("Error: File null, can not save!!");
    }

    public String getFileExtension(String fileName) {
        return "." + FilenameUtils.getExtension(fileName);
    }
}
