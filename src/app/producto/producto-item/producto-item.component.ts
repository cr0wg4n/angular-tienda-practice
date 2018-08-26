import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  prod:Producto[];
  constructor(private productos:ProductoService) { }
  ngOnInit() {
   console.log(this.productos.getProductos().subscribe(responsePer=>this.prod=responsePer)); 
  }

}
