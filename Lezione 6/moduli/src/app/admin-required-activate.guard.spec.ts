import { TestBed } from '@angular/core/testing';

import { AdminRequiredActivateGuard } from './admin-required-activate.guard';

describe('AdminRequiredActivateGuard', () => {
  let guard: AdminRequiredActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRequiredActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
