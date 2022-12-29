import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject, retry } from "rxjs";
import { SettingServiceService } from "src/app/setting-service.service";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  settingsLoaded$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private settingService: SettingServiceService) {
  }

  fetchSettings() {
    this.settingService.fetchSettings().pipe(
      retry(3),
    ).subscribe({
      error: () => {
        //
      },
      next: (response) => {
        //
      },
    });

    this.settingService.fetchSettings().subscribe((response) => {
    });
  }
}
