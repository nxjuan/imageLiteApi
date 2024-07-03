package io.github.nxjuan.imageliteapi;

import io.github.nxjuan.imageliteapi.domain.entities.Image;
import io.github.nxjuan.imageliteapi.domain.enums.ImageExtencion;
import io.github.nxjuan.imageliteapi.infra.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class  ImageliteapiApplication {

	@Bean
	public CommandLineRunner commandLineRunner(@Autowired ImageRepository repository){
		return args -> {
			Image image = Image
					.builder()
					.extension(ImageExtencion.PNG)
					.name("myimage")
					.tags("teste")
					.size(1000L)
					.build();

			repository.save(image);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(ImageliteapiApplication.class, args);
	}

}
