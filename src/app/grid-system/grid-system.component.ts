import { Component, Input, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  price: number;
  imgLink: any;
  description: string;
  id:number;
  count:number
}

export interface ItemCount {
  itemName: string;
  itemID:number;
  itemPrice: number;
  itemCount:number;
}

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss']
})

export class GridSystemComponent implements OnInit {

    @Input() acveLink:any;
    itemArr:ItemCount[]=[];
  constructor() { }

  ngOnInit() {
    this.changeArr()
  }
  ngOnChanges(){
    this.changeArr()
  }

  discribtion: string = 'Deserunt esse sit dolor culpa commodo esse voluptate nostrud sunt occaecat.'

  clothes: Tile[] = [
    { id: 1 ,text: 'T-shirt', cols: 1, rows: 1, color: 'lightblue', price: 100, imgLink: '../../assets/images/clothes/shirt.jpg', description:  this.discribtion, count:0},
    { id: 2 , text: 'Pant', cols: 1, rows: 1, color: 'lightgreen', price: 200, imgLink: '../../assets/images/clothes/pant.jpg' ,description: this.discribtion, count:0 },
    { id: 3 ,text: 'Gloves', cols: 1, rows: 1, color: 'lightpink', price: 500, imgLink: '../../assets/images/clothes/gloves.jpg',description: this.discribtion, count:0},
    { id: 4 ,text: 'Suit', cols: 1, rows: 1, color: '#DDBDF1', price: 1000, imgLink: '../../assets/images/clothes/suit.jpg',description: this.discribtion, count:0},
  ];

  phones: Tile[] = [
    { id: 5 ,text: 'Samsung S22', cols: 1, rows: 1, color: 'lightblue', price: 1000, imgLink: '../../assets/images/phones/s22.jpg' ,description: this.discribtion, count:0},
    { id: 6 ,text: 'Iphone 13 pro max', cols: 1, rows: 1, color: 'lightgreen', price: 1500, imgLink: '../../assets/images/phones/iPhone-13-Pro-Max.jpg' ,description: this.discribtion, count:0},
    { id: 7 ,text: 'Xiaomi Mi 10t Lite', cols: 1, rows: 1, color: 'lightpink', price: 300, imgLink:'../../assets/images/phones/mi10tlite.jpg' ,description: this.discribtion, count:0},
    { id: 8 ,text: 'Samsung Flip', cols: 1, rows: 1, color: '#DDBDF1', price: 2000, imgLink: '../../assets/images/phones/Flip.jpg' ,description: this.discribtion, count:0},
  ];

  furnitures: Tile[] = [
    { id: 9 ,text: 'Sofa', cols: 1, rows: 1, color: 'lightblue', price: 50, imgLink: '../../assets/images/furnitures/sofa.jpg' ,description: this.discribtion, count:0},
    { id: 10 ,text: 'Bed', cols: 1, rows: 1, color: 'lightgreen', price: 75, imgLink:'../../assets/images/furnitures/bed.jpg'  ,description: this.discribtion, count:0},
    { id: 11 ,text: 'Chair', cols: 1, rows: 1, color: 'lightpink', price: 20, imgLink: '../../assets/images/furnitures/chair.jpg' ,description: this.discribtion, count:0},
    { id: 12 ,text: 'Door', cols: 1, rows: 1, color: '#DDBDF1', price: 80, imgLink: '../../assets/images/furnitures/door.jpg' ,description: this.discribtion, count:0},
  ];
  //=================================
  itemsShow?:Tile[]=this.clothes;
  //=================================
 
  changeArr(){
    // if (this.acveLink === 'Home') this.item = this.phones
    // if (this.acveLink === 'Clothes') this.item = this.clothes
    // if (this.acveLink === 'Phones') this.item = this.phones
    // if (this.acveLink === 'Furnitures') this.item = this.furnitures
    
                 //--------- Or -----------------

     (this.acveLink === 'Home') && (this.itemsShow = this.clothes);
     (this.acveLink === 'Clothes') && (this.itemsShow = this.clothes);
     (this.acveLink === 'Phones') && (this.itemsShow = this.phones);
     (this.acveLink === 'Furnitures') && (this.itemsShow = this.furnitures);
  }

  addToShoppingCart(id:number, name:string, price:number, count:number){
    count +=1
   let item ={
    itemName: name,
    itemID:id,
    itemPrice: price,
    itemCount:count
   }
   console.log(item)
  this.itemArr?.push(item)
  console.log(this.itemArr)
  let el = this.itemsShow?.find(el=>el.id==id)
  el!.count = count
  console.log(el)
  }

  addOneItem(id:number){
   let item = this.itemArr?.find(el=> el.itemID == id);
   item!.itemCount += 1;
   let el = this.itemsShow?.find(el=>el.id==id)
   el!.count +=1;
  }

  removeOneItem(id:number){
    let item = this.itemArr?.find(el=> el.itemID == id);
    item!.itemCount -= 1;
    let el = this.itemsShow?.find(el=>el.id==id)
    el!.count -=1;
  
  }

}
