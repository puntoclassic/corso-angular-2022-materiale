import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListPageComponent } from "./product-list-page/product-list-page.component";
import { ProductStatsPageComponent } from "./product-stats-page/product-stats-page.component";
import { ModalFilterComponent } from './modal-filter/modal-filter.component';
import { ComponenteTestComponent } from './componente-test/componente-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    ProductStatsPageComponent,
    ModalFilterComponent,
    ComponenteTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
