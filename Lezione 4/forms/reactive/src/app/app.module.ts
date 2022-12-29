import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MioFormComponent } from "./mio-form/mio-form.component";
import { CustomInterceptor } from "src/app/custom.interceptor";
import { MioFieldComponent } from './mio-field/mio-field.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    MioFormComponent,
    MioFieldComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({}),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
