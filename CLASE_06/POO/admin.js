function Login() {
    var xhttp = new XMLHttpRequest();
    var correo = document.getElementById("txtCorreo").value;
    var clave = document.getElementById("txtClave").value;
    xhttp.open("POST", "./backend/test_usuario.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    var parametro = "{\"correo\":\"" + correo + "\",\"clave\":\"" + clave + "\",\"caso\"=\"Login\"}";
    xhttp.send("param=" + parametro);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(JSON.parse(xhttp.responseText));
        }
    };
}
function Registrarse() {
    var xhttp = new XMLHttpRequest();
    var form = new FormData();
    // let nombre:string=(<HTMLInputElement>document.getElementById("txtNombre")).value;
    // let apellido:string=(<HTMLInputElement>document.getElementById("txtApellido")).value;
    // let correo:string=(<HTMLInputElement>document.getElementById("txtCorreo")).value;
    // let clave:string=(<HTMLInputElement>document.getElementById("txtClave")).value;
    // let perfil:string=(<HTMLInputElement>document.getElementById("txtPerfil")).value;
    form.append("nombre", document.getElementById("txtNombre").value);
    form.append("apellido", document.getElementById("txtApellido").value);
    form.append("correo", document.getElementById("txtCorreo").value);
    form.append("clave", document.getElementById("txtClave").value);
    form.append("perfil", document.getElementById("txtPerfil").value);
    var foto = document.getElementById("foto");
    form.append("foto", foto.files[0]);
    xhttp.open("POST", "./backend/adm_registro.php", true);
    xhttp.setRequestHeader("enctype", "multipart/form-data");
    //  let parametro:string=`{"nombre":"${nombre}","apellido":"${apellido}",
    //                          "correo":"${correo}","clave":"${clave}","perfil":"${perfil}"}`;   
    // xhttp.send(form+"&param="+parametro);
    xhttp.send(form);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log(JSON.parse(xhttp.responseText));
            console.log(xhttp.responseText);
        }
    };
}
