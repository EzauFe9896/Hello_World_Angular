interface Alumnos{
    nombre:string;
    edad:number;
}

var listadoDeCarros: Array<string> = ["Toyota","Nissan","Mercedes","Zusuki"];
var listadoDeNumeros: Array<number> = [ 21,25,18,450,200];

var listadoDeAlumnos: Array<Alumnos> =[
    {
        nombre:"Desiree",
        edad:17
    },
    {
        nombre:"Gregorio",
        edad:45
    },
    {
        nombre:"José",
        edad:25
    }

];

console.log(listadoDeAlumnos[2].nombre)
