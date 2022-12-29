import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AccountService } from "src/app/account.service";

@Injectable({
  providedIn: "root",
})
export class LoginRequiredGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.accountService.user$.pipe(map((value: any) => {
      if (value != null) {
        return true;
      } else {
        return this.router.createUrlTree(["/login"]);
      }
    }));
  }
}
