package io.github.nxjuan.imageliteapi.application.users;

import io.github.nxjuan.imageliteapi.domain.entities.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public User mapToUser(UserDTO dto){
        return User.builder()
                .email(dto.getEmail())
                .password(dto.getPassword())
                .name(dto.getName())
                .build();
    }
}
