import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmministrazioneHomePageComponent } from './amministrazione-home-page.component';

describe('AmministrazioneHomePageComponent', () => {
  let component: AmministrazioneHomePageComponent;
  let fixture: ComponentFixture<AmministrazioneHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmministrazioneHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmministrazioneHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
