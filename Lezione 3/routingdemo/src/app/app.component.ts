import { Component } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "routingdemo";

  constructor() {
    var subject = new BehaviorSubject<number>(0); //è obbligatorio un valore di partenza

    subject.subscribe((num: number) => { // qui qualcuno (componente) si iscrive
      console.log(num);
    });

    /*subject.next(4);

    subject.next(5);*/
  }
}
