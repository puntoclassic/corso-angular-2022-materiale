import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cst-nome-utente",
  templateUrl: "./nome-utente.component.html",
  styleUrls: ["./nome-utente.component.scss"],
})
export class NomeUtenteComponent implements OnInit {
  nome: string;

  constructor() {
    this.nome = "";
  }

  nomeToUpper() {
    this.nome = this.nome.toUpperCase();
  }

  ngOnInit(): void {
  }
}
