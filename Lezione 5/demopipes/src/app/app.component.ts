import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "demopipes";

  @HostListener("window:keydown.enter", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    console.log(event);
  }

  @HostListener("window:resize", ["$event"])
  onWindowResize(event: any) {
    console.log(event);
  }
}
