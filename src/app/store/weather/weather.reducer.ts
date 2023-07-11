import { createReducer, on } from '@ngrx/store';
import {
  getCurrentWeatherFailure,
  getCurrentWeatherSuccess,
  onSearchWeather,
  setWeatherFromSearchResult,
  setWeatherUnits,
  weatherSearchedFailure,
  weatherSearchedSuccess,
} from './weather.actions';
import { CurrentWeather } from './weather.models';
export interface WeatherState {
  currentWeather: CurrentWeather | null;
  searchResult: CurrentWeather | null;
  units: string;
  queryString: string;
  loading: boolean;
  errorMsg: string;
}
export const initialState: WeatherState = {
  currentWeather: null,
  searchResult: null,
  units: 'metric',
  queryString: 'Kingdom of Belgium',
  loading: true,
  errorMsg: '',
};

export const weatherReducer = createReducer(
  initialState,

  on(onSearchWeather, (state, action) => {
    const newState = {
      ...state,
      queryString: action.q,
      loading: true,
      errorMsg: '',
    };
    return newState;
  }),

  on(weatherSearchedSuccess, (state, action) => {
    const newState = {
      ...state,
      searchResult: action.weather,
      loading: false,
    };
    return newState;
  }),

  on(getCurrentWeatherFailure, (state, action) => {
    const newState = {
      ...state,
      searchResult: null,
      loading: false,
      errorMsg: action.errorMsg,
    };
    return newState;
  }),
  on(weatherSearchedFailure, (state, action) => {
    console.log(action);
    const newState = {
      ...state,
      searchResult: null,
      loading: false,
      errorMsg: action.errorMsg,
    };
    return newState;
  }),
  on(getCurrentWeatherSuccess, (state, action) => {
    const newState = {
      ...state,
      currentWeather: action.weather,
      loading: false,
    };
    return newState;
  }),
  on(setWeatherFromSearchResult, (state) => {
    const newState = {
      ...state,
      searchResult: null,
      currentWeather: state.searchResult,
      loading: false,
    };
    return newState;
  }),
  on(setWeatherUnits, (state, action) => {
    const newState = {
      ...state,
      units: action.units,
      loading: true,
    };
    return newState;
  })
);
