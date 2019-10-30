/// <reference path="node_modules/@types/jquery/index.d.ts"/>
function MostrarMensaje() {
    $("#imgsrc").attr("src", "");
    var archivo = document.getElementById("foto");
    var mensaje = $("#mensaje").val();
    var formData = new FormData();
    formData.append("archivo", archivo.files[0]);
    formData.append("mensaje", mensaje);
    $.ajax({
        url: "./backend/test.php",
        type: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        async: true
    }).done(function (obj) {
        console.log(obj);
        $("#imgsrc").attr("src", obj.pathTemporal);
        $("#div_mensaje").html("mensaje: " + obj.mensaje + ", fecha: " + obj.fecha);
    });
}
