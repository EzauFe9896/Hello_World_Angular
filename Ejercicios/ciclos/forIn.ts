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

for(let posicion in listadoDeUsuarios)
{
    console.log(listadoDeUsuarios[posicion].nombre)
    console.log(listadoDeUsuarios[posicion].apellido)

}