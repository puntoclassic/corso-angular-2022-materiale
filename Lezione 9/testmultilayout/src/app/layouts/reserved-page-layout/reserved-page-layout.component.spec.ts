import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedPageLayoutComponent } from './reserved-page-layout.component';

describe('ReservedPageLayoutComponent', () => {
  let component: ReservedPageLayoutComponent;
  let fixture: ComponentFixture<ReservedPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservedPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
