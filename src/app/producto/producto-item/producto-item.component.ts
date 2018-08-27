import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  produc=[];
  constructor(private productos:ProductoService) { 
    this.productos.getProductos().subscribe(data =>{
      this.produc=data;
    });
  }
  
  ngOnInit() {
  }

}
