import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { ComponenteDueComponent } from './componente-due/componente-due.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUnoComponent,
    ComponenteDueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
