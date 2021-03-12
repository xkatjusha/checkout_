import { Component } from '@angular/core';
import { IItemList, ProductsService } from '../products.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
  productData;

  constructor(public productsService: ProductsService) {
    this.productsService.inputproduct = [];
    this.productData = this.productsService.productList;
  }

  one() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("1");
    }
    this.id();
    this.productsService.compare();
  }

  two() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("2");
    }
    this.id();
    this.productsService.compare();
  }

  three() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("3");
    }
    this.id();
    this.productsService.compare();
  }

  four() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("4");
    }
    this.id();
    this.productsService.compare();
  }

  five() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("5");
    }
    this.id();
    this.productsService.compare();
  }

  six() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("6");
    }
    this.id();
    this.productsService.compare();
  }

  seven() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("7");
    }
    this.id();
    this.productsService.compare();
  }

  eight() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("8");
    }
    this.id();
    this.productsService.compare();
  }

  nine() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("9");
    }
    this.id();
    this.productsService.compare();
  }

  zero() {
    if (this.productsService.numberofnumbers <= 3) {
      this.productsService.numberofnumbers = this.productsService.numberofnumbers + 1;
      this.productsService.inputproduct.push("0");
    }
    this.id();
    this.productsService.compare();
  }

  erase(){
    console.log("löschen");
  }

  id() {
    this.productsService.idproduct = this.productsService.inputproduct.join('');
  }

}
