import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-login-form",

  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }
}
