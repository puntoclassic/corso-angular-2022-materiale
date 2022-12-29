import { HttpClient, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { CreateProductResponse, Product } from "src/app/product.model";
import { Setting } from "src/app/setting.model";

@Injectable({
  providedIn: "root",
})
export class SettingServiceService {
  constructor(
    private httpClient: HttpClient,
  ) {
    var prodotto: Product = {
      ean: "234234234232",
      prezzo: 4,
      sku: "AS222",
    };
  }

  fetchSettings() {
    return this.httpClient.get<Setting>(
      "/settings",
    );
  }
}
