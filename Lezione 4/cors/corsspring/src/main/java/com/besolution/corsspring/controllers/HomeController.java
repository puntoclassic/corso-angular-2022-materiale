package com.besolution.corsspring.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.besolution.corsspring.models.VerificaNomeCognomeSameInput;

@RestController
@RequestMapping(path = "api", produces = "application/json")
public class HomeController {

    @GetMapping(value = "init")
    public HashMap<String, String> getIndex() {
        var map = new HashMap<String, String>();
        map.put("status", "Ok");
        return map;
    }

    @GetMapping(value = "getCities")
    public String[] getCities() {

        return new String[] {
                "Catania",
                "Milano",
                "Roma"
        };
    }

    @PostMapping(value = "postCities")
    public String[] postCities() {
        return new String[] {
                "Catania",
                "Milano",
                "Roma"
        };
    }

    @PostMapping(value = "verificaNomeCognome")
    public HashMap<String, Boolean> postVerificaNomeCognome(@RequestBody VerificaNomeCognomeSameInput input) {
        var map = new HashMap<String, Boolean>();
        map.put("result", input.getNome().equals(input.getCognome()));
        return map;
    }

}
