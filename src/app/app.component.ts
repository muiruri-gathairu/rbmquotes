import { Component } from '@angular/core';

import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robertmugabe quotes';
  quotes = [
    new Quote('Windstorm'),
    new Quote('Bombasto'),
    new Quote('Magneta'),
    new Quote('Tornado')

  ];
  myFav = this.quotes[0];
  
}
