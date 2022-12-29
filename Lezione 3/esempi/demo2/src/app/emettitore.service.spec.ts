import { TestBed } from '@angular/core/testing';

import { EmettitoreService } from './emettitore.service';

describe('EmettitoreService', () => {
  let service: EmettitoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmettitoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
