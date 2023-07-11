import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  searchWeatherStarted,
  weatherSearchedFailure,
  weatherSearchedSuccess,
} from './weather.actions';
import { CurrentWeather } from './weather.models';
import { WeatherService } from 'src/app/services/weather.service';

export const searchWeather = createEffect(
  (actions$ = inject(Actions), weatherService = inject(WeatherService)) => {
    return actions$.pipe(
      ofType(searchWeatherStarted),
      exhaustMap((action) =>
        weatherService.searchWeather(action.q).pipe(
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

// export const displayErrorAlert = createEffect(
//   () => {
//     return inject(Actions).pipe(
//       ofType(ActorsApiActions.actorsLoadedFailure),
//       tap(({ errorMsg }) => alert(errorMsg))
//     );
//   },
//   { functional: true, dispatch: false }
// );
