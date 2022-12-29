import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { map, Observable } from "rxjs";
import { AccountService } from "src/app/account.service";

@Injectable({
  providedIn: "root",
})
export class AnonymousRequiredGuard implements CanActivate {
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
      if (value == null) {
        return true;
      } else {
        return this.router.createUrlTree(["/profilo"]);
      }
    }));
  }
}
