import { Component } from '@angular/core';

import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
 
  title = 'robertmugabe quotes';
  quotes = [
    new Quote('liz', 'Cigarette is a pinch of tobacco rolled in a piece of paper with fire on one end and a fool on the other end'),
    new Quote('Bombasto', 'When one’s goat gets missing, the aroma of a neighbour’s soup gets suspicious'),
    new Quote('ninja', 'Sometimes you look back at girls you spent money on, rather than send it to your mum, and you realise witchcraft is real'),
    new Quote('Tony','I have died many times. I have actually beaten Jesus Christ because he only died once')

  ];
  myFav = this.quotes[0] 
  sharedQuote = [
    new Quote('username' , 'name')
  ];

  onAdd() {
    this.quotes.push();
  }
}

 