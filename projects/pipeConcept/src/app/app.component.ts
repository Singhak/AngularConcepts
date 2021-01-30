import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeConcept';
  arrDate = [new Date(), '05/25/2021', '05 July 2021']
}
