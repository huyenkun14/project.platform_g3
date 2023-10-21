package com.example.moneytrackerbackend.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class IconResponse {
    private Long id;
    private String url;

    public IconResponse(Long id) {
        this.id = id;
        this.url = "/icon?iconId=" + id;
    }
}

