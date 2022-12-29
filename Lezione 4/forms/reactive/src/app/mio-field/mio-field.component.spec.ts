import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioFieldComponent } from './mio-field.component';

describe('MioFieldComponent', () => {
  let component: MioFieldComponent;
  let fixture: ComponentFixture<MioFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
