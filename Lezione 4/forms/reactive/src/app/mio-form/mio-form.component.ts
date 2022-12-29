import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import NomeCognomeNotSameAsync from "src/app/mio-form/nomeCognomeNotSameAsync";
import { passwordConfirmMatch } from "src/app/mio-form/passwordConfirmMatch";
import { notEspressioniOffensive } from "src/app/mio-form/verificaEspressioniOffensive";

@Component({
  selector: "app-mio-form",
  templateUrl: "./mio-form.component.html",
  styleUrls: ["./mio-form.component.scss"],
})
export class MioFormComponent implements OnInit {
  form: FormGroup;
  nomeField: FormControl;
  cognomeField: FormControl;
  passwordField: FormControl;
  confermaPasswordField: FormControl;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    var validazione = [
      Validators.required,
      notEspressioniOffensive(["Cretino", "Scemo"]),
    ];
    this.nomeField = this.fb.control("", {
      validators: validazione,
    });
    this.cognomeField = this.fb.control("", {
      validators: validazione,
    });
    this.passwordField = this.fb.control("", {
      validators: validazione,
    });
    this.confermaPasswordField = this.fb.control("", {
      validators: validazione,
    });

    this.form = this.fb.group({
      "nome": this.nomeField,
      "cognome": this.cognomeField,
      "password": this.nomeField,
      "confermaPassword": this.cognomeField,
    }, {
      validators: [
        passwordConfirmMatch("password", "confermaPassword"),
      ],
      asyncValidators: [
        NomeCognomeNotSameAsync.createValidator(httpClient),
      ],
    });
  }

  ngOnInit(): void {
  }

  formSubmit(f: { nome: string; cognome: string }) {
    console.log(f);
  }
}
