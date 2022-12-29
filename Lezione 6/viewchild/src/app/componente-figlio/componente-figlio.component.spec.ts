import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFiglioComponent } from './componente-figlio.component';

describe('ComponenteFiglioComponent', () => {
  let component: ComponenteFiglioComponent;
  let fixture: ComponentFixture<ComponenteFiglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteFiglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
