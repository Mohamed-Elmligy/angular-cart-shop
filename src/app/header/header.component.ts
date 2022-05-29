//angular modules
import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../service/static-data/static-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  //#region variables declaration

  links = ['Home', 'Clothes', 'Phones', 'Furnitures'];
  activeLink: any;
  numberOfItems?: number;

  //#endregion

  //#region constructor

  constructor(
    private staticDataService: StaticDataService
  ) { }

  //#endregion

  //#region onInit

  ngOnInit() { }

  //#endregion

  //#region ngDoCheck

  ngDoCheck() {
    this.loadControls()
  }

  //#endregion

  //#region loadControls

  loadControls() { 
    this.checkLength() 
  }

  //#endregion
  checkLength() {
    this.numberOfItems = this.staticDataService.itemArr.length;
    (this.staticDataService.itemArr?.length == 0) && (this.numberOfItems = undefined)
  }

  //#endregion
}

