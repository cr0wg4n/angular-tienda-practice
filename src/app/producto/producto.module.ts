import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { MaterialModule } from "../material/material.module";
import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductoService } from './producto.service';


@NgModule({
  imports: [
    CommonModule,MaterialModule,ProductoRoutingModule,FormsModule
  ],
  exports:[ProductoRoutingModule],
  declarations: [ProductoCreateComponent, ProductoEditComponent, 
    ProductoListComponent, ProductoItemComponent],
  providers:[
    ProductoService
  ]
})

export class ProductoModule { }
