
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent implements OnInit {
  quote: Quote;

  constructor(private quotes: QuoteService) { }

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote(id?: number): void {
    this.quotes.getQuote(id).subscribe(quote =>
      this.quote = quote);
  }
}
