import { TestBed } from '@angular/core/testing';

import { WpDataService } from './wp-data.service';

describe('WpDataService', () => {
  let service: WpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
