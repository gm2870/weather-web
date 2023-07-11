import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  getCurrentWeather,
  onSearchWeather,
} from 'src/app/store/weather/weather.actions';
import { CurrentWeather } from 'src/app/store/weather/weather.models';
import {
  getCurrentResult,
  getSearchResult,
} from 'src/app/store/weather/weather.selectors';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  weather: CurrentWeather;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store
      .pipe(select(getCurrentResult))
      .subscribe((w) => (this.weather = w));
    this.store.dispatch(getCurrentWeather({ q: 'London' }));
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
