package io.github.nxjuan.imageliteapi.domain.service;

import io.github.nxjuan.imageliteapi.domain.AccessToken;
import io.github.nxjuan.imageliteapi.domain.entities.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);

    AccessToken autenticate(String email, String password);
}
