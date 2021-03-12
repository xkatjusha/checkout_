import { ProductsService } from './../products.service';
import { Component, Input } from '@angular/core';
import { IItemList } from '../products.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent  {
  @Input() itemData: IItemList;
  currentprice: number;

  constructor(public productsService: ProductsService) { 
    this.currentprice=0;
  }

  price(){
    for(let i=0 ; i< this.productsService.itemList.length; i++){
      this.currentprice=this.currentprice+this.itemData.price;
    }
   }
}

