import { TestBed } from '@angular/core/testing';

import { TyperoomService } from './typeroom.service';

describe('TyperoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TyperoomService = TestBed.get(TyperoomService);
    expect(service).toBeTruthy();
  });
});
