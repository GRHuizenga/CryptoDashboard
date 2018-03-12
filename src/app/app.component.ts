import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../binance/services/binance.service';
import { TickerChange24Hr } from '../shared/binance-api-response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  tickerChange$: Observable<TickerChange24Hr>;

  constructor(private binanceService: BinanceService) {

  }

  ngOnInit() {
    //this.tickerChange$ = this.binanceService.get24hrChange('XRPBTC');
    this.binanceService.test();
  }
}
