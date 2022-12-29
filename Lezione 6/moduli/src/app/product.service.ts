import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  createProduct(id: number) {
    return new Observable((emitter) => { // backend.csteam.com/cliente1
      /*
       * OK:
       * status: "Ok",
       * message: "ProductCreated"
       *
       * 500:
       * status: "Failed",
       * message: "ProductCreationFail"
       */
      if (id > 0) {
        emitter.next(true);
      } else {
        emitter.next(false);
      }
    });
  }
}
