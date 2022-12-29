import { TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";

import { ProductService } from "./product.service";

describe("ProductService", () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(ProductService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("create product success", () => {
    spyOn(service, "createProduct").and.callFake((id) => {
      return id >= 1 ? of(true) : of(false);
    });

    service.createProduct(1).subscribe((risposta) => {
      console.log(risposta);
      expect(risposta).toBe(true);
    });
  });

  it("create product fail", () => {
    spyOn(service, "createProduct").and.callFake((id) => {
      return id >= 1 ? of(true) : of(false);
    });

    service.createProduct(0).subscribe((risposta) => {
      expect(risposta).toBe(false);
    });
  });
});
