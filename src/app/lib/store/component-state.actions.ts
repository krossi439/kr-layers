import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ComponentState } from './component-state.model';

export const loadComponentStates = createAction(
  '[ComponentState/API] Load ComponentStates', 
  props<{ componentStates: ComponentState<any>[] }>()
);

export const addComponentState = createAction(
  '[ComponentState/API] Add ComponentState',
  props<{ componentState: ComponentState<any> }>()
);

export const upsertComponentState = createAction(
  '[ComponentState/API] Upsert ComponentState',
  props<{ componentState: ComponentState<any> }>()
);

export const addComponentStates = createAction(
  '[ComponentState/API] Add ComponentStates',
  props<{ componentStates: ComponentState<any>[] }>()
);

export const upsertComponentStates = createAction(
  '[ComponentState/API] Upsert ComponentStates',
  props<{ componentStates: ComponentState<any>[] }>()
);

export const updateComponentState = createAction(
  '[ComponentState/API] Update ComponentState',
  props<{ componentState: Update<ComponentState<any>> }>()
);

export const updateComponentStates = createAction(
  '[ComponentState/API] Update ComponentStates',
  props<{ componentStates: Update<ComponentState<any>>[] }>()
);

export const deleteComponentState = createAction(
  '[ComponentState/API] Delete ComponentState',
  props<{ id: string }>()
);

export const deleteComponentStates = createAction(
  '[ComponentState/API] Delete ComponentStates',
  props<{ ids: string[] }>()
);

export const clearComponentStates = createAction(
  '[ComponentState/API] Clear ComponentStates'
);
