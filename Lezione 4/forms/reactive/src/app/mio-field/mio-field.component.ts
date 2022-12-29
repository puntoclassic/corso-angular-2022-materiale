import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: "app-mio-field",
  templateUrl: "./mio-field.component.html",
  styleUrls: ["./mio-field.component.scss"],
})
export class MioFieldComponent implements OnInit {
  @Input("field")
  field?: AbstractControl;

  constructor() {}

  ngOnInit(): void {
  }
}
