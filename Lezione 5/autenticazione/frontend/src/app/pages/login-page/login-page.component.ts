import { Component, HostBinding, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "src/app/account.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  @HostBinding("class")
  cssClass: string = "d-flex flex-grow-1 flex-column";

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
  ) {
    this.formGroup = this.formBuilder.group({
      "email": this.formBuilder.control("", {
        validators: [Validators.email, Validators.required],
      }),
      "password": this.formBuilder.control("", {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit(): void {
  }

  doLogin(data: any) {
    if (this.formGroup.valid) {
      this.accountService.login(data.email, data.password);
    }
  }
}
