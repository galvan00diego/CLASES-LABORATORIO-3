if (localStorage.getItem("Empleados") == null) {
    localStorage.setItem("Empleados", "Juan-123,rosa-456,carlos-666");
}
function Loguear() {
    var nombre = document.getElementById("txtNombre").value;
    var legajo = document.getElementById("txtLegajo").value;
    var stremp = localStorage.getItem("Empleados");
    var empleados = stremp.split(",");
    var empleadosT = [""];
    for (var index = 0; index < empleados.length; index++) {
        if ((nombre + "-" + legajo) == empleados[index]) {
            console.log("Bienvenido " + nombre + ", ingresaste correctamente");
            alert("Bienvenido " + nombre + ", ingresaste correctamente");
            window.location.href = "principal.html";
            break;
        }
        else {
            console.log(nombre + " no estas registrado, registrate!!");
            alert(nombre + " no estas registrado, registrate!!");
            window.location.href = ("Registro.html");
            break;
        }
    }
}
