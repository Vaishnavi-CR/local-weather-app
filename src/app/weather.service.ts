import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentWeatherApiData } from './icurrent-weather-api-data';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>{
  return this.httpClient.get<ICurrentWeatherApiData>(
    `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appKey}`
  ).pipe(map(data => this.transformToICurrentWeather(data)))

}

private transformToICurrentWeather(data: ICurrentWeatherApiData): ICurrentWeather {

  return {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    description: data.weather[0].description,
    image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    temperature: this.convertKelvinToFahrenheit(data.main.temp)

  } as ICurrentWeather


}
private convertKelvinToFahrenheit(kelvin: number): number {

  return kelvin * 9 / 5 - 459.67
}


}
