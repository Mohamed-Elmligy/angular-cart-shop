//angular modules
import { Injectable } from '@angular/core';
//interface
import { Tile } from '../../models/ITile/tile'
import { ItemCount } from '../../models/IItemCount/item-count'

@Injectable({
  providedIn: 'root'
})

export class StaticDataService {

  //#region variables declaration

  itemArr: ItemCount[] = [];

  price?: number = 0;

  discribtion: string = 'Deserunt esse sit dolor culpa commodo esse voluptate nostrud sunt occaecat.';

  //#endregion

  //#region arrayes

  clothes: Tile[] = [
    { id: 1, text: 'T-shirt', cols: 1, rows: 1, color: 'lightblue', price: 100, imgLink: '../../assets/images/clothes/shirt.jpg', description: this.discribtion, count: 0 },
    { id: 2, text: 'Pant', cols: 1, rows: 1, color: 'lightgreen', price: 200, imgLink: '../../assets/images/clothes/pant.jpg', description: this.discribtion, count: 0 },
    { id: 3, text: 'Gloves', cols: 1, rows: 1, color: 'lightpink', price: 500, imgLink: '../../assets/images/clothes/gloves.jpg', description: this.discribtion, count: 0 },
    { id: 4, text: 'Suit', cols: 1, rows: 1, color: '#DDBDF1', price: 1000, imgLink: '../../assets/images/clothes/suit.jpg', description: this.discribtion, count: 0 },
  ];

  phones: Tile[] = [
    { id: 5, text: 'Samsung S22', cols: 1, rows: 1, color: 'lightblue', price: 1000, imgLink: '../../assets/images/phones/s22.jpg', description: this.discribtion, count: 0 },
    { id: 6, text: 'Iphone 13 pro max', cols: 1, rows: 1, color: 'lightgreen', price: 1500, imgLink: '../../assets/images/phones/iPhone-13-Pro-Max.jpg', description: this.discribtion, count: 0 },
    { id: 7, text: 'Xiaomi Mi 10t Lite', cols: 1, rows: 1, color: 'lightpink', price: 300, imgLink: '../../assets/images/phones/mi10tlite.jpg', description: this.discribtion, count: 0 },
    { id: 8, text: 'Samsung Flip', cols: 1, rows: 1, color: '#DDBDF1', price: 2000, imgLink: '../../assets/images/phones/Flip.jpg', description: this.discribtion, count: 0 },
  ];

  furnitures: Tile[] = [
    { id: 9, text: 'Sofa', cols: 1, rows: 1, color: 'lightblue', price: 50, imgLink: '../../assets/images/furnitures/sofa.jpg', description: this.discribtion, count: 0 },
    { id: 10, text: 'Bed', cols: 1, rows: 1, color: 'lightgreen', price: 75, imgLink: '../../assets/images/furnitures/bed.jpg', description: this.discribtion, count: 0 },
    { id: 11, text: 'Chair', cols: 1, rows: 1, color: 'lightpink', price: 20, imgLink: '../../assets/images/furnitures/chair.jpg', description: this.discribtion, count: 0 },
    { id: 12, text: 'Door', cols: 1, rows: 1, color: '#DDBDF1', price: 80, imgLink: '../../assets/images/furnitures/door.jpg', description: this.discribtion, count: 0 },
  ];

  home: Tile[] = [
    this.furnitures[2],
    this.clothes[0],
    this.furnitures[0],
    this.phones[3]
  ];

  itemsShow?: Tile[] = this.home;

  favorItemArr?: ItemCount[] = [];
  //#endregion

  //#region constructor

  constructor() { }

  //#endregion

  //#region main action function

  //fun used to update the price every time used
  updatePrice() {
    this.price = 0;
    this.itemArr.forEach(el => this.price! += el.itemCount * el.itemPrice)
  };

  additem(id: number, name: string, price: number, count: number){
    count += 1
    let item = {
      itemName: name,
      itemID: id,
      itemPrice: price,
      itemCount: count
    }
    this.itemArr?.push(item)//send that obj to item arr
    this.updatePrice()
    this.itemsShow?.find(el=> (el.id == id) && (el.count = count))
  }
  //increase count in item arr and item show
  increaseCount(id: number) {
    //increase item count in itemArr
    this.itemArr?.find(el => (el.itemID == id) && (el.itemCount += 1));
    //add item from show arr
    this.itemsShow?.find(el => (el.id == id) && (el.count += 1));
    //update price
    this.updatePrice()
  };

  //decrease count in item arr and item show
  decreaseCount(id: number) {
    this.itemArr?.find(el => (el.itemID == id) && //check if itemId in itemArr == id sended
      (el.itemCount != 0) && (el.itemCount -= 1)) &&
      this.updatePrice() //checl if item count in itemArr != 0 so itemCount decrease
      this.itemsShow?.find(el => (el.id == id) &&  // then check if Id in itemShow == id sended
        (el.count -= 1)); // decrease count in item show and update price
    //remove item from item arr & show arr
    this.itemArr?.find((el) => (el.itemID == id) && (el.itemCount == 0) && this.removeItem(id));
  };

  removeItem(id: number) {
    //remove item if count == 0
    this.itemArr.filter((el, indx) => { (el.itemID == id) && (this.itemArr.splice(indx, 1)) })
    //add item from show arr
    this.itemsShow?.filter((el) => { (el.id == id) && (el.count = 0) })
    this.home?.filter((el) => { (el.id == id) && (el.count = 0) })
    this.clothes?.filter((el) => { (el.id == id) && (el.count = 0) })
    this.furnitures?.filter((el) => { (el.id == id) && (el.count = 0) })
    this.phones?.filter((el) => { (el.id == id) && (el.count = 0) })
    //update price
    this.updatePrice()
  };


  favorItem(id: number, name: string, price: number, count: number){
    let item = {
      itemName: name,
      itemID: id,
      itemPrice: price,
      itemCount: count
    }
    this.favorItemArr?.find((el,indx)=> (el.itemID == id)? this.favorItemArr?.splice(indx, 1) : this.favorItemArr?.push(item));
  };
  //#endregion
}
