import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IPorductList[];
  idproduct: string;
  itemList: IItemList[];
  numberofnumbers: number;
  currentprice: number;


  constructor() {
    this.currentprice = 0;
    this.idproduct = "";
    this.itemList = [];
    this.numberofnumbers = 0;
    let product1 = {
      id: "4578", name: "apple", price: 0.59
    }
    let product2 = {
      id: "7851", name: "yogurt nature", price: 1.09
    }
    let product3 = {
      id: "1010", name: "bacon", price: 2.22
    }
    let product4 = {
      id: "2021", name: "cherry 500g", price: 2.87
    }
    let product5 = {
      id: "0022", name: "water 1.5l", price: 0.29
    }
    let product6 = {
      id: "2504", name: "water 1l", price: 1.49
    }
    let product7 = {
      id: "2004", name: "cheese gouda", price: 4.54
    }
    let product8 = {
      id: "1999", name: "ayran", price: 0.59
    }
    let product9 = {
      id: "0203", name: "blueberries", price: 1.00
    }
    let product10 = {
      id: "0000", name: "deposit", price: -(0.25)
    }

    this.productList = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
  }

  clear() {
    this.idproduct = "";
    this.numberofnumbers = 0;
  }

  compare() {
    if (this.numberofnumbers === 4) {
      for (let i = 0; i < this.productList.length; i++) {
        if (this.idproduct === this.productList[i].id) {
          let items: IItemList = {
            name: this.productList[i].name,
            price: this.productList[i].price,
          }
          this.itemList.push(items);
          this.currentprice = this.currentprice + this.productList[i].price;
        }
      }
      this.clear();
    }
  }

 

}

export interface IPorductList {
  id: string;
  name: string;
  price: number;
}

export interface IItemList {
  name: string;
  price: number;
}
