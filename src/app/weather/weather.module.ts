import { NgModule } from '@angular/core';
import { DailyWeatherItemComponent } from './daily-weather/daily-weather-item/daily-weather-item.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    DailyWeatherComponent,
    DailyWeatherItemComponent,
    SearchComponent,
  ],
  imports: [],
})
export class WeatherModule {}
