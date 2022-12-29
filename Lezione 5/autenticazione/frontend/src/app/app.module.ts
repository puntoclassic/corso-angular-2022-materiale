import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { SigninPageComponent } from "./pages/signin-page/signin-page.component";
import { AccountPageComponent } from "./pages/account-page/account-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ReactiveFormsModule } from "@angular/forms";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CustomInterceptor } from "src/app/custom.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SigninPageComponent,
    AccountPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
