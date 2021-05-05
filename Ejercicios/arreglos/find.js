// interface Alumno{
//     alumnoID: number;
//     nombre: string;
//     apellido:string;
// }
// var alumnos: Alumno [] = []
// alumnos.push({alumnoID:1, nombre:"José", apellido:"Pineda"});
// alumnos.push({alumnoID:2, nombre:"Carmen", apellido:"Soza"});
// alumnos.push({alumnoID:3, nombre:"Welmer José", apellido:"Mendez"});
// var alumnoEncontrado = alumnos.((alumno)=>{
//     return alumno.nombre.includes("en")
// })
// console.log(alumnoEncontrado)
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) { return element > 10; });
console.log(found);
// expected output: 12
