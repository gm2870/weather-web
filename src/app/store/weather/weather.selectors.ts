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
export const getQueryString = createSelector(
  getWeatherState,
  (state: WeatherState) => state.queryString
);

export const getUnits = createSelector(
  getWeatherState,
  (state: WeatherState) => state.units
);
export const getQueryAndUnits = createSelector(
  getWeatherState,
  (state: WeatherState) => ({
    units: state.units,
    q: state.queryString,
  })
);
export const isLoading = createSelector(
  getWeatherState,
  (state: WeatherState) => state.loading
);
