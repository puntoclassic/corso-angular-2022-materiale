import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
import { AccountService } from "src/app/account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "cavia1";

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {
    /*var obs1 = new Observable<number>((emitter) => {
      //AMMINISTRATORE DELLE POSTE

      setInterval(() => {
        emitter.next(2);
      }, 1000);

      //DIPENDENTE DELLE POSTE
    });

    //////////////////
    //VOI
    var iscrizione1 = obs1.subscribe((numero: number) => {
      console.log("Ascoltatore 1:");
      console.log(numero);
    });

    setTimeout(() => {
      iscrizione1.unsubscribe();
    }, 4000);

    obs1.subscribe((numero: number) => {
      console.log("Ascoltatore 2:");
      console.log(numero);
    });*/

    /*var subject1 = new Subject<number>();

    subject1.next(64);
    subject1.next(2);

    //BANCONE

    // ........ porta ..........

    //ASCOLTATORE
    subject1.subscribe((valore: number) => {
      console.log(valore);
    });

    subject1.next(10);*/

    /*var subject1 = new ReplaySubject<
      { userId?: number; userLogged: boolean }
    >();

    subject1.next({
      userId: 2,
      userLogged: true,
    });

    //ASCOLTATORE
    subject1.subscribe((valore: any) => {
      console.log(valore);
    });

    subject1.next({
      userLogged: false,
    });*/
  }
}
