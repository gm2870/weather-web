import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchWeatherStarted } from 'src/app/store/weather/weather.actions';
import { CurrentWeather } from 'src/app/store/weather/weather.models';
import { getSearchResult } from 'src/app/store/weather/weather.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  weather$: Observable<CurrentWeather>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.weather$ = this.store.pipe(select(getSearchResult));
  }
  search(q: string) {
    this.store.dispatch(searchWeatherStarted({ q }));
  }
}
