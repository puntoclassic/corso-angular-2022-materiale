import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmministrazioneUtentiPageComponent } from './amministrazione-utenti-page.component';

describe('AmministrazioneUtentiPageComponent', () => {
  let component: AmministrazioneUtentiPageComponent;
  let fixture: ComponentFixture<AmministrazioneUtentiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmministrazioneUtentiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmministrazioneUtentiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
