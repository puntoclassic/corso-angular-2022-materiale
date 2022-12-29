import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ComponentePadreComponent } from "./componente-padre/componente-padre.component";
import { ComponenteFiglioComponent } from "./componente-figlio/componente-figlio.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    ComponenteFiglioComponent,
    GraficoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
