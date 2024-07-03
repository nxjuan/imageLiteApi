package io.github.nxjuan.imageliteapi.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/v1/images")
@Slf4j
public class ImageController {

    @PostMapping
    public ResponseEntity save(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam("tags") String tags
    ){
        log.info("Imagem Recebida: name: {}, size: {}", file.getName(), file.getSize());
        log.info("Nome definido para a imagem: {}", name);
        log.info("Tags: {}", tags);
        return ResponseEntity.ok().build();
    }
}
