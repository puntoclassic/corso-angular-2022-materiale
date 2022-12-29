import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioComponent } from './mio.component';

describe('MioComponent', () => {
  let component: MioComponent;
  let fixture: ComponentFixture<MioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
