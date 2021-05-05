var listadoDeUsuarios = [
    {
        nombre: 'Ana',
        apellido: 'Peréz'
    },
    {
        nombre: 'Ezau',
        apellido: 'Zúñiga'
    },
    {
        nombre: 'Francini Paola',
        apellido: 'Obregón'
    }
];
// for (let cantidadRepetir:number = 0; cantidadRepetir < listadoDeUsuarios.length; cantidadRepetir ++) {
//     console.log(listadoDeUsuarios[cantidadRepetir].apellido); 
// }
for (var _i = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _i < listadoDeUsuarios_1.length; _i++) {
    var usuario = listadoDeUsuarios_1[_i];
    console.log("Your Welcome: ", usuario.nombre);
    console.log("Nos alegra tenerte with us: ", usuario.apellido);
}
