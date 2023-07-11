import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  onSearchWeather,
  setWeatherFromSearchResult,
} from 'src/app/store/weather/weather.actions';
import { CurrentWeather } from 'src/app/store/weather/weather.models';
import { getSearchResult } from 'src/app/store/weather/weather.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  weather: CurrentWeather;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store
      .pipe(select(getSearchResult))
      .subscribe((w) => (this.weather = w));
  }
  search(q: string) {
    this.store.dispatch(onSearchWeather({ q }));
  }
  changeCurrentWeather() {
    this.store.dispatch(setWeatherFromSearchResult());
  }
}
