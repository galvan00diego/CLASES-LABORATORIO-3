function Enviar() {
    var nombre = document.getElementById("txtNombre").value;
    var edad = document.getElementById("txtEdad").value;
    alert("Hola " + nombre + ", tienes " + edad + " a\u00F1os");
    console.log("Hola " + nombre + ", tienes " + edad + " a\u00F1os");
    document.getElementById("divTxt").innerHTML = "Hola " + nombre + ", tienes " + edad + " a\u00F1os";
}
