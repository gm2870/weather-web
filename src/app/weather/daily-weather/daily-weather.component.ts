import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ForecastService } from 'src/app/services/forecast.service';
import { getForecastStart } from 'src/app/store/forecast/forecast.actions';
import { Forecast, ForecastItem } from 'src/app/store/forecast/forecast.models';
import { getForecastResult } from 'src/app/store/forecast/forecast.selectors';
import { CurrentWeather } from 'src/app/store/weather/weather.models';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss'],
})
export class DailyWeatherComponent implements OnChanges, OnInit {
  @Input() q: string;
  @Input() units: string;
  forecastList: ForecastItem[];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getForecastResult).subscribe((f) => {
      if (!f) return;
      this.forecastList = f.list;
    });
  }
  ngOnChanges(): void {
    this.store.dispatch(getForecastStart({ q: this.q, units: this.units }));
  }
}
