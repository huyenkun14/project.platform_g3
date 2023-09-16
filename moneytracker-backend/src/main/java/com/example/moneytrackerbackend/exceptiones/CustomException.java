package com.example.moneytrackerbackend.exceptiones;

public class CustomException extends RuntimeException{
    public CustomException(String message){
        super(message);
    }
}
