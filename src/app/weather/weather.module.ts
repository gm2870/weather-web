import { NgModule } from '@angular/core';
import { DailyWeatherItemComponent } from './daily-weather/daily-weather-item/daily-weather-item.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    DailyWeatherComponent,
    DailyWeatherItemComponent,
    SearchComponent,
    HomeComponent,
    CurrentWeatherComponent,
  ],
  imports: [SharedModule],
})
export class WeatherModule {}
