import { Component, OnInit } from "@angular/core";
import { ICurrentWeather } from "../icurrent-weather";
import { WeatherService } from '../weather.service';

//@component says that its a component
//the files talk to each other using the below @component object
@Component({
  selector: "app-current-weather",
  //for paragraph how we use <p></p>, the selector says whats the name we use for component so it will be like <app-current-weather></app-current-weather>
  // inorder to use this component in the HTML we use the selector as <app-current-weather></app-current-weather>
  //feel free to change the name of the component.
  templateUrl: "./current-weather.component.html", //template file can be found here
  styleUrls: ["./current-weather.component.css"] //styles file can be found here
})
export class CurrentWeatherComponent implements OnInit {
  
  current: ICurrentWeather = {
    city: '',
    country: '',
    date: 0,
    description: '',
    image: '',
    temperature: 0

  } as ICurrentWeather;
  
  constructor(private weatherService: WeatherService) {
    
  }

  ngOnInit() {

  this.weatherService.getCurrentWeather('Dallas','US').subscribe(data => this.current = data);

  }
}