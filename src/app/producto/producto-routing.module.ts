import { NgModule } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { ProductoCreateComponent } from "./producto-create/producto-create.component";
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { CommonModule } from '@angular/common';

const routes:Routes=[
  {
    path:'create',
    component:ProductoCreateComponent
  },{
    path:'edit',
    component:ProductoEditComponent
  },{
    path:'item',
    component:ProductoItemComponent
  },{
    path:'list',
    component:ProductoListComponent
  }
];

@NgModule({
  imports: [
  CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class ProductoRoutingModule { }
