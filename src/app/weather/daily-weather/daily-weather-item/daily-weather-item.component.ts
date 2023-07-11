import { Component, Input } from '@angular/core';
import { CurrentWeather } from 'src/app/store/weather/weather.models';
import { getUnitStrings } from '../../utils/utils';
import { ForecastItem } from 'src/app/store/forecast/forecast.models';

@Component({
  selector: 'app-daily-weather-item',
  templateUrl: './daily-weather-item.component.html',
  styleUrls: ['./daily-weather-item.component.scss'],
})
export class DailyWeatherItemComponent {
  @Input() forecastItem: ForecastItem;
  @Input() units: string;

  get unitStrings() {
    return getUnitStrings(this.units);
  }

  get shortDate() {
    return new Date();
  }
}
