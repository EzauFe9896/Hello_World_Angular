var cantidadDeNumerosEnviados = 22;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log("Son veinte y cinco");
        break;
    }
    case 20: {
        console.log("Son veinte");
        break;
    }
    case 15: {
        console.log("Son quince");
        break;
    }
    default: {
        console.log("No se cumplio ninguna expresion");
    }
}
/* 1 Menu de canciones
2 Menu de Albunes
3 Menu de Perfil */
//Variables enumerables
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albunes"] = 2] = "albunes";
    tipoMenu[tipoMenu["perfiles"] = 3] = "perfiles";
})(tipoMenu || (tipoMenu = {}));
var menu = 3;
switch (menu) {
    case tipoMenu.canciones: {
        console.log("Accede a las canciones");
        break;
    }
    case tipoMenu.albunes: {
        console.log("Accede a los albums");
        break;
    }
    case tipoMenu.perfiles: {
        console.log("Accede al perfil");
        break;
    }
    default: {
        console.log("No existe ningun menu");
    }
}
