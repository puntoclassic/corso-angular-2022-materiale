import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "corstest";
  cities: string[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get("api/init").subscribe(
      (response: any) => {
        console.log(response);
        this.httpClient.post("api/postCities", {})
          .subscribe(
            (response: any) => {
              this.cities = response;
            },
          );
      },
    );
  }
}
