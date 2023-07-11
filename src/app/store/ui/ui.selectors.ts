import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UIState } from './ui.reducers';

export const getUIState = createFeatureSelector<UIState>('ui');

export const getIsLoading = createSelector(
  getUIState,
  (state: UIState) => state.loading
);
