import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "routing1";
  counter: number = 1;

  constructor(private http: HttpClient) {
  }

  /*ngOnInit() {
    setInterval(() => {
      this.http.post("http://localhost:3000/posts", {
        "title": "Articolo di prova " + this.counter,
        "content": "Testo articolo di prova " + this.counter,
      }).subscribe();
      this.counter++;
    }, 3000);
  }*/
}
