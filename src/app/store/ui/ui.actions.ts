import { createActionGroup, props } from '@ngrx/store';

export const UIActions = createActionGroup({
  source: 'UI',
  events: {
    onStartLoading: props<{ loading: boolean }>(),
    onStopLoading: props<{ loading: boolean }>(),
  },
});

export const { onStartLoading, onStopLoading } = UIActions;
