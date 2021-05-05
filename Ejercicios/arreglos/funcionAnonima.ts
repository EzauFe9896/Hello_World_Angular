interface Alumno{
    nombre: string;
    apellido:string;
}

var alumnos: Alumno [] = []

alumnos.push({nombre:"José", apellido:"Pineda"});

alumnos.push({nombre:"Carmen", apellido:"Soza"});

alumnos.push({nombre:"Welmer José", apellido:"Mendez"});

alumnos.forEach((alumno) =>{
    console.log(alumno.nombre)
})