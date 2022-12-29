import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStatsPageComponent } from './product-stats-page.component';

describe('ProductStatsPageComponent', () => {
  let component: ProductStatsPageComponent;
  let fixture: ComponentFixture<ProductStatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductStatsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
