package com.besolution.backend.inputModels;

import javax.validation.constraints.NotBlank;

public class CreateGiornoInput {

    @NotBlank(message = "Questo campo non può essere vuoto")
    public String name;

}
