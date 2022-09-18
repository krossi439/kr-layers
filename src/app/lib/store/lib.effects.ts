import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { SplitViewData } from '../split-view/split-view.component';
import { closeSelf, noopAction, updateComponentState } from './component-state.actions';
import { selectAllComponentsOfType } from './component-state.reducer';

@Injectable()
export class LibEffects {

  closeSelf$ = createEffect(() => this.actions$.pipe(
    ofType(closeSelf),
    concatLatestFrom(() => this.store.select(selectAllComponentsOfType<SplitViewData>('kr-split-view'))),
    map(([action, components]) => {
      
      const container = components
        .filter((c) => c && c.data && c.data.components)
        .find((c) => c.data.components.includes(action.id));

      if (container) {
        container.data.components = container.data.components.filter((c: string) => c !== action.id);
        return updateComponentState({componentState: {id: container.id, changes: container}});
      }
      
      return noopAction();
    })
  ));

  constructor(private actions$: Actions, private store: Store) {}
}
