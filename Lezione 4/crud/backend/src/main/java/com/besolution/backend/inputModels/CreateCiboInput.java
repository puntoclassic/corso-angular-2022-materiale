package com.besolution.backend.inputModels;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreateCiboInput {

    @NotBlank(message = "Questo campo non può essere vuoto")
    public String name;

    @NotNull(message = "Questo campo non può essere vuoto")
    public long price;

}
