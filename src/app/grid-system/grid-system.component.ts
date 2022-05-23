import { Component, Input, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  price: number;
  imgLink: any;
  description: string;
}

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss']
})

export class GridSystemComponent implements OnInit {

    @Input() acveLink:any;
    count:number = 0
  constructor() { }

  ngOnInit() {
    this.changeArr()
  }
  ngOnChanges(){
    this.changeArr()
  }

  discribtion: string = 'Deserunt esse sit dolor culpa commodo esse voluptate nostrud sunt occaecat.'

  clothes: Tile[] = [
    { text: 'T-shirt', cols: 1, rows: 1, color: 'lightblue', price: 100, imgLink: '../../assets/images/clothes/shirt.jpg', description:  this.discribtion},
    { text: 'Pant', cols: 1, rows: 1, color: 'lightgreen', price: 200, imgLink: '../../assets/images/clothes/pant.jpg' ,description: this.discribtion },
    { text: 'Gloves', cols: 1, rows: 1, color: 'lightpink', price: 500, imgLink: '../../assets/images/clothes/gloves.jpg',description: this.discribtion},
    { text: 'Suit', cols: 1, rows: 1, color: '#DDBDF1', price: 1000, imgLink: '../../assets/images/clothes/suit.jpg',description: this.discribtion},
  ];

  phones: Tile[] = [
    { text: 'Samsung S22', cols: 1, rows: 1, color: 'lightblue', price: 1000, imgLink: '../../assets/images/phones/s22.jpg' ,description: this.discribtion},
    { text: 'Iphone 13 pro max', cols: 1, rows: 1, color: 'lightgreen', price: 1500, imgLink: '../../assets/images/phones/iPhone-13-Pro-Max.jpg' ,description: this.discribtion},
    { text: 'Xiaomi Mi 10t Lite', cols: 1, rows: 1, color: 'lightpink', price: 300, imgLink:'../../assets/images/phones/mi10tlite.jpg' ,description: this.discribtion},
    { text: 'Samsung Flip', cols: 1, rows: 1, color: '#DDBDF1', price: 2000, imgLink: '../../assets/images/phones/Flip.jpg' ,description: this.discribtion},
  ];

  furnitures: Tile[] = [
    { text: 'Sofa', cols: 1, rows: 1, color: 'lightblue', price: 50, imgLink: '../../assets/images/furnitures/sofa.jpg' ,description: this.discribtion},
    { text: 'Bed', cols: 1, rows: 1, color: 'lightgreen', price: 75, imgLink:'../../assets/images/furnitures/bed.jpg'  ,description: this.discribtion},
    { text: 'Chair', cols: 1, rows: 1, color: 'lightpink', price: 20, imgLink: '../../assets/images/furnitures/chair.jpg' ,description: this.discribtion},
    { text: 'Door', cols: 1, rows: 1, color: '#DDBDF1', price: 80, imgLink: '../../assets/images/furnitures/door.jpg' ,description: this.discribtion},
  ];

  item?:Tile[]=this.clothes;
  title?:string;
  price?:number;
  img?:any;

  changeArr(){
    // if (this.acveLink === 'Home') this.item = this.phones
    // if (this.acveLink === 'Clothes') this.item = this.clothes
    // if (this.acveLink === 'Phones') this.item = this.phones
    // if (this.acveLink === 'Furnitures') this.item = this.furnitures
    
                 //--------- Or -----------------

     (this.acveLink === 'Home') && (this.item = this.clothes);
     (this.acveLink === 'Clothes') && (this.item = this.clothes);
     (this.acveLink === 'Phones') && (this.item = this.phones);
     (this.acveLink === 'Furnitures') && (this.item = this.furnitures);
  }

  addToShoppingCart(){
    this.count +=1;
    
  }

  addOneItem(){
    this.count += 1
  }

  removeOneItem(){
    this.count -= 1
  }

}
