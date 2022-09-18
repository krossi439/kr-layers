import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ComponentState } from './component-state.model';
import * as ComponentStateActions from './component-state.actions';
import { homePage } from 'src/app/app-layouts';
import { deepMerge } from '../utils/deep-merge';

export const componentStatesFeatureKey = 'componentStates';

export interface State extends EntityState<ComponentState<any>> { }

export const adapter: EntityAdapter<ComponentState<any>> = createEntityAdapter<ComponentState<any>>();

const entities: {[k: string]: any} = {};

homePage.forEach((c) => entities[c.id] = c);

export const initialState: State = adapter.getInitialState({
  ids: homePage.map((c) => c.id),
  entities
});

export const reducer = createReducer(
  initialState,
  on(ComponentStateActions.addComponentState,
    (state, action) => adapter.addOne(action.componentState, state)
  ),
  on(ComponentStateActions.upsertComponentState,
    (state, action) => adapter.upsertOne(action.componentState, state)
  ),
  on(ComponentStateActions.addComponentStates,
    (state, action) => adapter.addMany(action.componentStates, state)
  ),
  on(ComponentStateActions.upsertComponentStates,
    (state, action) => adapter.upsertMany(action.componentStates.map((c) => deepMerge(state.entities[c.id], c)), state)
  ),
  on(ComponentStateActions.updateComponentState,
    (state, action) => adapter.updateOne({id: action.componentState.id as any, changes: deepMerge(state.entities[action.componentState.id], action.componentState.changes)}, state)
  ),
  on(ComponentStateActions.updateComponentStates,
    (state, action) => adapter.updateMany(action.componentStates, state)
  ),
  on(ComponentStateActions.deleteComponentState,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ComponentStateActions.deleteComponentStates,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ComponentStateActions.loadComponentStates,
    (state, action) => adapter.setAll(action.componentStates, state)
  ),
  on(ComponentStateActions.clearComponentStates,
    state => adapter.removeAll(state)
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const componentStateFeature = createFeatureSelector<State>("components");

export const selectComponentEntities = createSelector(componentStateFeature, (state) => state.entities);

export const selectComponentsArray = createSelector(selectComponentEntities, (state) => Object.values(state) as ComponentState<any>[] ?? []);

export const selectComponent = (id: string) => createSelector(selectComponentEntities, (entities) => entities[id] as ComponentState<any>);

export const selectComponentData = <T>(id: string) => createSelector(selectComponent(id), (component) => (component?.data as T));

export const selectAllComponentsOfType = <T>(selector: string) => createSelector(
  selectComponentsArray,
  (state) => state.filter((c) => c.selector === selector) as ComponentState<T>[]
);
