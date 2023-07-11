import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ForecastState } from './forecast.reducers';

export const getWeatherState = createFeatureSelector<ForecastState>('forecast');

export const getForecastResult = createSelector(
  getWeatherState,
  (state: ForecastState) => state.forecast
);
