// import { createAction } from '@ngrx/store';

// export const search = createAction('[Search Component] Search');
// export const getCurrent = createAction('[Weather Component] GetCurrent');
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CurrentWeather } from './weather.models';

export const WeatherActions = createActionGroup({
  source: 'Weather',
  events: {
    onSearchWeather: props<{ q: string }>(),
    getCurrentWeather: props<{ q: string }>(),
    weatherSearchedSuccess: props<{ weather: CurrentWeather }>(),
    weatherSearchedFailure: props<{ errorMsg: string }>(),
    getCurrentWeatherSuccess: props<{ weather: CurrentWeather }>(),
    setWeatherFromSearchResult: emptyProps(),
    getCurrentWeatherFailure: props<{ errorMsg: string }>(),
  },
});

export const {
  onSearchWeather,
  getCurrentWeather,
  weatherSearchedSuccess,
  weatherSearchedFailure,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
  setWeatherFromSearchResult,
} = WeatherActions;
