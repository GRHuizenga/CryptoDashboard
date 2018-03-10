import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TickerChange24Hr } from '../shared/binance-api-response';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'X-MBX-APIKEY': environment.binanceApiKey,
  })
};

@Injectable()
export class BinanceService {

  constructor(private http: HttpClient) { }

  public get24hrChange(tickerPair: string): Observable<TickerChange24Hr> {
    return this.http.get<TickerChange24Hr>(
      `${environment.binanceBaseUrl}/${environment.ticker24hChange}?symbol=${tickerPair}`, httpOptions);
  }

  public test() {
    console.log('Service working!');
  }
}
