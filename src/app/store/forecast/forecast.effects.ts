import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ForecastService } from 'src/app/services/forecast.service';
import { Forecast } from './forecast.models';
import {
  getForecastFailure,
  getForecastStart,
  getForecastSuccess,
} from './forecast.actions';

export const getForecast = createEffect(
  (actions$ = inject(Actions), forecastService = inject(ForecastService)) => {
    return actions$.pipe(
      ofType(getForecastStart),
      exhaustMap((action) =>
        forecastService.getForecast(action.q, action.units).pipe(
          map((forecast: Forecast) => getForecastSuccess({ forecast })),
          catchError((error: { message: string }) =>
            of(getForecastFailure({ errorMsg: error.message }))
          )
        )
      )
    );
  },
  { functional: true }
);
