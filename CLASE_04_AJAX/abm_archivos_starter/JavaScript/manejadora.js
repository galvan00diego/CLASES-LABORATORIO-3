window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "administracion.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("queHago=mostrarGrilla");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("divGrilla").innerHTML = xhttp.responseText;
        }
    };
};
