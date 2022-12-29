import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-componente-test",
  templateUrl: "./componente-test.component.html",
  styleUrls: ["./componente-test.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
