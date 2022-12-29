import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { OsservabileService } from "src/app/osservabile.service";

@Component({
  selector: "app-componente-due",
  templateUrl: "./componente-due.component.html",
  styleUrls: ["./componente-due.component.scss"],
})
export class ComponenteDueComponent implements OnInit {
  sottoscrizione?: Subscription;
  numeri: number[] = [];

  constructor(servizio: OsservabileService) {
    var numeri = this.numeri;
    this.sottoscrizione = servizio.getOsservabile().subscribe({
      next(value) {
        numeri.push(value);
      },
    });
  }

  ngOnInit(): void {
  }
}
