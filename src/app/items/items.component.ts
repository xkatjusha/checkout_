import { Component, Input } from '@angular/core';
import { IItemList, ProductsService } from '../products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() item;


  constructor(public productService: ProductsService) {
    this.productService.itemList=[];
   }

  delete(i: number){
    console.log(this.productService.itemList);
    console.log("Geh endlich", i);
    console.log(i, this.productService.itemList);
    this.productService.itemList.splice(i, 1);
  }

}
