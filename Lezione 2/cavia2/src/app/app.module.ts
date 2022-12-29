import { InjectionToken, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { UserListComponent } from "./user-list/user-list.component";
import { environment } from "src/environments/environment";
import { AuthModule } from "src/app/auth/auth.module";

export const EURDOL_APITOKEN = new InjectionToken<string>("EURDOL_APITOKEN");
export const SERVER_URL = new InjectionToken<string>("SERVER_URL");

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
  ],
  providers: [
    {
      provide: EURDOL_APITOKEN,
      useValue: environment.apiToken,
    },
    {
      provide: SERVER_URL,
      useValue: environment.backenUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
