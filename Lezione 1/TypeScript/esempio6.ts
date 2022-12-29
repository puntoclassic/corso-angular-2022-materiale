//TIPI E INTERFACCE

type Person = {
  nome: string;
  cognome: string;
};

var person1: Person = {
  cognome: "Rossi",
  nome: "Mario",
};

// OPERATORE & Eredità le proprietà di Person e aggiungi altre
type Dipendente = Person & {
  reparto: string;
};

var dip1: Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  reparto: "IT",
};

type Dirigente = Person & {
  areaCordinata: string;
};

// intersezione: solo gli elementi comuni a dirigente e dipendente
var dir1: Dirigente | Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  areaCordinata: "IT",
  reparto: "Test",
};

// unione: valori da Dipendente e da Dirigente
var dir2: Dirigente & Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  areaCordinata: "IT",
  reparto: "Test",
};

//UTILE ma da usare con cautela
var tipoInline: { marca: string; modello: string } = {
  marca: "Canon",
  modello: "PG-540",
};

//restituzione di un nuovo tipo dalla funzione
// FUNZIONA ma da evitare
function getTipoLine(): { marca: string; modello: string } {
  return {
    marca: "Brother",
    modello: "DCP",
  };
}

function getNominativo(
  dip: Dipendente,
): { nome: string; cognome: string } | null {
  return {
    cognome: dip.cognome,
    nome: dip.nome,
  };
}

/**
 * INTERFACCE
 */
interface PersonInterface {
  nome: string;
  cognome: string;
}

class PersonClass implements PersonInterface {
  nome: string;
  cognome: string;
}
