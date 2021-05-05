// Para comparar operaciones si son iguale
// && nos devueble un verdero cuando ambas expresiones son verdaderas
// || nos devuelve un verdadero si cualquier expresiion es verdadera
//!= para comparar operaciones distintas
var esNuevo = false;
var deseaImprimir = true;
var juan = "juan";
var juan2 = "Juan";
var listaNumero1 = 100;
var listaNumero2 = 150;
var sonNombresIguales = (juan == juan2);
var aceptaDescuentos = (15 + 18 == 33);
var sonAmbosVerdaderos = sonNombresIguales || aceptaDescuentos;
var listasIguales = (listaNumero1 != listaNumero2);
console.log("Acepta descuentos: ", aceptaDescuentos);
console.log("Son nombres iguales: ", sonNombresIguales);
console.log("Son ambos verdaderos ", sonAmbosVerdaderos);
console.log("Las listas son iguales: ", listasIguales);
var esAlgunaVerdadera = sonNombresIguales || aceptaDescuentos || sonAmbosVerdaderos || listasIguales;
console.log("Es alguna verdadera:", esAlgunaVerdadera);
var sonTodasVerdaderas = sonNombresIguales && aceptaDescuentos && sonAmbosVerdaderos && listasIguales;
console.log("Son todas verdaderas:", sonTodasVerdaderas);
