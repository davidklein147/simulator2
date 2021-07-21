import { TestBed } from '@angular/core/testing';

import { SuperSerService } from './super-ser.service';

describe('SuperSerService', () => {
  let service: SuperSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
