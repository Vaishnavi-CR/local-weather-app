import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {WeatherService} from './weather.service';
import {HttpClientModule} from '@angular/common/http';
//the npx ng g c automatically registered the component at the root module(app module)
//the @ngmodule says that its a module
//declarations are for component registration
//providers are for registering the services
//imports are for other libraries
@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
