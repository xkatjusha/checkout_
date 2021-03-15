import { Component, Input } from '@angular/core';
import { IItemList, ProductsService } from '../products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() itemList: IItemList[];
  @Input() item;


  constructor(public productService: ProductsService) {
    this.itemList=[];
   }

  delete(i){
    console.log("Geh endlich");
    this.itemList.splice(i, 1);
  }

}
