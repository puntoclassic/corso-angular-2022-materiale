import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  @HostBinding("class")
  cssClass: string = "d-flex flex-grow-1 flex-column";

  constructor() {}

  ngOnInit(): void {
  }
}
