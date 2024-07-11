package io.github.nxjuan.imageliteapi.infra.repository;

import io.github.nxjuan.imageliteapi.domain.entities.Image;
import io.github.nxjuan.imageliteapi.domain.enums.ImageExtencion;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static io.github.nxjuan.imageliteapi.infra.repository.specs.GenericSpecs.conjunction;
import static io.github.nxjuan.imageliteapi.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.anyOf;
import static org.springframework.data.jpa.domain.Specification.where;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {
    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtencion extension, String query){
        // SELECT * FROM IMAGE WHERE 1 = 1
        Specification<Image> spec = where(conjunction());

        if(extension != null){
            //AND EXTENSION = 'PNG'
            spec = spec.and(extensionEqual(extension));
        }
        if(StringUtils.hasText(query)){
            // AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY' )
            // RIVER => %RI%
            spec = spec.and(anyOf(nameLike(query), tagsLike(query)));
        }
        return findAll(spec);
    }

}
