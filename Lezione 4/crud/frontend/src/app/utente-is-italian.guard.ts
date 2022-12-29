import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UtenteIsItalianGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var lingua = window.navigator.language;

    if (lingua != "it-IT") {
      return true;
    } else {
      this.router.navigate(["/sitoNonDisponibile"]).then(() => {
        //METTO MESSAGE SERVICE -> MESSAGGI
        // MESSAGE SERVICE
        // SUBJECT OBS
        // messages.next({messaggio:"Questo sito non è disponibile nella tua nazione",cssClass:"error"})
      });

      return false;
    }
  }
}
