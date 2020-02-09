import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentWeatherApiData } from './icurrent-weather-api-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

getCurrentWeather(city: string, country: string) {
  return this.httpClient.get<ICurrentWeatherApiData>(
    `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appKey}`
  )

}




}
