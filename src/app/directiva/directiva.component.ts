import { Component, OnInit } from '@angular/core';

interface Productos{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
  esImportante: boolean; //Esto se utiliza para la directiva ngClass
  textoGrande: boolean  //Esto se utiliza para la directiva ngClass
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

//Directiva ngFor
nombres:Array<string> = ["Ezau", "Francini", " Gregorio", " Haydee"];

pestana: string = 'perfil';

productos: Array<Productos> = [
{
  nombre: "Arroz",
  stock: 15,
  fabricante: 'Distribuidora San Luis S.A',
  fechaVence: new Date('04/15/2020'),
  esImportante: false,//Esto se utiliza para la directiva ngClass
  textoGrande: true//Esto se utiliza para la directiva ngClass
},
{
  nombre: "Maiz",
  stock: 25,
  fabricante: 'Distribuidora San Luis S.A',
  fechaVence: new Date('04/15/2020'),
  esImportante: true,//Esto se utiliza para la directiva ngClass
  textoGrande:false//Esto se utiliza para la directiva ngClass
},
{
  nombre: "Refrescos",
  stock: 200,
  fabricante: 'Coca-Cola',
  fechaVence: new Date('01/06/2021'),
  esImportante: false,//Esto se utiliza para la directiva ngClass
  textoGrande: false//Esto se utiliza para la directiva ngClass
}

];



 // Directiva ngIf
cargando: boolean = true;

alternar(){

  this.cargando = !this.cargando;
}

  constructor() { }

  //Esto es de la directiva ngIf
  ngOnInit(){
    setTimeout(()=>{
     this.cargando = false;
  }, 5000);
  
}

cambiarPestana(pestana: string)
{
  this.pestana = pestana;
}

// Directiva ngClass 

mostrarCuadrado: boolean = false;
alternarFondo()
{
  this.mostrarCuadrado = !this.mostrarCuadrado
}



}