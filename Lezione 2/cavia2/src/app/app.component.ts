import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = "cavia2";

  constructor(@Inject("EURDOL_APITOKEN") private token: string) {
  }

  darkModeOn: boolean = false;

  ngOnInit(): void {
  }
}
