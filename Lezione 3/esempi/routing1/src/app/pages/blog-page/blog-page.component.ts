import { Component, HostBinding, OnInit } from "@angular/core";
import { take } from "rxjs";
import { WpDataService } from "src/app/wp-data.service";

@Component({
  selector: "app-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.scss"],
})
export class BlogPageComponent implements OnInit {
  @HostBinding("class")
  classes: string = "d-flex flex-grow-1 flex-column";
  articles?: any[];

  constructor(private wpData: WpDataService) {}

  ngOnInit(): void {
    this.wpData.getHomeArticles().pipe(
      take(10),
    ).subscribe((resp: any) => {
      this.articles = resp;
    });
  }
}
