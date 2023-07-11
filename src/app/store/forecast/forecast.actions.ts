import { createActionGroup, props } from '@ngrx/store';
import { Forecast } from './forecast.models';

export const forecastActions = createActionGroup({
  source: 'Forecast',
  events: {
    getForecastStart: props<{ q: string; units: string }>(),
    getForecastSuccess: props<{ forecast: Forecast }>(),
    getForecastFailure: props<{ errorMsg: string }>(),
  },
});

export const { getForecastStart, getForecastSuccess, getForecastFailure } =
  forecastActions;
