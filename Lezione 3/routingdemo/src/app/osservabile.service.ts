import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OsservabileService {
  osservabile = new BehaviorSubject<number>(0);

  constructor() {
  }

  getOsservabile() {
    return this.osservabile;
  }
}
