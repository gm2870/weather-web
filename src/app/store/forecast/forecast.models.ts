import { MainInfo, Weather, Clouds, Coord } from '../weather/weather.models';

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: MainInfo;
  weather: Weather[];
  coulds: Clouds;
}

export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  country: string;
  coord: Coord;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
