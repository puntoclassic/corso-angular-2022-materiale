import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/account.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  userLogged: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.userLogged$.subscribe((userIsLogged: boolean) => {
      this.userLogged = userIsLogged;
    });
  }

  effettuaLogin() {
    this.accountService.login();
  }

  effettuaLogout() {
    this.accountService.logout();
  }
}
