import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/account.service";

@Component({
  selector: "app-account-status",
  templateUrl: "./account-status.component.html",
  styleUrls: ["./account-status.component.scss"],
})
export class AccountStatusComponent implements OnInit {
  userLogged: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.userLogged$.subscribe((userIsLogged: boolean) => {
      this.userLogged = userIsLogged;
    });
  }
}
