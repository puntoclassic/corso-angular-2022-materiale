import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageLayoutComponent } from './layouts/public-page-layout/public-page-layout.component';
import { ReservedPageLayoutComponent } from './layouts/reserved-page-layout/reserved-page-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChiSiamoPageComponent } from './pages/chi-siamo-page/chi-siamo-page.component';
import { AmministrazioneHomePageComponent } from './pages/amministrazione-home-page/amministrazione-home-page.component';
import { AmministrazioneUtentiPageComponent } from './pages/amministrazione-utenti-page/amministrazione-utenti-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageLayoutComponent,
    ReservedPageLayoutComponent,
    HomePageComponent,
    ChiSiamoPageComponent,
    AmministrazioneHomePageComponent,
    AmministrazioneUtentiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
