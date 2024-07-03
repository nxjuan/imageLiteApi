package io.github.nxjuan.imageliteapi.application.images;

import io.github.nxjuan.imageliteapi.domain.entities.Image;
import io.github.nxjuan.imageliteapi.domain.enums.ImageExtencion;
import io.github.nxjuan.imageliteapi.domain.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/v1/images")
@Slf4j
@RequiredArgsConstructor
public class ImageController {

    private final ImageService service;
    @PostMapping
    public ResponseEntity save(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam("tags") String tags
    ) throws IOException {
        log.info("Imagem Recebida: name: {}, size: {}", file.getName(), file.getSize());

        Image image = Image.builder()
                .name(name)
                .tags(String.join(",", tags ))
                .size(file.getSize())
                .extension(ImageExtencion.valueOf(MediaType.valueOf(file.getContentType())))
                .file(file.getBytes())
                .build();

        service.save(image);

        return ResponseEntity.ok().build();
    }
}
