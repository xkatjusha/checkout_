import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ItemsComponent } from './items/items.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [				
    AppComponent,
      CheckoutComponent,
      NumbersComponent,
      ItemsComponent,
      PriceComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
