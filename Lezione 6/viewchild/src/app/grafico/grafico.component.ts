import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.scss"],
})
export class GraficoComponent implements OnInit, AfterViewInit {
  @ViewChild("miocanvas")
  canvas?: ElementRef;

  chart?: Chart;

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.canvas?.nativeElement);
  }

  ngOnInit(): void {
  }
}
