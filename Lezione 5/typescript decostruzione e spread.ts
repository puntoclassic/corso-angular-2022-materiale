var carrello = {
  totale: 0,
  freeShipping: false,
  items: [
    { row: 1, product_name: "Patine fritte 1kg", price: 3 },
  ],
  saluta: () => {},
};

var nuovoCarrello = {
  ...carrello,
  freeShipping: true,
};

//QUESTO
var totale = carrello.totale;
var freeShipping = carrello.freeShipping;
var items = carrello.items;

// =
var { totale, freeShipping, items, saluta } = carrello;

// runtime
var totale = carrello.totale;
var freeShipping = carrello.freeShipping;
var items = carrello.items;
saluta();
