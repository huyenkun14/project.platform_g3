package com.example.moneytrackerbackend.services;

import com.example.moneytrackerbackend.dto.request.RegisterRequest;
import com.example.moneytrackerbackend.dto.request.ResetPasswordRequest;
import com.example.moneytrackerbackend.dto.request.UserRequest;
import com.example.moneytrackerbackend.entities.User;
import com.example.moneytrackerbackend.exceptiones.CustomException;
import com.example.moneytrackerbackend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService{

    private final PasswordEncoder encoder;

    private final UserRepository userRepository;

    private final ImageService imageService;

    public User getUser(Long id) {

        return userRepository.findById(id).orElseThrow(() -> new CustomException("Error: no use"));
    }

    public User saveUser(RegisterRequest userRequest) {

        if (userRepository.existsByEmail(userRequest.getEmail())) {
            throw new CustomException("Error: Email is already taken!");
        }

        User user = User.builder().username(userRequest.getUsername())
                .password(encoder.encode(userRequest.getPassword()))
                .email(userRequest.getEmail())
                .phoneNumber(userRequest.getPhoneNumber())
                .build();

        user = userRepository.save(user);
        return user;
    }

    public void updateUser(UserRequest userRequest){

        User user = getUser(userRequest.getUserId());

        if (!user.getEmail().equals(userRequest.getEmail())) {

            if (userRepository.existsByEmail(userRequest.getEmail())) {
                throw new CustomException("Error: Email is already taken!");
            }

            user.setEmail(userRequest.getEmail());
        }

        if (userRequest.getAvatar() != null) {

            Long imgId = imageService.saveUploadedFile(userRequest.getAvatar());

            if (user.getImageId() != null) {
                imageService.deleteImage(user.getImageId());
            }

            user.setImageId(imgId);
        }

        user.setUsername(userRequest.getUsername());
        user.setPhoneNumber(userRequest.getPhoneNumber());

        userRepository.save(user);
    }
    public void updatePassword(ResetPasswordRequest resetPasswordRequest, Long userId){

        User user = getUser(userId);

        if(!encoder.matches(resetPasswordRequest.getPrePassword(), user.getPassword())){
            throw new CustomException("Old password is not collect.");
        }

        user.setPassword(encoder.encode(resetPasswordRequest.getPassword()));
        userRepository.save(user);
    }
    public void deleteUser(Long useId){
        userRepository.deleteById(useId);
    }
}
