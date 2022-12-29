import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ComponenteFiglioComponent } from "src/app/componente-figlio/componente-figlio.component";

@Component({
  selector: "app-componente-padre",
  templateUrl: "./componente-padre.component.html",
  styleUrls: ["./componente-padre.component.scss"],
})
export class ComponentePadreComponent implements OnInit, AfterViewInit {
  inputUtente: string = "";

  @ViewChild(ComponenteFiglioComponent)
  istanzaFiglio?: ComponenteFiglioComponent;

  constructor() {
  }
  ngAfterViewInit(): void {
    this.istanzaFiglio?.setInput("Valore di default");
  }

  ngOnInit(): void {
  }

  inviaAlFiglio() {
    this.istanzaFiglio?.setInput(this.inputUtente);
  }
}
