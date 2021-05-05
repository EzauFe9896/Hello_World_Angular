//Incio de la clase
class Alumno{
   private nombre: string;
   private apellido: string;
    private peso: number;

    private mostrarMensaje(){

        console.log("Hola",this.nombre +" "+ this.apellido);

    }

    constructor(){

        this.nombre = 'Paola';
        this.apellido = 'Peréz'
        this.peso = 65;
        this.mostrarMensaje();
    }
    

    asignar(nombreParametro: string, apellidoParametro: string, pesoParametro: number){

       this.nombre = nombreParametro;
       this.apellido = apellidoParametro;
       this.peso = pesoParametro;

    //    this.mostrarMensaje();
    }
}
//Fin de la clase

var alumno1: Alumno = new(Alumno);
alumno1.asignar("Desiree","Mendoza",65);

var alumno2: Alumno = new(Alumno);
alumno2.asignar('Francini','Obregón',65);


