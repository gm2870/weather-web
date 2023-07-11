import { createReducer, on } from '@ngrx/store';
import {
  getCurrentWeatherSuccess,
  weatherSearchedSuccess,
} from './weather.actions';
import { CurrentWeather } from './weather.models';
export interface WeatherState {
  currentWeather: CurrentWeather;
  searchResult: CurrentWeather;
}
export const initialState: any = {
  currentWeather: null,
  searchResult: null,
};

export const weatherReducer = createReducer(
  initialState,
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
      ...state,
      currentWeather: action.weather,
    };
    return newState;
  })
);
