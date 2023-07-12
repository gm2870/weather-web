import { createReducer, on } from '@ngrx/store';
import {
  getForecastStart,
  getForecastFailure,
  getForecastSuccess,
} from './forecast.actions';
import { Forecast } from './forecast.models';
export interface ForecastState {
  forecast: Forecast | null;
  cnt: number;
}
export const initialState: ForecastState = {
  forecast: null,
  cnt: 8,
};

export const forecastReducer = createReducer(
  initialState,

  on(getForecastStart, (state, action) => {
    return state;
  }),
  on(getForecastSuccess, (state, action) => {
    return {
      ...state,
      forecast: action.forecast,
    };
  }),
  on(getForecastFailure, (state, ction) => {
    return state;
  })
);
