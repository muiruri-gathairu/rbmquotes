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
    new Quote('cucu', 'Windstorm'),
    new Quote('Bombasto', 'ggggg'),
    new Quote('Magneta', 'dddddd'),
    new Quote('Tornado','ggggggg')

  ];
  myFav = this.quotes[0];
  
}
