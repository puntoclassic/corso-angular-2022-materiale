import { Injectable } from "@angular/core";
import { User } from "src/app/auth/user.model";

@Injectable({
  providedIn: UserService,
})
export class UserService {
  constructor() {}

  getUsers(): User[] {
    return [
      {
        cognome: "Rossi",
        nome: "Mario",
        dataFineContratto: new Date("2022-11-17"),
        numeroTelefono: "9090151065",
      },
      {
        cognome: "Verdi",
        nome: "Giuseppe",
        dataFineContratto: new Date("2022-11-17"),
        numeroTelefono: "9090151065",
      },
      {
        cognome: "Brazof",
        nome: "Ajeje",
        dataFineContratto: new Date("2022-11-17"),
        numeroTelefono: "9090151065",
      },
      {
        cognome: "Brazof",
        nome: "Ajeje",
        dataFineContratto: new Date("2022-11-17"),
        numeroTelefono: "9090151065",
      },
      {
        cognome: "Brazof",
        nome: "Ajeje",
        dataFineContratto: new Date("2022-11-17"),
        numeroTelefono: "9090151065",
      },
    ];
  }
}
