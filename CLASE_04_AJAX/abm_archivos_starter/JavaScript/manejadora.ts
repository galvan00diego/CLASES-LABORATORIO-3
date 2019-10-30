window.onload=function (){
    /* verificacion.php - verificar -*/
let xhttp:XMLHttpRequest=new XMLHttpRequest();

xhttp.open("POST","administracion.php",true);
xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("queHago=mostrarGrilla");

    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200 )
        {
            (<HTMLDivElement>document.getElementById("divGrilla")).innerHTML=xhttp.responseText;
            
        }
    }
}