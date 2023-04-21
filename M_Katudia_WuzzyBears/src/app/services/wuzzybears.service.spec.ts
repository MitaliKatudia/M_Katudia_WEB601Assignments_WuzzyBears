import { TestBed } from '@angular/core/testing';

import { WuzzyBearsService } from './wuzzybears.service';

describe('SuperBikeService', () => {
  let service: WuzzyBearsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WuzzyBearsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
