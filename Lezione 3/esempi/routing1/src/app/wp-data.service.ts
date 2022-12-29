import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WpDataService {
  constructor(private httpClient: HttpClient) {}

  getHomeArticles() {
    return this.httpClient.get("http://localhost:3000/posts");
  }

  getSingleArticle(id: string) {
    return this.httpClient.get(
      "http://localhost:3000/posts/" + id,
    );
  }
}
