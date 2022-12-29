import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoVirtualeComponent } from './prodotto-virtuale.component';

describe('ProdottoVirtualeComponent', () => {
  let component: ProdottoVirtualeComponent;
  let fixture: ComponentFixture<ProdottoVirtualeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoVirtualeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottoVirtualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
