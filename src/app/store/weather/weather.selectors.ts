import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.reducer';

export const getWeatherState = createFeatureSelector<WeatherState>('weather');

export const getSearchResult = createSelector(
  getWeatherState,
  (state: WeatherState) => state.searchResult
);
export const getCurrentResult = createSelector(
  getWeatherState,
  (state: WeatherState) => state.currentWeather
);
