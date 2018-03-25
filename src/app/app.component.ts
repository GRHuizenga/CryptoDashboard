import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../binance/services/binance.service';
import { TickerChange24Hr, Kline } from '../shared/binance-api-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  tickerChange$: Observable<TickerChange24Hr>;
  candleSticks$: Observable<Kline[]>;

  constructor(private binanceService: BinanceService) {

  }

  getTime(time: number): string {
    let dateTime: Date = new Date(time);
    return dateTime.toLocaleTimeString('nl-NL');
  }

  ngOnInit() {
    this.candleSticks$ = this.binanceService.getKlines('XRPBTC', '5m', 10);
  }
}
