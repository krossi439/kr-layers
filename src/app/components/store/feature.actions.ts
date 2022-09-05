import { createAction, props } from '@ngrx/store';

export const featureNavigation = createAction(
  '[Feature] Navigation',
  props<{ target: string }>()
);