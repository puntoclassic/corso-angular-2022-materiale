import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cst-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input()
  user: { nome: string; cognome: string; dataFineContratto: Date } = {
    cognome: "",
    nome: "",
    dataFineContratto: new Date(),
  };

  isExpired: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isExpired =
      this.user.dataFineContratto.getTime() < new Date().getTime();
    console.log("-------");
    console.log(this.user.dataFineContratto.getTime());
    console.log(new Date().getTime());
    console.log(this.user.dataFineContratto.getTime() < new Date().getTime());
    console.log("-------");
  }
}
