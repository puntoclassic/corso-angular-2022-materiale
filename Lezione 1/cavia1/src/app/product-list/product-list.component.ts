import { Component, OnInit } from "@angular/core";
import { ProdottoFisico } from "src/app/product-list/prodotto-fisico.model";
import { ProdottoVirtuale } from "src/app/product-list/prodotto-virtuale.model";
import { Prodotto } from "src/app/product-list/prodotto.interface";

@Component({
  selector: "cst-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  lista: Prodotto[] = [];

  constructor() {
    var prodotto1: ProdottoFisico = new ProdottoFisico();
    prodotto1.codice = "ASAASA";
    prodotto1.ean13 = "12312121";
    prodotto1.peso = 0;
    prodotto1.prezzo = 4.2;
    prodotto1.quantità = 2;

    var prodotto2: ProdottoVirtuale = new ProdottoVirtuale();
    prodotto2.codice = "ASAASA";
    prodotto2.ean13 = "12312121";
    prodotto2.link = "www.google.it";
    prodotto2.prezzo = 4.2;
    prodotto2.quantità = 2;

    this.lista.push(prodotto1);
    this.lista.push(prodotto2);
  }

  ngOnInit(): void {
  }

  isProdottoFisico(item: Prodotto) {
    return item instanceof ProdottoFisico;
  }

  isProdottoVirtuale(item: Prodotto) {
    return item instanceof ProdottoVirtuale;
  }
}
