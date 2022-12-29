import { Component, HostBinding, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "src/app/account.service";
import { UserSigninType } from "src/app/types";

@Component({
  selector: "app-signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrls: ["./signin-page.component.scss"],
})
export class SigninPageComponent implements OnInit {
  @HostBinding("class")
  cssClass: string = "d-flex flex-grow-1 flex-column";

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
  ) {
    this.formGroup = this.formBuilder.group({
      "firstname": this.formBuilder.control("", {
        validators: [Validators.required],
      }),
      "lastname": this.formBuilder.control("", {
        validators: [Validators.required],
      }),
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

  doLogin(data: UserSigninType) {
    if (this.formGroup.valid) {
      this.accountService.signin(data);
    }
  }
}
