import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo>= new Array<Articulo>();

  constructor(private ruta: Router) { }

  ngOnInit(){

    this.articulos.push(
      {
        nombre:'Celular Táctil', 
        descripcion:'Samsung Galaxy S10 con 2 años de garantia', 
        stock: 20,
        precio: 80000,
        precioMayorista: 75000
      },
      {
        nombre:'Laptop Hp G 340', 
        descripcion:' Con windows  10 Home, core 3, 64-GB memoria RAM', 
        stock: 10,
        precio: 350000,
        precioMayorista: 325000
      },
      {
        nombre:'Televisor 32 pulgadas', 
        descripcion:'Pantalla Led Sound Round', 
        stock: 25,
        precio: 140000,
        precioMayorista: 132000
      }
    )
  }

  pasarParametro(articuloRecibido: Articulo){
  this.ruta.navigate (['articuloDetalle', {articulo: JSON.stringify(articuloRecibido) }])
 }

}
