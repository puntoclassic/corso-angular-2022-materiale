import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoadingPageComponent } from "./loading-page/loading-page.component";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    { provide: "BACKEND_URL", useValue: environment.url },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
