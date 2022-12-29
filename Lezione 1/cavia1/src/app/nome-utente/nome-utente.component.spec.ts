import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeUtenteComponent } from './nome-utente.component';

describe('NomeUtenteComponent', () => {
  let component: NomeUtenteComponent;
  let fixture: ComponentFixture<NomeUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
