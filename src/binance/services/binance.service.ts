import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TickerChange24Hr, Kline } from '../../shared/binance-api-response';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'X-MBX-APIKEY': environment.binanceApiKey,
  })
};

const candleStickIntervals: string[] = [
  '1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '8h', '12h', '1d', '3d', '1w', '1M'
]

@Injectable()
export class BinanceService {

  constructor(private http: HttpClient) { }

  public get24hrChange(tickerPair: string): Observable<TickerChange24Hr> {
    return this.http.get<TickerChange24Hr>(
      `${environment.binanceBaseUrl}/${environment.ticker24hChange}?symbol=${tickerPair}`, httpOptions);
  }

  /**
   * Name	      Type	     Mandatory	    Description
   * symbol	    STRING	   YES            e.g. XRPBTC
   * interval	  ENUM	     YES
   * limit	    INT	       NO	            Default 500; max 500.
   * startTime	LONG	     NO
   * endTime	  LONG	     NO
   *
   * If startTime and endTime are not sent, the most recent klines are returned.
   */
  public getKlines(symbol: string, interval: string, limit?: number, startTime?: number, endtime?: number): Observable<Kline[]> {
    return this.http.get<Kline[]>(
      `${environment.binanceBaseUrl}/${environment.getKlines}?symbol=${symbol}&interval=${interval}&limit=10`,
      httpOptions
    ).map((response: any[]) => {
      console.log(response);

      let klines: Kline[] = [];
      response.forEach((k: any[]) => {
        klines.push(new Kline(k));
      })

      return klines;
    });
  }

  public test() {
    console.log('Service working!');
  }
}
