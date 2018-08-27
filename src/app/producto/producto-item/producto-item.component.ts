import { Component, OnInit,Input } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../models/producto.interface';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  
  @Input() prod:Producto;
  produc=[];
  constructor(private productos:ProductoService) { 
    this.productos.getProductos().subscribe(data =>{
      this.produc=data;
    });
  }
  
  ngOnInit() {
  }

}
