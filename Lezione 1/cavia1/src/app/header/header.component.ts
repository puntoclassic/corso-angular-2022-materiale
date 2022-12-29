import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "cst-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  nomeSito: string;

  constructor() {
    this.nomeSito = environment.title;
  }

  ngOnInit(): void {
  }
}
