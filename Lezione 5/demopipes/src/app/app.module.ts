import { HostListener, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MioComponent } from "./mio/mio.component";
import { CamelCasePipe } from "./camel-case.pipe";
import { AddSuffixPipe } from "./add-suffix.pipe";
import { AddIvaPipe } from "./add-iva.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MioComponent,
    CamelCasePipe,
    AddSuffixPipe,
    AddIvaPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
  }
}
