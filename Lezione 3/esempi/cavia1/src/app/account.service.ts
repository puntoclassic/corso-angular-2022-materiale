import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  userLogged$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() {}

  login() {
    this.userLogged$.next(true);
  }

  logout() {
    this.userLogged$.next(false);
  }
}
