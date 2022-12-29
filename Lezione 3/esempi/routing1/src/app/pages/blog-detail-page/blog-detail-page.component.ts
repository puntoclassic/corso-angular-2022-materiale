import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";
import { WpDataService } from "src/app/wp-data.service";

@Component({
  selector: "app-blog-detail-page",
  templateUrl: "./blog-detail-page.component.html",
  styleUrls: ["./blog-detail-page.component.scss"],
})
export class BlogDetailPageComponent implements OnInit {
  id?: string;
  article?: { title?: string; content?: string };

  constructor(
    private wpData: WpDataService,
    private activeRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.activeRoute.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.wpData.getSingleArticle(this.id).subscribe((resp: any) => {
        this.article = {
          title: resp.title,
          content: resp.content,
        };
        this.titleService.setTitle(this.article!.title!);
      });
    }
  }
}
