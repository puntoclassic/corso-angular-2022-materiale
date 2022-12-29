package com.corsoangular.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.corsoangular.backend.inputModels.InputSignin;
import com.corsoangular.backend.models.User;
import com.corsoangular.backend.repositories.UserRepository;

@Component
public class AccountService {

    @Autowired
    private UserRepository repository;

    public User createUser(InputSignin model, PasswordEncoder passwordEncoder) {
        User user = new User();
        user.setFirstname(model.firstname);
        user.setLastname(model.lastname);
        user.setEmail(model.email);
        user.setPassword(passwordEncoder.encode(model.password));
        user.setRole("customer");

        this.repository.save(user);

        return user;

    }

    public boolean verifyEmailIsBusy(
            String email) {
        return !this.repository.existsByEmail(email);
    }

    public Optional<User> getUserByEmail(String email) {
        return this.repository.findByEmail(email);
    }

}
