let Nombres;
let Correos;

/* Obtener elementos del localstorage */
function ObtenerlocalStorage(){
    /* Variables de intercambio temporales */
    let lSNombres = localStorage.getItem("Nombres");
    let lSCorreos = localStorage.getItem("Correos");

    /* Sino hay elementos en el localStorage, crea un array */
    Nombres = lSNombres ? JSON.parse(lSNombres) : [];
    Correos = lSCorreos ? JSON.parse(lSCorreos) : [];
}

/* Guargar arrays en el localStorage */
function GuardarlocalStorage(){
    localStorage.setItem("Nombres", JSON.stringify(Nombres));
    localStorage.setItem("Correos", JSON.stringify(Correos));
}

/* Guardar valor de inputs en los arrays */
function ObtenerTexto(){
    Nombres.push($("#nombre").val());
    Correos.push($("#email").val());
}

/* Limpiar controles */
function LimpiarControles(){
    $("#nombre").val("");
    $("#email").val("");
}

/* Evitar duplicado de los elementos de la tabla */
function LimpiarTabla(){$("#salida tr td").remove();}

$(document).ready(function(){
    /* Boton guardar */
    $("#boton-guardar").click(function(){
        ObtenerlocalStorage();
        ObtenerTexto();
        GuardarlocalStorage();
        LimpiarControles();
    });

    /* Boton limpiar */
    $("#boton-limpia").click(function(){LimpiarControles();});

    /* Boton ver */
    $("#boton-ver").click(function(){
        ObtenerlocalStorage();
        /* Limpiar tabla */
        LimpiarTabla();

        /* Mostrar contenido utilizando un solo forEach */
        Nombres.forEach((Nombre, i) => {
            let Correo = Correos[i];
            $("#salida").append("<tr><td>"+Nombre+"</td><td>"+Correo+"</td></tr>");
        });
    });

    $("#boton-lS").click(function(){
        localStorage.clear();
        LimpiarTabla();
    })
});