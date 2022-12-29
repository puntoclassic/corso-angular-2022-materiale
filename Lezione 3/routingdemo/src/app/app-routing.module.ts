import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponenteDueComponent } from "src/app/componente-due/componente-due.component";
import { ComponenteUnoComponent } from "src/app/componente-uno/componente-uno.component";

const routes: Routes = [
  { path: "componente1", component: ComponenteUnoComponent },
  { path: "componente2", component: ComponenteDueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
