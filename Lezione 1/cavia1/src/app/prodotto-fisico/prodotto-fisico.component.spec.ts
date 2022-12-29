import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoFisicoComponent } from './prodotto-fisico.component';

describe('ProdottoFisicoComponent', () => {
  let component: ProdottoFisicoComponent;
  let fixture: ComponentFixture<ProdottoFisicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoFisicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottoFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
