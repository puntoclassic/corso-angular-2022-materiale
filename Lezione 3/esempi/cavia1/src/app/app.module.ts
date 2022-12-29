import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LoginFormComponent } from './login-form/login-form.component';
import { AccountStatusComponent } from './account-status/account-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AccountStatusComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
