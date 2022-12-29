import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmettitoreService {
  sparaNumeri?: Observable<number>;

  constructor() {
    this.sparaNumeri = new Observable((emitter) => {
      setInterval(() => {
        emitter.next(Math.floor(Math.random() * 100));
      }, 1000);
    });
  }
}
