//angular modules
import { Component, OnInit } from '@angular/core';
import { ItemCount } from 'src/app/models/IItemCount/item-count';
// services
import { StaticDataService } from 'src/app/service/static-data/static-data.service';

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.scss']
})

export class ShoppingCartItemsComponent implements OnInit {

  //#region variables declaration

  itemArray: ItemCount[] = this.staticDataService.itemArr;

  price?: number = 0 || this.staticDataService.price;

  //#endregion

  //#region constructor

  constructor(private staticDataService: StaticDataService) { }

  //#endregion

  //#region oninit

  ngOnInit() {

  }

  //#endregion onint

  //#region ngDoCheck
  // ngOnChanges() { this.loadControls() }

  ngDoCheck() { this.loadControls() } //update price every time check

  //#endregion

  //#region loadControls

  loadControls() { this.updatePrice() }

  //#endregion

  //#region main action functions

  updatePrice() { //get Price from service 
    this.price = this.staticDataService.price
  }

  increaseCount(id: number) { //get increaseCount fun from service
    this.staticDataService.increaseCount(id);
  }

  decreaseCount(id: number) { //get decreaseCount fun from service
    this.staticDataService.decreaseCount(id);
  }

  removeItem(id: number) {  //get removeItem fun from service
    this.staticDataService.removeItem(id)
  }

  print(){
    console.log(this.staticDataService.itemsShow)
  }

  //#endregion
}
