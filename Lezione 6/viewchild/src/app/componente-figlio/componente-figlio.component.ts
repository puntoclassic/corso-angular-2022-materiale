import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-componente-figlio",
  templateUrl: "./componente-figlio.component.html",
  styleUrls: ["./componente-figlio.component.scss"],
})
export class ComponenteFiglioComponent implements OnInit {
  inputUtente: string = "";
  constructor() {}

  ngOnInit(): void {
  }

  setInput(valore: string) {
    this.inputUtente = valore;
  }
}
