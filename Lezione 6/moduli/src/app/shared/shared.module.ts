import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HeaderComponent,
    RouterModule,
  ],
})
export class SharedModule {}
