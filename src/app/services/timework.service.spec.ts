import { TestBed } from '@angular/core/testing';

import { TimeworkService } from './timework.service';

describe('TimeworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeworkService = TestBed.get(TimeworkService);
    expect(service).toBeTruthy();
  });
});
