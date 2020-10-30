import { TestBed } from '@angular/core/testing';

import { AdminROleGuard } from './admin-role.guard';

describe('AdminROleGuard', () => {
  let guard: AdminROleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminROleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
