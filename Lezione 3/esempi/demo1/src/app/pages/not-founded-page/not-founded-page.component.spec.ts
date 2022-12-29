import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundedPageComponent } from './not-founded-page.component';

describe('NotFoundedPageComponent', () => {
  let component: NotFoundedPageComponent;
  let fixture: ComponentFixture<NotFoundedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
