import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTestComponent } from './componente-test.component';

describe('ComponenteTestComponent', () => {
  let component: ComponenteTestComponent;
  let fixture: ComponentFixture<ComponenteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
