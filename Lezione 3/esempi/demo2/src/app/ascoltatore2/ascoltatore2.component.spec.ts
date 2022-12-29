import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ascoltatore2Component } from './ascoltatore2.component';

describe('Ascoltatore2Component', () => {
  let component: Ascoltatore2Component;
  let fixture: ComponentFixture<Ascoltatore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ascoltatore2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ascoltatore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
