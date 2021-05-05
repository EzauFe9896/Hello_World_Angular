var alumnos = [];
alumnos.push({ nombre: "José", apellido: "Pineda" });
alumnos.push({ nombre: "Carmen", apellido: "Soza" });
alumnos.push({ nombre: "Welmer José", apellido: "Mendez" });
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
