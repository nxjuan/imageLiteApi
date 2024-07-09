package io.github.nxjuan.imageliteapi.infra.repository.specs;

import io.github.nxjuan.imageliteapi.domain.entities.Image;
import io.github.nxjuan.imageliteapi.domain.enums.ImageExtencion;
import org.springframework.data.jpa.domain.Specification;

public class ImageSpecs {
    private ImageSpecs(){

    }

    public static Specification<Image> extensionEqual(ImageExtencion extension){
        return (root, q, cb) -> cb.equal(root.get("extension"), extension);
    }

    public static Specification<Image> nameLike(String name){
        return (root, q, cb) -> cb.like( cb.upper(root.get("name")), "%" + name.toUpperCase() + "%");
    }

    public static Specification<Image> tagsLike(String tags){
        return (root, q, cb) -> cb.like( cb.upper(root.get("name")), "%" + tags.toUpperCase() + "%");
    }
}
