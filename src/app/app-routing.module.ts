import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', component:HeaderComponent, children:[
    {path:'Home', component:GridSystemComponent},
    {path:'Clothes', component:GridSystemComponent},
    {path:'Phones', component:GridSystemComponent},
    {path:'Furnitures', component:GridSystemComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
