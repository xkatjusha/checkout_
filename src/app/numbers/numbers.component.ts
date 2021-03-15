import { Component } from '@angular/core';
import { IItemList, ProductsService } from '../products.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {

  constructor(public productsService: ProductsService) {
  }

  numbers(number){
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.idproduct=this.productsService.idproduct + number;
    }
    this.productsService.compare();
  }

  erase(){
    this.productsService.idproduct=this.productsService.idproduct.substr(0,this.productsService.idproduct.length-1);
    this.productsService.numberofnumbers = this.productsService.numberofnumbers - 1;
  }


}
