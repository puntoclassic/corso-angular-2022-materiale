import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-item",
  templateUrl: "./blog-item.component.html",
  styleUrls: ["./blog-item.component.scss"],
})
export class BlogItemComponent implements OnInit {
  @Input()
  articolo?: { id: number; title: string; contenuto: string };

  constructor() {}

  ngOnInit(): void {
  }
}
