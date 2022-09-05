
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { State as ComponentState } from './component-state.reducer';
import { reducer as ComponentReducer } from './component-state.reducer';

export interface State {
  components: ComponentState
}

export const reducers: ActionReducerMap<State> = {
  components: ComponentReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

