import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { CiboService } from "src/app/cibo.service";
import { Cibo } from "src/app/models/cibo";

@Component({
  selector: "app-cibo-create-page",
  templateUrl: "./cibo-create-page.component.html",
  styleUrls: ["./cibo-create-page.component.css"],
})
export class CiboCreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ciboService: CiboService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      "name": this.fb.control("", {
        validators: [Validators.required],
      }),
      "price": this.fb.control(0, {
        validators: [Validators.min(0.01)],
      }),
    }, {
      updateOn: "submit",
      asyncValidators: [],
      validators: [],
    });
  }

  ngOnInit(): void {
  }

  formSubmit(data: Cibo) {
    if (this.form.valid) {
      //invia al server
      this.ciboService.create(data).subscribe({
        error: () => {
          console.log("Errore nella creazione");
        },
        next: () => {
          console.log("Cibo creato");
          this.router.navigate(["/cibi"]);
        },
      });
    }
  }
}
