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
for (var posicion in listadoDeUsuarios) {
    console.log(listadoDeUsuarios[posicion].nombre);
    console.log(listadoDeUsuarios[posicion].apellido);
}
