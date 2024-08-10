package io.github.nxjuan.imageliteapi.infra.repository;

import io.github.nxjuan.imageliteapi.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    User findByEmail(String email);
}
