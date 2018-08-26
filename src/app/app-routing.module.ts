import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './layout/home/home.component';
import { CommonModule } from '@angular/common';


const routeApp:Routes=[
{
  path:"home",
  component:HomeComponent
},
{
  path:'producto',
  loadChildren:'src/app/producto/producto.module#ProductoModule'
}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routeApp)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
