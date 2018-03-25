export interface TickerChange24Hr {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  askPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  fristId: number;
  lastId: number;
  count: number;
}

export class Kline {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
  quoteAssetVolume: string;
  numberOfTrades: number;
  takerBuyBaseAssetVolume: string;
  takerBuyQuoteAssetVolume: string;
  ignore: string;

  constructor(kline: any[]) {
    this.openTime = kline[0];
    this.open = kline[1];
    this.high = kline[2];
    this.low = kline[3];
    this.close = kline[4];
    this.volume = kline[5];
    this.closeTime = kline[6];
    this.quoteAssetVolume = kline[7];
    this.numberOfTrades = kline[8];
    this.takerBuyBaseAssetVolume = kline[9];
    this.takerBuyQuoteAssetVolume = kline[10];
    this.ignore = kline[11];
  }
}
