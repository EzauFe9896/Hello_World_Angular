// Para comparar operaciones si son iguale
// && nos devueble un verdero cuando ambas expresiones son verdaderas
// || nos devuelve un verdadero si cualquier expresiion es verdadera
//!= para comparar operaciones distintas

var esNuevo: boolean = false;
var deseaImprimir: boolean = true;

var juan = "juan";
var juan2 = "Juan";
var listaNumero1: number = 100;
var listaNumero2: number = 150;

var sonNombresIguales:boolean = (juan == juan2)
var aceptaDescuentos:boolean = (15 + 18  == 33)
var sonAmbosVerdaderos:boolean = sonNombresIguales || aceptaDescuentos
var listasIguales: boolean = (listaNumero1 != listaNumero2)

console.log("Acepta descuentos: ", aceptaDescuentos)
console.log("Son nombres iguales: ", sonNombresIguales)
console.log("Son ambos verdaderos ", sonAmbosVerdaderos)
console.log("Las listas son iguales: ", listasIguales)

var esAlgunaVerdadera:boolean = sonNombresIguales || aceptaDescuentos ||  sonAmbosVerdaderos || listasIguales
console.log("Es alguna verdadera:", esAlgunaVerdadera)

var sonTodasVerdaderas:boolean = sonNombresIguales && aceptaDescuentos &&  sonAmbosVerdaderos && listasIguales
console.log("Son todas verdaderas:", sonTodasVerdaderas)