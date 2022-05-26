import { ShoppingCartItemsComponent } from './shopping-cart-items/shopping-cart-items/shopping-cart-items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      { path: '', component: GridSystemComponent },
      { path: 'Home', component: GridSystemComponent },
      { path: 'Clothes', component: GridSystemComponent },
      { path: 'Phones', component: GridSystemComponent },
      { path: 'Furnitures', component: GridSystemComponent },
    ]
  },
  { path: 'shopping/cart', component: ShoppingCartItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
