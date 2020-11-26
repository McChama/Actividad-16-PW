/* Obtener elementos del localstorage */
function ObtenerlocalStorage(){
    /* Variables de intercambio temporales */
    let lSCorreos = localStorage.getItem("Correos");
    let lSNombres = localStorage.getItem("Nombres");

    /* Sino hay elementos en el localStorage, crea un array */
    let Correos = lSCorreos ? JSON.parse(lSCorreos) : [];
    let Nombres = lSNombres ? JSON.parse(lSNombres) : [];
    
    return { Correos, Nombres }
}

/* Guargar arrays en el localStorage */
function GuardarlocalStorage(Correo, Nombre){
    let { Correos, Nombres } = ObtenerlocalStorage();
    Correos.push(Correo);
    Nombres.push(Nombre);
    
    localStorage.setItem("Nombres", JSON.stringify(Nombres));
    localStorage.setItem("Correos", JSON.stringify(Correos));
}

/* Guardar valor de inputs en los arrays */
function ObtenerTexto(){
    let Correo = $("#email").val();
    let Nombre = $("#nombre").val();
    
    return { Correo, Nombre }
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
        let { Correo, Nombre } = ObtenerTexto();
        GuardarlocalStorage(Correo, Nombre);
        LimpiarControles();
    });

    /* Boton limpiar */
    $("#boton-limpia").click(function(){LimpiarControles();});

    /* Boton ver */
    $("#boton-ver").click(function(){
        let { Correos, Nombres } = ObtenerlocalStorage();
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
