import { Component } from "@angular/core";

@Component({
  selector: "cst-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cavia1";

  today = new Date();

  constructor() {
    this.today.setHours(23, 0, 0, 0);
  }

  users: { nome: string; cognome: string; dataFineContratto: Date }[] = [
    {
      cognome: "Rossi",
      nome: "Mario",
      dataFineContratto: new Date("2022-11-17"),
    },
    {
      cognome: "Verdi",
      nome: "Giuseppe",
      dataFineContratto: this.today,
    },
  ];
}
