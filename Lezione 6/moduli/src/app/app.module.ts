import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthModule } from "src/app/auth/auth.module";
import { LoginFormComponent } from "src/app/auth/login-form/login-form.component";
import { CookieBannerComponent } from "src/app/cookie-banner/cookie-banner.component";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./core/pages/home-page/home-page.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    CookieBannerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
