package io.github.nxjuan.imageliteapi.application.users;

import io.github.nxjuan.imageliteapi.domain.AccessToken;
import io.github.nxjuan.imageliteapi.domain.entities.User;
import io.github.nxjuan.imageliteapi.domain.exception.DuplicatedTupleException;
import io.github.nxjuan.imageliteapi.domain.service.UserService;
import io.github.nxjuan.imageliteapi.infra.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save(User user) {
        var possibleUser = getByEmail(user.getEmail());
        if(possibleUser != null){
            throw new DuplicatedTupleException("User already exists!");
        }
        return userRepository.save(user);
    }

    @Override
    public AccessToken autenticate(String email, String password) {
        return null;
    }
}
