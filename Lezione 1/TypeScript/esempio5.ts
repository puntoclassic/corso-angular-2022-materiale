//NULLABLE

type Utente = {
  nome: string;
  cognome: string;
  reparto?: string;
};

var utente: Utente = {
  cognome: "Rossi",
  nome: "Mario",
};

var utente1: Utente = {
  cognome: "Verdi",
  nome: "Giuseppe",
  reparto: "Operations",
};

if (utente.reparto) {
  console.log(utente.reparto.toLocaleLowerCase());
} else {
  console.log("Nessun reparto assegnato");
}

/**
 * oggetto?.funzione
 * se oggetto è null non chiamare funzione
 */
var reparto = utente.reparto?.toLocaleUpperCase() ?? "Nessun reparto assegnato";

console.log(reparto);
