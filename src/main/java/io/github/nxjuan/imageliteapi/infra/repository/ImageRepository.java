package io.github.nxjuan.imageliteapi.infra.repository;

import io.github.nxjuan.imageliteapi.domain.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {

}
