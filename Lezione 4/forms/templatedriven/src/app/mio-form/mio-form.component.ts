import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mio-form",
  templateUrl: "./mio-form.component.html",
  styleUrls: ["./mio-form.component.scss"],
})
export class MioFormComponent implements OnInit {
  nomeField: string = "";
  cognomeField: string = "";

  constructor() {}

  ngOnInit(): void {
  }

  formSubmit() {
  }
}
