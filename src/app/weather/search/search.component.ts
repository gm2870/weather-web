import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onStartLoading } from 'src/app/store/ui/ui.actions';
import {
  onSearchWeather,
  setWeatherFromSearchResult,
} from 'src/app/store/weather/weather.actions';
import { CurrentWeather } from 'src/app/store/weather/weather.models';
import {
  getSearchResult,
  getUnits,
} from 'src/app/store/weather/weather.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResult$: Observable<CurrentWeather | null>;
  units: string;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.select(getUnits).subscribe((units) => (this.units = units));
    this.searchResult$ = this.store.pipe(select(getSearchResult));
  }
  search(q: string) {
    this.store.dispatch(onSearchWeather({ q, units: this.units }));
  }
  changeCurrentWeather() {
    this.store.dispatch(setWeatherFromSearchResult());
  }
}
