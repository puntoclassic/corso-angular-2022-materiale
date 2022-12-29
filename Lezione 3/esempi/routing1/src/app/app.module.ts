import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes, TitleStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { HomePageComponent } from "src/app/pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BlogDetailPageComponent } from "./pages/blog-detail-page/blog-detail-page.component";
import { TemplatePageTitleStrategy } from "src/app/TemplatePageTitleStrategy";

var routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent, title: "Home" },
  { path: "about", component: AboutPageComponent, title: "About" },
  {
    path: "blog",

    children: [
      { path: "", component: BlogPageComponent, title: "Articoli" },
      { path: ":id", component: BlogDetailPageComponent },
    ],
  },
  { path: "contact", component: ContactPageComponent, title: "Contatti" },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    MenuComponent,
    BlogDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
