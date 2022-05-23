import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = ['Home', 'Clothes', 'Phones', 'Furnitures'];
  activeLink:any
  background: ThemePalette = undefined;
  
  constructor() { }

  ngOnInit(): void {
  }
  print(){
    console.log(this.activeLink)
  }

}
