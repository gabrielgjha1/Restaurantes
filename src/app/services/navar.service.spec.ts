import { TestBed } from '@angular/core/testing';

import { NavarService } from './navar.service';

describe('NavarService', () => {
  let service: NavarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
