interface Personas {
   nombre:string,
   apellido:string,
   edad:number,
   peso:number
}

var persona1: Personas = {
  nombre: "Paola",
  apellido:"Peréz",
  edad:23,
  peso:65
}

console.log(persona1.apellido)