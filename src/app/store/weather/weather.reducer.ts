import { createReducer, on } from '@ngrx/store';
import {
  getCurrentWeatherSuccess,
  onSearchWeather,
  setWeatherFromSearchResult,
  setWeatherUnits,
  weatherSearchedSuccess,
} from './weather.actions';
import { CurrentWeather } from './weather.models';
export interface WeatherState {
  currentWeather: CurrentWeather;
  searchResult: CurrentWeather;
  units: string;
  queryString: string;
}
export const initialState: any = {
  currentWeather: null,
  searchResult: null,
  units: 'metric',
  queryString: 'Kingdom of Belgium',
};

export const weatherReducer = createReducer(
  initialState,

  on(onSearchWeather, (state, action) => {
    const newState = {
      ...state,
      queryString: action.q,
    };
    return newState;
  }),

  on(weatherSearchedSuccess, (state, action) => {
    const newState = {
      ...state,
      searchResult: action.weather,
    };
    return newState;
  }),
  on(getCurrentWeatherSuccess, (state, action) => {
    const newState = {
      ...state,
      currentWeather: action.weather,
    };
    return newState;
  }),
  on(setWeatherFromSearchResult, (state) => {
    const newState = {
      ...state,
      searchResult: null,
      currentWeather: state.searchResult,
    };
    return newState;
  }),
  on(setWeatherUnits, (state, action) => {
    const newState = {
      ...state,
      units: action.units,
      searchResult: null,
    };
    return newState;
  })
);
