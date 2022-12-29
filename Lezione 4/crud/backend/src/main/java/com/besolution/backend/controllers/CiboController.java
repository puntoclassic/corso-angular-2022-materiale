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

import com.besolution.backend.inputModels.CreateCiboInput;
import com.besolution.backend.models.Cibo;
import com.besolution.backend.repositories.CiboRepository;

@RestController
@RequestMapping(path = "api/cibo", produces = "application/json")
public class CiboController {

    @Autowired
    private CiboRepository ciboRepository;

    @GetMapping(value = "")
    public Iterable<Cibo> getAll() {
        return this.ciboRepository.findAll();
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Cibo> getSingle(@PathVariable(name = "id") Integer id) {

        var entity = this.ciboRepository.findById(id);
        return entity.isPresent() ? ResponseEntity.ok(entity.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping(value = "create")
    public ResponseEntity<String> createCibo(@Valid @RequestBody CreateCiboInput input) {

        Cibo c = new Cibo();
        c.setName(input.name);
        c.setPrice(input.price);

        this.ciboRepository.save(c);

        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "update/{id}")
    public ResponseEntity<String> updateCibo(@PathVariable(name = "id") Integer id,
            @Valid @RequestBody CreateCiboInput input) {

        Optional<Cibo> ciboGet = this.ciboRepository.findById(id);

        if (ciboGet.isPresent()) {
            Cibo c = ciboGet.get();
            c.setName(input.name);
            c.setPrice(input.price);

            this.ciboRepository.save(c);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping(value = "delete/{id}")
    public ResponseEntity<String> deleteCibo(@PathVariable(name = "id") Integer id) {

        Optional<Cibo> entity = this.ciboRepository.findById(id);

        if (entity.isPresent()) {
            this.ciboRepository.delete(entity.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
