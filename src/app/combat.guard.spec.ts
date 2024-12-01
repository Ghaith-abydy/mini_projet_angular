import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { combatGuard } from './combat.guard';

describe('combatGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => combatGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
