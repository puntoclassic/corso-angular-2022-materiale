import { Component, OnInit } from "@angular/core";
import { AppStateService } from "src/app/app-state.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "cavia2";

  settingsLoaded: boolean = false;

  constructor(private appStateService: AppStateService) {
  }
  ngOnInit(): void {
    this.appStateService.settingsLoaded$.subscribe((loaded) => {
      this.settingsLoaded = loaded;
    });
    this.appStateService.fetchSettings();
  }
}
