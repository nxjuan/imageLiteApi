package io.github.nxjuan.imageliteapi.domain.entities;

import io.github.nxjuan.imageliteapi.domain.enums.ImageExtencion;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table
@EntityListeners(AuditingEntityListener.class )
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String name;

    @Column
    private Long size;

    @Column
    @Enumerated(EnumType.STRING)
    private ImageExtencion extension;

    @CreatedDate
    private LocalDateTime uploadDate;

    @Column
    private String tags;

    @Lob
    private byte[] file;


}
