package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.entities.Image;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Random;



@Service
@RequiredArgsConstructor
public class ImageServiceImp implements ImageService {
    @Value("${media.img_path}")
    private String imgFolder;
    private static final long MAX_FILE_SIZE = 10 * 1024 * 1024;
    private static final List<String> ACCEPTED_CONTENT_TYPES = Arrays.asList(
            "image/jpeg", "image/png", "image/gif"
    );
    private final ImageRepository imageRepository;

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

    public Long saveUploadedFile(MultipartFile file) {

        if (file.isEmpty()) {
            throw new CustomException("Error: File is empty, cannot save!!");
        }

        String contentType = file.getContentType();
        if (!ACCEPTED_CONTENT_TYPES.contains(contentType)) {
            throw new CustomException("Error: Invalid file type, cannot save!!");
        }

        if (file.getSize() > MAX_FILE_SIZE) {
            throw new CustomException("Error: File size exceeds the allowed limit, cannot save!!");
        }

        try {
            File dir = new File(imgFolder);
            if (!dir.exists()) {
                boolean created = dir.mkdirs();
                if (!created) {
                    throw new CustomException("Error: Failed to create directory.");
                }
            }

            Random rand = new Random();
            int ranNum = rand.nextInt();
            String fileName = file.getName() + ranNum + getFileExtension(file.getOriginalFilename());
            Path filePath = Paths.get(dir.getAbsolutePath(), fileName);

            try (OutputStream outputStream = new FileOutputStream(filePath.toFile())) {
                outputStream.write(file.getBytes());
            }

            Image image = new Image();
            image.setFilename(fileName);
            image.setType(contentType);
            image = imageRepository.save(image);
            return image.getId();
        } catch (IOException e) {
            throw new CustomException("Error: Failed to save file.");
        }
    }

    public void deleteImage(Long id) {

        Image image = imageRepository.findById(id)
                .orElseThrow(()-> new CustomException("Error: no image"));
        try {
            Path filePath = Paths.get(imgFolder, image.getFilename());
            File file = filePath.toFile();
            if (file.exists()) {
                boolean deleted = file.delete();
                if (!deleted) {
                    throw new CustomException("Error: Failed to delete file from storage.");
                }
            } else {
                throw new CustomException("Error: File not found in storage.");
            }
        } catch (Exception e) {
            throw new CustomException("Error: Failed to delete file from storage.");
        }
        imageRepository.deleteById(id);

    }

    public String getFileExtension(String fileName) {
        return "." + FilenameUtils.getExtension(fileName);
    }
}
