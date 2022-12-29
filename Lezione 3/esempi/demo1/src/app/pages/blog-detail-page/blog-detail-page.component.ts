import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-blog-detail-page",
  templateUrl: "./blog-detail-page.component.html",
  styleUrls: ["./blog-detail-page.component.scss"],
})
export class BlogDetailPageComponent implements OnInit {
  id?: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private title: Title,
    private router: Router,
  ) {
    activeRoute.params.subscribe((params: any) => {
      this.id = params.id;

      if (this.id === "2") {
        router.navigate(["/blog", "1"]);
      }
    });

    activeRoute.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

  ngOnInit(): void {
    //effettua richiesta al server
    this.title.setTitle("Articolo " + this.id);
  }
}
