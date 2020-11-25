/* Obtener elementos del localstorage */
let Nombres = [localStorage.getItem("Nombres")];
let Correos = [localStorage.getItem("Correos")];

function ObtenerTexto(){
    const txtNombre = $("#nombre").val();
    const txtCorreo = $("#email").val();

    Nombres.push(txtNombre);
    Correos.push(txtCorreo);
}

function GuardarlocalStorage(){
    localStorage.setItem("Nombres", Nombres);
    localStorage.setItem("Correos", Correos);
}
function LimpiarControles(){
    $("#nombre").val("");
    $("#email").val("");
}

$(document).ready(function(){
    $("#boton-guardar").click(function(){
        ObtenerTexto();
        GuardarlocalStorage();
        LimpiarControles();
    });

});