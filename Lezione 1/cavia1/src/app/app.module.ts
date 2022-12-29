import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NomeUtenteComponent } from "./nome-utente/nome-utente.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProdottoFisicoComponent } from './prodotto-fisico/prodotto-fisico.component';
import { ProdottoVirtualeComponent } from './prodotto-virtuale/prodotto-virtuale.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NomeUtenteComponent,
    ProductListComponent,
    ProdottoFisicoComponent,
    ProdottoVirtualeComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
