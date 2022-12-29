import { TestBed } from '@angular/core/testing';

import { UtenteIsItalianGuard } from './utente-is-italian.guard';

describe('UtenteIsItalianGuard', () => {
  let guard: UtenteIsItalianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UtenteIsItalianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
