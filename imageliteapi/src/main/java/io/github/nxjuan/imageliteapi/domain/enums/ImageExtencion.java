package io.github.nxjuan.imageliteapi.domain.enums;

import lombok.Getter;
import org.springframework.http.MediaType;

import java.util.Arrays;

public enum ImageExtencion {
    PNG(MediaType.IMAGE_PNG),
    GIF(MediaType.IMAGE_GIF),
    JPEG(MediaType.IMAGE_JPEG);

    @Getter
    private MediaType mediaType;

    ImageExtencion(MediaType mediaType){
        this.mediaType = mediaType;
    }

    public static ImageExtencion valueOf(MediaType mediaType){
        return Arrays.stream(values())
            .filter(ie -> ie.mediaType.equals(mediaType))
            .findFirst()
            .orElse(null);
    }

    public static ImageExtencion ofName(String name){
        return Arrays.stream(values())
                .filter(
                        ie -> ie.name().equalsIgnoreCase(name)
                )
                .findFirst()
                .orElse(null);

    }
}
