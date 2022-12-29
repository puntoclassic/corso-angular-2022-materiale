import { Component, HostBinding, OnInit } from "@angular/core";
import { take } from "rxjs";
import { WpDataService } from "src/app/wp-data.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  @HostBinding("class")
  classes: string = "d-flex flex-grow-1 flex-column";
  articles?: any[];

  constructor(private wpData: WpDataService) {}

  ngOnInit(): void {
    this.wpData.getHomeArticles().pipe(
      take(5),
    ).subscribe((resp: any) => {
      this.articles = resp;
    });
  }
}
