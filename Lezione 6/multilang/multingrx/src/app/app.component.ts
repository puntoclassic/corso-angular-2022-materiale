import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "multingrx";

  response = {
    errCode: "ErrorCreateProduct",
    message: "ERROR_UNABLE_CREATEPRODUCT",
  };

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang("en-EN");

    setTimeout(() => {
      this.changeLanguage(window.navigator.language);
    }, 1000);
  }

  changeLanguage(value: string) {
    this.translate.setDefaultLang(value);
  }
}
