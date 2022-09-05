import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ComponentState } from './component-state.model';
import * as ComponentStateActions from './component-state.actions';
import { homePage } from 'src/app/app-layouts';

export const componentStatesFeatureKey = 'componentStates';

export interface State extends EntityState<ComponentState<any>> { }

export const adapter: EntityAdapter<ComponentState<any>> = createEntityAdapter<ComponentState<any>>();

export const initialState: State = adapter.getInitialState(homePage);

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
    (state, action) => adapter.upsertMany(action.componentStates, state)
  ),
  on(ComponentStateActions.updateComponentState,
    (state, action) => adapter.updateOne(action.componentState, state)
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

export const selectComponentEntities = createSelector(
  componentStateFeature,
  (state) => state.entities
);

export const selectComponent = (id: string) => createSelector(selectComponentEntities, (entities) => entities[id] as ComponentState<any>);

export const selectComponentData = <T>(id: string) => createSelector(selectComponent(id), (component) => (component?.data as T));
