//Incio de la clase
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = 'Paola';
        this.apellido = 'Peréz';
        this.peso = 65;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola", this.nombre + " " + this.apellido);
    };
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        //    this.mostrarMensaje();
    };
    return Alumno;
}());
//Fin de la clase
var alumno1 = new (Alumno);
alumno1.asignar("Desiree", "Mendoza", 65);
var alumno2 = new (Alumno);
alumno2.asignar('Francini', 'Obregón', 65);
