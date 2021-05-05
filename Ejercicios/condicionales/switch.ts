var cantidadDeNumerosEnviados:number = 22;

switch(cantidadDeNumerosEnviados)
{
    case 25:{
        console.log("Son veinte y cinco")
        break;
    }
    case 20:{
        console.log("Son veinte")
        break;
    }
    case 15:{
        console.log("Son quince")
        break;
    }
    default :{
        console.log("No se cumplio ninguna expresion")
    }
}

/* 1 Menu de canciones
2 Menu de Albunes
3 Menu de Perfil */

//Variables enumerables
enum tipoMenu{
canciones=1,
albunes,
perfiles
}

var menu: number = 3

switch(menu)
{
    case tipoMenu.canciones:{
        console.log("Accede a las canciones")
        break;
    }
    case tipoMenu.albunes:{
        console.log("Accede a los albums")
        break;
    }
    case tipoMenu.perfiles:{
        console.log("Accede al perfil")
        break;
    }
    default:{
        console.log("No existe ningun menu")
    }
}
