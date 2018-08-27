import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Producto } from './models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string="http://cursoangular.hosting.cs.umss.edu.bo/api/productos";
  
  constructor(private http: HttpClient) {}
  
  getProductos(){
    return this.http.get<Producto[]>(this.url);
  }
}
