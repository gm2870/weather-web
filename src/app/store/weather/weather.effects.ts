import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getCurrentWeather,
  getCurrentWeatherFailure,
  getCurrentWeatherSuccess,
  onSearchWeather,
  setWeatherUnits,
  weatherSearchedFailure,
  weatherSearchedSuccess,
} from './weather.actions';
import { CurrentWeather } from './weather.models';
import { WeatherService } from 'src/app/services/weather.service';
import { CacheService } from 'src/app/services/cache.service';

export const searchWeather = createEffect(
  (
    actions$ = inject(Actions),
    weatherService = inject(WeatherService),
    cacheService = inject(CacheService)
  ) => {
    return actions$.pipe(
      ofType(onSearchWeather),
      switchMap((action) => {
        const weather = cacheService.weathers.find(
          (w) => w.name.toLowerCase() === action.q
        );
        if (weather) {
          return of(weatherSearchedSuccess({ weather }));
        }
        return weatherService.searchWeather(action.q, action.units).pipe(
          map((weather: CurrentWeather) => {
            cacheService.saveWeather(weather);

            return weatherSearchedSuccess({ weather });
          }),
          catchError(
            (error: {
              error: { code: string; message: string };
              message: string;
            }) => {
              return of(
                weatherSearchedFailure({ errorMsg: error.error.message })
              );
            }
          )
        );
      })
    );
  },
  { functional: true }
);
export const getWeather = createEffect(
  (actions$ = inject(Actions), weatherService = inject(WeatherService)) => {
    return actions$.pipe(
      ofType(getCurrentWeather, setWeatherUnits),

      switchMap((action) => {
        return weatherService.searchWeather(action.q, action.units).pipe(
          map((weather: CurrentWeather) => {
            return getCurrentWeatherSuccess({ weather });
          }),
          catchError((error: { message: string }) =>
            of(getCurrentWeatherFailure({ errorMsg: error.message }))
          )
        );
      })
    );
  },
  { functional: true }
);
