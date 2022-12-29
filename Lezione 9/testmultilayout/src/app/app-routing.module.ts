import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicPageLayoutComponent } from "src/app/layouts/public-page-layout/public-page-layout.component";
import { ReservedPageLayoutComponent } from "src/app/layouts/reserved-page-layout/reserved-page-layout.component";
import { AmministrazioneHomePageComponent } from "src/app/pages/amministrazione-home-page/amministrazione-home-page.component";
import { AmministrazioneUtentiPageComponent } from "src/app/pages/amministrazione-utenti-page/amministrazione-utenti-page.component";
import { ChiSiamoPageComponent } from "src/app/pages/chi-siamo-page/chi-siamo-page.component";
import { HomePageComponent } from "src/app/pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: PublicPageLayoutComponent,
    children: [
      { path: "", component: HomePageComponent, pathMatch: "full" },
      { path: "chi-siamo", component: ChiSiamoPageComponent },
    ],
  },
  {
    path: "amministrazione",
    component: ReservedPageLayoutComponent,
    children: [
      {
        path: "",
        component: AmministrazioneHomePageComponent,
      },
      {
        path: "gestione-utenti",
        component: AmministrazioneUtentiPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
