import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioFormComponent } from './mio-form.component';

describe('MioFormComponent', () => {
  let component: MioFormComponent;
  let fixture: ComponentFixture<MioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
