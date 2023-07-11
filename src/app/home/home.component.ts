import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsLoading } from '../store/ui/ui.selectors';
import { setWeatherUnits } from '../store/weather/weather.actions';
import { getQueryString, getUnits } from '../store/weather/weather.selectors';
import { onStartLoading } from '../store/ui/ui.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading$: Observable<boolean>;
  units$: Observable<string>;
  queryString: string;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(getIsLoading));
    this.units$ = this.store.pipe(select(getUnits));
    this.store.select(getQueryString).subscribe((q) => (this.queryString = q));
  }

  changeUnits(unit: string) {
    this.store.dispatch(onStartLoading({ loading: true }));
    this.store.dispatch(setWeatherUnits({ q: this.queryString, units: unit }));
  }
}
