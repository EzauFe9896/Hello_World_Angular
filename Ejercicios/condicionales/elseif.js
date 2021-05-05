var cantidadSolicitada = 10;
if (cantidadSolicitada > 25) {
    console.log("Se aplica descuento maximo");
}
else if (cantidadSolicitada >= 15 && cantidadSolicitada <= 20) {
    console.log("Se le aplica un descuento a mitad de precio");
}
else {
    console.log("No se le aplica descuento");
}
