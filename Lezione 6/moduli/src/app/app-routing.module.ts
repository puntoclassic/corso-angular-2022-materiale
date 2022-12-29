import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminRequiredActivateGuard } from "src/app/admin-required-activate.guard";
import { AdminRequiredCanChildGuard } from "src/app/admin-required-can-child.guard";
import { AdminRequiredLoadGuard } from "src/app/admin-required-load.guard";
import { HomePageComponent } from "src/app/core/pages/home-page/home-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent },
  {
    path: "amministrazione",
    canActivate: [AdminRequiredLoadGuard],
    loadChildren: () =>
      import("./amministrazione/amministrazione.module").then((m) =>
        m.AmministrazioneModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
