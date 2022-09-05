import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, EMPTY, tap } from 'rxjs';
import { layouts } from 'src/app/app-layouts';
import { loadComponentStates } from 'src/app/lib/store/component-state.actions';
import { featureNavigation } from './feature.actions';

@Injectable()
export class FeatureEffects {

  navigation$ = createEffect(() => this.actions$.pipe(
    ofType(featureNavigation),
    map((action) => layouts[action.target]),
    tap((target) => console.log(target)),
    map((targetConfig) => loadComponentStates({ componentStates: targetConfig })),
    catchError(() => EMPTY)
  ));

  constructor(private actions$: Actions) {}
}
