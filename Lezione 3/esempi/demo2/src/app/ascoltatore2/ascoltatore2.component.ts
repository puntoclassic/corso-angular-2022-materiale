import { Component, OnInit } from "@angular/core";
import { EmettitoreService } from "src/app/emettitore.service";

@Component({
  selector: "app-ascoltatore2",
  templateUrl: "./ascoltatore2.component.html",
  styleUrls: ["./ascoltatore2.component.scss"],
})
export class Ascoltatore2Component implements OnInit {
  numeri: number[] = [];

  constructor(private emettitore: EmettitoreService) {}

  ngOnInit(): void {
    this.emettitore.sparaNumeri?.subscribe((numero) => {
      this.numeri.push(numero);
    });
  }
}
