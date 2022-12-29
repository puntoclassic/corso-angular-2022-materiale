import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ascoltatore1Component } from './ascoltatore1.component';

describe('Ascoltatore1Component', () => {
  let component: Ascoltatore1Component;
  let fixture: ComponentFixture<Ascoltatore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ascoltatore1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ascoltatore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
