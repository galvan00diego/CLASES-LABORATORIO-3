function Test():void{
    var xhttp:XMLHttpRequest=new XMLHttpRequest();

    xhttp.open("GET","backend/test.php",true);
    xhttp.send();

    //console.log(`xhttp.status= ${xhttp.status}, xhttp.readyState =${xhttp.readyState}`);
    //console.log(xhttp.responseText);
    xhttp.onreadystatechange=function(){
    if(xhttp.readyState==4 && xhttp.status==200 )
    {
        alert(xhttp.responseText);
    }
}
}

function Param():void
{
    var xhttp:XMLHttpRequest=new XMLHttpRequest();
    let parametro:string=(<HTMLInputElement>document.getElementById("txtBox")).value;
    xhttp.open("POST","backend/test_params.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    if(parametro=="")
    {
        xhttp.send();
    }else
    xhttp.send("param="+parametro);

    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200 )
        {
            alert(xhttp.responseText);
        }
    }
}


window.onload=function(){
    Test();
}
