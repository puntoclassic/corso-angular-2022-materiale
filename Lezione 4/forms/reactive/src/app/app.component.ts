import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
  }

  title = "reactive";

  ngOnInit(): void {
    this.httpClient.get("api/init").subscribe();
  }
}
