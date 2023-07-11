import { createReducer, on } from '@ngrx/store';
import {
  getCurrentWeatherSuccess,
  onSearchWeather,
  setWeatherFromSearchResult,
  weatherSearchedSuccess,
} from './weather.actions';
import { CurrentWeather } from './weather.models';
export interface WeatherState {
  currentWeather: CurrentWeather;
  searchResult: CurrentWeather;
  units: string;
}
export const initialState: any = {
  currentWeather: null,
  searchResult: null,
  units: 'metric',
};

export const weatherReducer = createReducer(
  initialState,

  on(onSearchWeather, (state, action) => {
    console.log(action);
    const newState = {
      ...state,
    };
    return newState;
  }),

  on(weatherSearchedSuccess, (state, action) => {
    console.log(action);
    const newState = {
      ...state,
      searchResult: action.weather,
    };
    return newState;
  }),
  on(getCurrentWeatherSuccess, (state, action) => {
    const newState = {
      searchResult: null,
      currentWeather: action.weather,
    };
    return newState;
  }),
  on(setWeatherFromSearchResult, (state) => {
    const newState = {
      searchResult: null,
      currentWeather: state.searchResult,
    };
    return newState;
  })
);
