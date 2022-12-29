import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "src/app/core/pages/home-page/home-page.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
  ],
})
export class CoreModule {}
