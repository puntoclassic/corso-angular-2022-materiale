package com.corsoangular.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.corsoangular.backend.models.ApplicationUser;
import com.corsoangular.backend.repositories.UserRepository;

@Service
public class DbUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.repository.findByEmail(username).map(ApplicationUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("Email not found: " + username));
    }

}
