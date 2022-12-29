import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CustomInterceptor } from "src/app/custom.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({}),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
