//CLASSI E METODI TIPIZZATI

class Auto {
  marca: string; //tutto ok , ma su angular è necessario dargli un valore o dichiaralo come nullable
  constructor() {
  }

  setMarca(nome: string) {
    this.marca = nome;
  }

  setMarcaAny(nome: any) {
    this.marca = nome;
  }

  setMarcaBoh(nome) {
    this.marca = nome;
  }

  getNumeroRuote(): number {
    return 4;
  }
}

//controllo del tipo in fase di "compilazione"
var auto1 = new Auto();
auto1.setMarca("12"); //buono
auto1.setMarcaAny(12); //cattivo
