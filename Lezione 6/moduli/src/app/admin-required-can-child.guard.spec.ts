import { TestBed } from '@angular/core/testing';

import { AdminRequiredCanChildGuard } from './admin-required-can-child.guard';

describe('AdminRequiredCanChildGuard', () => {
  let guard: AdminRequiredCanChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRequiredCanChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
