import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ReplaySubject } from "rxjs";
import { UserSigninType } from "src/app/types";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  user$: ReplaySubject<
    { firstname: string; lastname: string; role: string } | null
  > = new ReplaySubject(1);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get("api/account/status").subscribe({
      next: (value: any) => {
        this.user$.next(value);
      },
      error: () => {
        this.user$.next(null);
      },
    });
  }

  login(email: string, password: string) {
    this.httpClient.post("api/account/login", {
      email: email,
      password: password,
    }).subscribe({
      next: (value: any) => {
        var { user } = value;
        this.user$.next({
          ...user,
        });

        this.router.navigate(["/profilo"]);
      },
    });
  }

  signin(data: UserSigninType) {
    this.httpClient.post("api/account/signin", data).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
