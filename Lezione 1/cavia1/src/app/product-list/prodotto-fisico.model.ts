import { Prodotto } from "src/app/product-list/prodotto.interface";

export class ProdottoFisico implements Prodotto {
  codice: string = "";
  ean13: string = "";
  prezzo: number = 0;
  quantità: number = 0;
  peso: number = 0;
}
