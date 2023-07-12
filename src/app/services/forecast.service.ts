import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast } from '../store/forecast/forecast.models';

const OPENWEATHER_API_KEY = '9353f0cc5063e9dae19c477b63e3ece9';
const API_END_POINT = 'http://api.openweathermap.org/data/2.5/';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  model = 'forecast';

  constructor(private http: HttpClient) {}

  private getBaseUrl() {
    return `${API_END_POINT}${this.model}?appid=${OPENWEATHER_API_KEY}`;
  }

  getForecast(q: string, units: string) {
    const url = `${this.getBaseUrl()}&q=${q}&units=${units}&cnt=8`;
    return this.http.get<Forecast>(url);
  }
}
