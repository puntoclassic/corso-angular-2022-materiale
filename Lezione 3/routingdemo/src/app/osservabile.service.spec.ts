import { TestBed } from '@angular/core/testing';

import { OsservabileService } from './osservabile.service';

describe('OsservabileService', () => {
  let service: OsservabileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsservabileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
