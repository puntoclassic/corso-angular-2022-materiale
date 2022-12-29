import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-cookie-banner",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./cookie-banner.component.html",
  styleUrls: ["./cookie-banner.component.scss"],
})
export class CookieBannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
