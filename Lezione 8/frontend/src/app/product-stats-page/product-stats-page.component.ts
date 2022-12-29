import { HttpClient } from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Chart } from "chart.js";
import { registerables } from "chart.js";
Chart.register(...registerables); // IMPORTANTE

@Component({
  selector: "app-product-stats-page",
  templateUrl: "./product-stats-page.component.html",
  styleUrls: ["./product-stats-page.component.scss"],
})
export class ProductStatsPageComponent implements OnInit, AfterViewInit {
  @ViewChild("grafico")
  grafico?: ElementRef;

  chart?: Chart;

  constructor(private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    if (this.grafico) {
      this.getData();
    }
  }

  ngOnInit(): void {
  }

  aggiornaDati() {
    setInterval(() => {
      this.httpClient.get("http://localhost:4000/product/marcaStats").subscribe(
        (response: any) => {
          if (this.grafico) {
            this.chart!.data = {
              labels: response.map((row: any) => row.marca),
              datasets: [
                {
                  label: "Prodotti per marca",
                  data: response.map((row: any) => row._count),
                },
              ],
            };
            this.chart?.update();
          }
        },
      );
    }, 2000);
  }

  getData() {
    this.httpClient.get("http://localhost:4000/product/marcaStats").subscribe(
      (response: any) => {
        if (this.grafico) {
          this.chart = new Chart(this.grafico.nativeElement, {
            type: "doughnut",
            options: {
              responsive: true,
            },
            data: {
              labels: response.map((row: any) => row.marca),
              datasets: [
                {
                  label: "Prodotti per marca",
                  data: response.map((row: any) => row._count),
                },
              ],
            },
          });
          //  this.aggiornaDati();
        }
      },
    );
  }
}
