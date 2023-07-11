import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setWeatherUnits } from '../store/weather/weather.actions';
import {
  getQueryAndUnits,
  getQueryString,
  getUnits,
  isLoading,
} from '../store/weather/weather.selectors';
import { onStartLoading } from '../store/ui/ui.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading$: Observable<boolean>;
  units$: Observable<string>;
  weatherInfo: {
    q: string;
    units: string;
  };
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(isLoading));
    this.units$ = this.store.pipe(select(getUnits));

    this.store
      .select(getQueryAndUnits)
      .subscribe((info) => (this.weatherInfo = info));
  }

  changeUnits(unit: string) {
    this.store.dispatch(onStartLoading({ loading: true }));
    this.store.dispatch(
      setWeatherUnits({ q: this.weatherInfo.q, units: unit })
    );
  }
}
