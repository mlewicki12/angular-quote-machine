import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes : Quote[] = [
    {
      text: 'Hello there',
      author: 'General Kenobi',
      id: 0
    },
    {
      text: 'I\'m going to go take a shower, so I can\'t tell if I\'m crying',
      author: 'Bojack Horseman',
      id: 1
    },
    {
      text: 'I am the one who knocks',
      author: 'Walter White',
      id: 2
    }
  ];

  constructor() { }

  getQuote(current?: number) : Observable<Quote> {
    var quote : Quote;
    while(true) {
      quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      if(!current || quote.id !== current) {
        break;
      }
    }

    return of(quote);
  }
}
