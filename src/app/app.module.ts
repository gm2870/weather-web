import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { weatherReducer } from './store/weather/weather.reducer';
import * as weatherEffects from './store/weather/weather.effects';
import { HttpClientModule } from '@angular/common/http';
import { uiReducer } from './store/ui/ui.reducers';
import { forecastReducer } from './store/forecast/forecast.reducers';
import * as forecastEffects from './store/forecast/forecast.effects';
import * as Sentry from '@sentry/angular-ivy';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WeatherModule,
    SharedModule,
    StoreModule.forRoot({
      weather: weatherReducer,
      ui: uiReducer,
      forecast: forecastReducer,
    }),
    EffectsModule.forRoot(weatherEffects, forecastEffects),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
