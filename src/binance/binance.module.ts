import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinanceService } from './services/binance.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class BinanceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BinanceModule,
      providers: [BinanceService]
    }
  }
}
