import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes, TitleStrategy } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BlogPageComponent } from "./pages/blog-page/blog-page.component";
import { BlogDetailPageComponent } from "./pages/blog-detail-page/blog-detail-page.component";
import { BlogItemComponent } from "./components/blog-item/blog-item.component";
import { NotFoundedPageComponent } from "src/app/pages/not-founded-page/not-founded-page.component";
import { CustomTitleStrategy } from "src/app/CustomTitleStrategy";

var routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent, title: "Home" },
  {
    path: "about",
    component: AboutPageComponent,
    title: "Chi siamo",
  },
  {
    path: "blog",
    children: [
      { path: "", component: BlogPageComponent, title: "Il mio blog" },
      { path: ":id", component: BlogDetailPageComponent },
    ],
  },

  { path: "**", component: NotFoundedPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    MenuComponent,
    BlogPageComponent,
    BlogDetailPageComponent,
    BlogItemComponent,
    NotFoundedPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
