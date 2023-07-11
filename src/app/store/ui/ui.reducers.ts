import { createReducer, on } from '@ngrx/store';
import { onStartLoading, onStopLoading } from './ui.actions';

export interface UIState {
  loading: boolean;
}
export const initialState: UIState = {
  loading: true,
};

export const uiReducer = createReducer(
  initialState,

  on(onStartLoading, (state, action) => {
    return {
      loading: action.loading,
    };
  }),
  on(onStopLoading, (state, action) => {
    return {
      loading: action.loading,
    };
  })
);
