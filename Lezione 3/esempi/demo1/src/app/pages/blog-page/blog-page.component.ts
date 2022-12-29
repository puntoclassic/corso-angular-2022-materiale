import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.scss"],
})
export class BlogPageComponent implements OnInit {
  articles?: any[];

  constructor() {
    this.articles = [
      {
        id: 1,
        title: "Articolo 1",
        contenuto: "Testo articolo 1",
      },
      {
        id: 2,
        title: "Articolo 2",
        contenuto: "Testo articolo 2",
      },
      {
        id: 3,
        title: "Articolo 3",
        contenuto: "Testo articolo 3",
      },
    ];
  }

  ngOnInit(): void {
  }
}
