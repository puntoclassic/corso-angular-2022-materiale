import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnonymousRequiredGuard } from "src/app/guards/anonymous-required.guard";
import { LoginRequiredGuard } from "src/app/guards/login-required.guard";
import { AccountPageComponent } from "src/app/pages/account-page/account-page.component";
import { HomePageComponent } from "src/app/pages/home-page/home-page.component";
import { LoginPageComponent } from "src/app/pages/login-page/login-page.component";
import { SigninPageComponent } from "src/app/pages/signin-page/signin-page.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: AccountPageComponent,
    canActivate: [LoginRequiredGuard],
  },
  {
    path: "login",
    component: LoginPageComponent,
    canActivate: [AnonymousRequiredGuard],
  },
  {
    path: "signin",
    component: SigninPageComponent,
    canActivate: [AnonymousRequiredGuard],
  },
  {
    path: "profilo",
    component: AccountPageComponent,
    canActivate: [LoginRequiredGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
