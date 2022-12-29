import { TestBed } from '@angular/core/testing';

import { AdminRequiredLoadGuard } from './admin-required-load.guard';

describe('AdminRequiredLoadGuard', () => {
  let guard: AdminRequiredLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRequiredLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
