import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
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

export const searchWeather = createEffect(
  (actions$ = inject(Actions), weatherService = inject(WeatherService)) => {
    return actions$.pipe(
      ofType(onSearchWeather),
      exhaustMap((action) =>
        weatherService.searchWeather(action.q, action.units).pipe(
          map((weather: CurrentWeather) => weatherSearchedSuccess({ weather })),
          catchError((error: { message: string }) =>
            of(weatherSearchedFailure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
export const getWeather = createEffect(
  (actions$ = inject(Actions), weatherService = inject(WeatherService)) => {
    return actions$.pipe(
      ofType(getCurrentWeather, setWeatherUnits),
      exhaustMap((action) =>
        weatherService.searchWeather(action.q, action.units).pipe(
          map((weather: CurrentWeather) =>
            getCurrentWeatherSuccess({ weather })
          ),
          catchError((error: { message: string }) =>
            of(getCurrentWeatherFailure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
// export const displayErrorAlert = createEffect(
//   () => {
//     return inject(Actions).pipe(
//       ofType(ActorsApiActions.actorsLoadedFailure),
//       tap(({ errorMsg }) => alert(errorMsg))
//     );
//   },
//   { functional: true, dispatch: false }
// );
