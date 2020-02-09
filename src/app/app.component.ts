import { Component } from '@angular/core';
//the @component says its a component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';
}
