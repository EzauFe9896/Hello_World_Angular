import { Component, OnInit } from '@angular/core';


class Alumno{
  nombre: string;
  apellido: string;
  exelencia: Boolean

  constructor(){
    this.nombre = this.nombre;
  this.apellido = this.apellido;
  this.exelencia = this.exelencia;
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})

export class EjemploComponent implements OnInit {
alumno: Alumno = new Alumno();
listadoAlumnos: Array<Alumno> = new Array<Alumno>();

  constructor() { }

  ngOnInit(): void {
  }

  agregar()
  {
    this.listadoAlumnos.push(
      {
        nombre: this.alumno.nombre, 
        apellido: this.alumno.apellido,
        exelencia: this.alumno.exelencia
      })
      nombre: this.alumno.nombre= '';
      nombre: this.alumno.apellido='';
      nombre: this.alumno.exelencia= false;

      console.log(this.listadoAlumnos)
  }

}

