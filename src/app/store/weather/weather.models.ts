export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainInfo[];
  timezone: number;
  name: string;
  id: number;
  cod: number;
  dt: number;
  clouds: Clouds;
  wind: Wind;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}
export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  pod: string;
}
export interface ForecastItem {
  dt: number;
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

export interface Coord {
  lat: number;
  lon: number;
}
