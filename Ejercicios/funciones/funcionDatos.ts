function multiplicar(numero1: number, numero2: number) : number{
  var total = numero1 * numero2;
  return total;

}
var numeroResultado: number = 0;
numeroResultado = multiplicar(5,10);

console.log(numeroResultado);


function calculapromedio(nota1:number, nota2:number, nota3:number) : number{

    var total: number = (nota1 + nota2 + nota3) / 3;
    return total;

}

var promedio: number = 0;
 promedio = calculapromedio(65,75,90);
 console.log(promedio)