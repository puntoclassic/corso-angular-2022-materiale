import { Component, OnInit } from "@angular/core";
import { EmettitoreService } from "src/app/emettitore.service";

@Component({
  selector: "app-ascoltatore1",
  templateUrl: "./ascoltatore1.component.html",
  styleUrls: ["./ascoltatore1.component.scss"],
})
export class Ascoltatore1Component implements OnInit {
  numeri: number[] = [];

  constructor(private emettitore: EmettitoreService) {}

  ngOnInit(): void {
    this.emettitore.sparaNumeri?.subscribe((numero) => {
      this.numeri.push(numero);
    });
  }
}
