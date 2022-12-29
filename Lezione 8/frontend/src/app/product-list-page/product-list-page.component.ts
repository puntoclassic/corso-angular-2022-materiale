import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Modal, Popover } from "bootstrap";

@Component({
  selector: "app-product-list-page",
  templateUrl: "./product-list-page.component.html",
  styleUrls: ["./product-list-page.component.scss"],
})
export class ProductListPageComponent implements OnInit, AfterViewInit {
  page: number = 1;
  perPage: number = 500;
  orderBy: string = "id";
  ascend: boolean = true;
  items: any[] = [];
  count: number = 0;
  numberOfPages: number[] = [];
  marche: any[] = [];
  marcheSelezionate: any[] = [];
  filtri: any[] = [];
  disponibileSiNo: boolean = true;
  prezzoMin: number = 0;
  prezzoMax: number = 1000;

  constructor(private httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    document.querySelectorAll(
      '[data-bs-toggle="modal"]',
    ).forEach((element: any) => {
      new Modal(element);
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.loadMarche();
  }

  applicaFiltroMarche(event: any[]) {
    this.marcheSelezionate = event;
    this.applicaFiltro("marca");
  }

  applicaFiltro(value: string) {
    this.filtri = this.filtri.filter((f) => f.type != value);
    switch (value) {
      case "marca": {
        this.filtri.push({
          type: "marca",
          values: this.marcheSelezionate,
        });
        break;
      }
      case "disponibile": {
        this.filtri.push({
          type: "disponibile",
          value: this.disponibileSiNo,
        });
        break;
      }
      case "prezzo": {
        this.filtri.push({
          type: "prezzo",
          min: this.prezzoMin,
          max: this.prezzoMax,
        });
        break;
      }
    }
    this.loadData();
  }

  eliminaFiltro(value: string) {
    this.filtri = this.filtri.filter((f) => f.type != value);
    this.loadData();
  }

  getHeaderStyle(field: string) {
    return { "font-weight": this.orderBy === field ? "bold" : "normal" };
  }

  loadMarche() {
    this.httpClient.get<any[]>("http://localhost:4000/product/marcaFilter")
      .subscribe(
        (response: any[]) => {
          this.marche = response;
        },
      );
  }

  isFilterActive(key: string) {
    return this.filtri.filter((f) => f.type === key).length > 0;
  }

  loadData() {
    var parametri: {
      orderBy?: string;
      filters: any[];
      ascend?: boolean;
      page: number;
      perPage?: number;
    } = {
      orderBy: this.orderBy,
      ascend: this.ascend,
      page: this.page,
      perPage: this.perPage,
      filters: this.filtri,
    };

    this.httpClient.post("http://localhost:4000/product", parametri).subscribe(
      (response: any) => {
        this.items = response.items;
        this.count = response.count;
        var pages = Math.ceil(this.count / this.perPage);

        this.numberOfPages = Array(pages > 0 ? pages : 1).fill(null)
          .map((el, index) => index + 1);
      },
    );
  }

  switchOrderBy(key: string) {
    if (key == this.orderBy) {
      this.ascend = !this.ascend;
    } else {
      this.orderBy = key;
      this.ascend = true;
    }
    this.loadData();
  }

  pageChange(value: number) {
    this.page = value;
    this.loadData();
  }
}
