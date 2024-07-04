package io.github.nxjuan.imageliteapi.domain.service;

import io.github.nxjuan.imageliteapi.domain.entities.Image;

import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);
}
