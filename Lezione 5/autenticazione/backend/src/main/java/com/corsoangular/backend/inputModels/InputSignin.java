package com.corsoangular.backend.inputModels;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.stereotype.Component;

@Component
public class InputSignin {

    @NotBlank(message = "blankEmail")
    @Email(message = "invalidEmail")
    public String email;

    @NotBlank(message = "blankFirstName")
    public String firstname;

    @NotBlank(message = "blankFirstName")
    public String lastname;

    @NotBlank(message = "blankPassword")
    public String password;
}
