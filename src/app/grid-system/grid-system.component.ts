//angular modules
import { Component, Input, OnInit } from '@angular/core';
// interface 
import { Tile } from '../models/ITile/tile'

//services
import { StaticDataService } from '../service/static-data/static-data.service'
@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss']
})

export class GridSystemComponent implements OnInit {

  //#region variables declaration

  @Input() acveLink: any;

  itemsShow?: Tile[] = this.staticDataService.itemsShow; //array show item in screen & clothes is defualt option

  //#endregion

  //#region constructor

  constructor(
    private staticDataService: StaticDataService
  ) { }

  //#endregion

  //#region onInit

  ngOnInit() {

  }

  //#endregion

  //#region onChange

  ngOnChanges() {
    this.loadControls()
    this.staticDataService.updatePrice()
  }

  //#endregion

  //#region load controls

  loadControls() {
    this.changeArr()
  }

  //#endregion

  //#region main action 

  changeArr() { //change item on screen arr acording to current router 
    switch (this.acveLink) {
      case 'Home': //make item show = home arr
        this.itemsShow = this.staticDataService.home;
        this.staticDataService.itemsShow = this.staticDataService.home;
        break
      case 'Clothes': //make item show = clothes arr
        this.itemsShow = this.staticDataService.clothes;
        this.staticDataService.itemsShow = this.staticDataService.clothes;
        break
      case 'Phones': //make item show = phones arr
        this.itemsShow = this.staticDataService.phones;
        this.staticDataService.itemsShow = this.staticDataService.phones;
        break
      case 'Furnitures': //make item show = furnitures arr
        this.itemsShow = this.staticDataService.furnitures;
        this.staticDataService.itemsShow = this.staticDataService.furnitures;
        break
    }
  }

  //add item to shopping cart array
  additem(id: number, name: string, price: number, count: number) {
    this.staticDataService.additem(id, name, price, count)
  }

  //increase item in showArr
  increaseCount(id: number) { this.staticDataService.increaseCount(id); }

  //decrease item in itemArr
  decreaseCount(id: number) { this.staticDataService.decreaseCount(id) }

  //favorItem function

  favorItem(id: number, name: string, price: number, count: number) {
    this.staticDataService.favorItem(id, name, price, count)
    console.log(this.staticDataService.favorItemArr)
  }

  //#endregion
}
