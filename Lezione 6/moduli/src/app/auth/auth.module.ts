import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
];

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
