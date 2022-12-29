import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitoNonDisponibileComponent } from './sito-non-disponibile.component';

describe('SitoNonDisponibileComponent', () => {
  let component: SitoNonDisponibileComponent;
  let fixture: ComponentFixture<SitoNonDisponibileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitoNonDisponibileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitoNonDisponibileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
