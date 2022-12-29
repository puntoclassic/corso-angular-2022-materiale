import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListPageComponent } from "src/app/product-list-page/product-list-page.component";
import { ProductStatsPageComponent } from "src/app/product-stats-page/product-stats-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: ProductListPageComponent },
  { path: "stats", component: ProductStatsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
