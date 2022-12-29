package com.corsoangular.backend.inputModels;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class InputLogin {

    @NotBlank(message = "blankEmail")
    @Email(message = "invalidEmail")
    public String email;

    @NotBlank(message = "blankPassword")
    public String password;
}
