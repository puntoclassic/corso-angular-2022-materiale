import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDueComponent } from './componente-due.component';

describe('ComponenteDueComponent', () => {
  let component: ComponenteDueComponent;
  let fixture: ComponentFixture<ComponenteDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
