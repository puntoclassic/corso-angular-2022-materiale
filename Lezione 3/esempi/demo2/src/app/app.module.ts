import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ascoltatore1Component } from './ascoltatore1/ascoltatore1.component';
import { Ascoltatore2Component } from './ascoltatore2/ascoltatore2.component';

@NgModule({
  declarations: [
    AppComponent,
    Ascoltatore1Component,
    Ascoltatore2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
