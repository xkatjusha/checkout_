import { Component } from '@angular/core';
import { IItemList, ProductsService } from '../products.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent {
  numberofnumbers: number;
  productData;

  constructor(public productsService: ProductsService) {
    this.productsService.inputproduct = [];
    this.numberofnumbers = 0;
    this.productData = this.productsService.productList;
  }

  one() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("1");
    }
    this.id();
    this.compare();
  }

  two() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("2");
    }
    this.id();
    this.compare();
  }

  three() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("3");
    }
    this.id();
    this.compare();
  }

  four() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("4");
    }
    this.id();
    this.compare();
  }

  five() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("5");
    }
    this.id();
    this.compare();
  }

  six() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("6");
    }
    this.id();
    this.compare();
  }

  seven() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("7");
    }
    this.id();
    this.compare();
  }

  eight() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("8");
    }
    this.id();
    this.compare();
  }

  nine() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("9");
    }
    this.id();
    this.compare();
  }

  zero() {
    if (this.numberofnumbers <= 3) {
      this.numberofnumbers = this.numberofnumbers + 1;
      this.productsService.inputproduct.push("0");
    }
    this.id();
    this.compare();
  }

  erase(){
    console.log("löschen");
  }

  id() {
    this.productsService.idproduct = this.productsService.inputproduct.join('');
  }

  clear() {
    for (let i = 0; i < this.productsService.inputproduct.length; i++) {
      this.productsService.inputproduct.pop();
    }
    this.productsService.idproduct = "";
  }

  compare() {
    if (this.numberofnumbers === 4) {
      if (this.productsService.idproduct === this.productData.id) {
        let items: IItemList = {
          name: this.productData.name,
          price: this.productData.price,
        }
        this.productsService.itemList.push(items);
      }
      this.clear();
    }
  }

}
