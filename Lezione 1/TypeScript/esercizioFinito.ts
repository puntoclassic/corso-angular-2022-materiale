interface Prodotto {
  codice: string;
  ean13: string;
  prezzo: number;
  quantità: number;
}

class ProdottoFisico implements Prodotto {
  codice: string;
  ean13: string;
  prezzo: number;
  quantità: number;
  peso: number;
}

class ProdottoVirtuale implements Prodotto {
  codice: string;
  ean13: string;
  prezzo: number;
  quantità: number;
  link: string;
}

type Categoria = {
  nome: string;
  attiva: boolean;
};

type Menu = {
  categorie: Categoria[];
  prodottiScontati: Prodotto[];
};

var prodotto1: ProdottoFisico = new ProdottoFisico();
prodotto1.codice = "ASAASA";
prodotto1.ean13 = "12312121";
prodotto1.peso = 200;
prodotto1.prezzo = 4.2;
prodotto1.quantità = 2;

var prodotto2: ProdottoVirtuale = new ProdottoVirtuale();
prodotto2.codice = "ASAASA";
prodotto2.ean13 = "12312121";
prodotto2.link = "www.google.it";
prodotto2.prezzo = 4.2;
prodotto2.quantità = 2;

var menu: Menu = {
  categorie: [],
  prodottiScontati: [
    prodotto1,
    prodotto2,
  ],
};

menu.prodottiScontati.forEach((item: Prodotto) => {
  if (item instanceof ProdottoFisico) {
    console.log("Prodotto fisico");
    console.log(item.peso);
  }

  if (item instanceof ProdottoVirtuale) {
    console.log("Prodotto virtuale");
    console.log(item.link);
  }
});
