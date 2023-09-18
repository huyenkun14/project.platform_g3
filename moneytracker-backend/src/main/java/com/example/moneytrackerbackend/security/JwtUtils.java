package com.example.moneytrackerbackend.security;

import com.example.moneytrackerbackend.exceptiones.CustomException;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {
    @Value("${app.jwt_secret}")
    private String JWT_SECRET;
    @Value("${app.jwt_expiration}")
    private long JWT_EXPIRATION;

    // Tạo ra jwt từ thông tin user
    public String generateToken(UserDetailsImpl userDetails) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION);
        return Jwts.builder()
                .setSubject(Long.toString(userDetails.getUser().getId()))
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }

    public Long getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(authToken);
            return true;
        } catch (MalformedJwtException ex) {
            new CustomException("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            new CustomException("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            new CustomException("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            new CustomException("JWT claims string is empty.");
        }
        return false;
    }
}
