import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos', //Primer Componente
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  // Interpolacion
nombre: string = "Gregorio"
apellido: string = "Peréz"

persona: any = {
  nombre:"Haydee",
  apellido: "Mendoza",
  edad: 48

}

// Property Binding
imagen: string = 'https://pbs.twimg.com/profile_images/1267411746207272961/EwUprc8e_400x400.jpg'

inputNuevo: string ="¡CALL OF DUTY-AWESOME!"

correo: string = 'joseuaze@gmail.com'
password: string = '12345'

  constructor() { }

  ngOnInit(): void {
  }

ingresar(evento)
{

  //Evento Keydown
if(evento.key == "Enter"){

  console.log("Ingresando al sistema")
}
  // console.log(this.correo)
  // console.log(this.password)
}

// evento doble click  
llamarAlert(){
          alert("Ha hecho doble click")
}

// evento ngmodelChange
escribirModelo(){
  console.log(this.password)
}

escribirCorreo(){
this.password = this.correo;
  console.log(this.correo)
  console.log(this.password)
}

//evento input
escribir(valor:string){
  console.log(valor)
}

//evento Focus
colorFondo(evento)
{
  evento.srcElement.style.background = "blue";
  evento.srcElement.style.width = "200px"
  // console.log(evento)
}

//evento MouseEnter
cambiarTamano(evento)
{
  evento.srcElement.style.width = "200px";
  evento.srcElement.style.heigth = "100px";
  evento.srcElement.style.border = "2px solid yellow";
}
 
//Evento MouseLeave
incrementarTamano(evento)
{
  evento.srcElement.style.width = "600px";
  evento.srcElement.style.heigth = "300px";
  evento.srcElement.style.border = "3px solid red";
}

}
//Fin de la clase

