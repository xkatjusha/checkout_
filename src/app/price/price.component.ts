import { ProductsService } from './../products.service';
import { Component, Input } from '@angular/core';
import { IItemList } from '../products.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent  {

  constructor(public productsService: ProductsService) {}

}

