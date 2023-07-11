import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherService } from './services/weather.service';
import { weatherReducer } from './store/weather/weather.reducer';
import * as weatherEffects from './store/weather/weather.effects';
import { HttpClientModule } from '@angular/common/http';
import { uiReducer } from './store/ui/ui.reducers';
import { forecastReducer } from './store/forecast/forecast.reducers';
import * as forecastEffects from './store/forecast/forecast.effects';
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
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
