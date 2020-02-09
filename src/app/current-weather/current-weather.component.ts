import { Component, OnInit } from "@angular/core";
import { ICurrentWeather } from "../icurrent-weather";

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
  ngOnInit() {}
  current: ICurrentWeather;
  constructor() {
    this.current = {
      city: "Redmond",
      country: "USA",
      date: 148679989,
      image: "",
      temperature: 40,
      description: "sunny"
    } as ICurrentWeather;
  }
}