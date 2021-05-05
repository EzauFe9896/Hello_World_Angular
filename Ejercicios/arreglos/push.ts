// var nombres: string[] = ["Francini", "Desiree", "Ezau", "Mauricio"];

// console.log(nombres)

// nombres.push("Andreé");

// console.log(nombres)

// var numeros: number[] = [29,35,18,67];

// numeros.push(34);
// console.log(numeros)

interface Alumno{
    nombre: string;
    apellido: string;
}

var alumnos: Alumno[] = [];

// alumnos.push({nombre:"Marcos", apellido:"Morera"})

var ana: Alumno = { 
    nombre: "Ana",
    apellido: "Mayorga"
}

var Marco: Alumno ={
nombre: "Marco",
apellido:"Morera"
}
alumnos.push(Marco)
alumnos.push(ana)


console.log(alumnos)