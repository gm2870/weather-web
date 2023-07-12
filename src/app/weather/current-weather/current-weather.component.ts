import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getCurrentWeather } from 'src/app/store/weather/weather.actions';
import { getWeatherState } from 'src/app/store/weather/weather.selectors';
import { IMPERIAL_UNIT, METRIC_UNIT } from '../constants';
import { WeatherState } from 'src/app/store/weather/weather.reducer';
import { getUnitStrings } from '../utils/utils';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  readonly IMPERIAL_UNIT = IMPERIAL_UNIT;
  readonly METRIC_UNIT = METRIC_UNIT;
  private weatherState: WeatherState;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.pipe(select(getWeatherState)).subscribe((w) => {
      this.weatherState = w;
    });

    this.store.dispatch(
      getCurrentWeather({
        q: this.weatherState.queryString,
        units: this.weatherState.units,
      })
    );
  }
  get weather() {
    return this.weatherState.currentWeather;
  }
  get _unit() {
    return getUnitStrings(this.weatherState.units);
  }
  get currentDate() {
    return new Date();
  }

  get time() {
    const d = new Date();
    return (
      (d.getHours() < 10 ? '0' : '') +
      d.getHours() +
      ':' +
      (d.getMinutes() < 10 ? '0' : '') +
      d.getMinutes() +
      (d.getHours() < 12 ? 'am' : 'pm')
    );
  }
}
