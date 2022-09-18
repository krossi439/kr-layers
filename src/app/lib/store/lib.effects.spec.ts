import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LibEffects } from './lib.effects';

describe('LibEffects', () => {
  let actions$: Observable<any>;
  let effects: LibEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LibEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
