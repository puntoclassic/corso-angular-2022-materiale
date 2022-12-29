package com.besolution.backend.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.besolution.backend.inputModels.AddCiboToGiornoInput;
import com.besolution.backend.inputModels.CreateGiornoInput;
import com.besolution.backend.models.Cibo;
import com.besolution.backend.models.Giorno;
import com.besolution.backend.repositories.CiboRepository;
import com.besolution.backend.repositories.GiornoRepository;

@RestController
@RequestMapping(path = "api/giorno", produces = "application/json")
public class GiornoController {

    @Autowired
    private GiornoRepository giornoRepository;

    @Autowired
    private CiboRepository ciboRepository;

    @GetMapping(value = "")
    public Iterable<Giorno> getAll() {
        return this.giornoRepository.findAll();
    }

    @PostMapping(value = "create")
    public ResponseEntity<String> createGiorno(@Valid @RequestBody CreateGiornoInput input) {

        Giorno g = new Giorno();
        g.setName(input.name);

        this.giornoRepository.save(g);

        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "{id}/cibi")
    public ResponseEntity<Iterable<Cibo>> getCibiByDay(@PathVariable(name = "id") Integer id) {
        Optional<Giorno> giornoGet = this.giornoRepository.findById(id);

        if (giornoGet.isPresent()) {
            Giorno g = giornoGet.get();

            return ResponseEntity.ok(g.getCibi());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value = "{id}/cibi")
    public ResponseEntity<String> addCiboToGiorno(@PathVariable(name = "id") Integer id,
            @Valid @RequestBody AddCiboToGiornoInput input) {
        Optional<Giorno> giornoGet = this.giornoRepository.findById(id);

        if (giornoGet.isPresent()) {
            Giorno g = giornoGet.get();

            g.getCibi().add(this.ciboRepository.findById(input.id).get());

            this.giornoRepository.save(g);

            return ResponseEntity.ok().build();

        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping(value = "update/{id}")
    public ResponseEntity<String> updateGiorno(@PathVariable(name = "id") Integer id,
            @Valid @RequestBody CreateGiornoInput input) {

        Optional<Giorno> giornoGet = this.giornoRepository.findById(id);

        if (giornoGet.isPresent()) {
            Giorno g = giornoGet.get();
            g.setName(input.name);
            this.giornoRepository.save(g);

            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value = "delete/{id}")
    public ResponseEntity<String> deleteGiorno(@PathVariable(name = "id") Integer id) {

        Optional<Giorno> giornoGet = this.giornoRepository.findById(id);

        if (giornoGet.isPresent()) {
            this.giornoRepository.delete(giornoGet.get());

            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
