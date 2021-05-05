interface Usuario{
    nombre:string;
    apellido:string;
}

var listadoDeUsuarios: Array<Usuario> = [
    {
    nombre:'Ana',
    apellido:'Peréz'
},
{
    nombre:'Ezau',
    apellido:'Zúñiga'
},
{
    nombre:'Francini Paola',
    apellido:'Obregón'
}]

// for (let cantidadRepetir:number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++) {
//     console.log(listadoDeUsuarios[cantidadRepetir].apellido); 
// }

for (let usuario of listadoDeUsuarios) 
{
    console.log("Your Welcome: ", usuario.nombre);
    console.log("Nos alegra tenerte with us: ",usuario.apellido)

}