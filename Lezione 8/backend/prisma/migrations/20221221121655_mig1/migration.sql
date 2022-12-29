-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "codice" TEXT NOT NULL,
    "prezzo" DECIMAL NOT NULL,
    "disponibile" BOOLEAN NOT NULL DEFAULT false,
    "ean" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descrizione" TEXT NOT NULL
);
