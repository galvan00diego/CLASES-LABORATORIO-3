<?php
if(isset($_POST["param"]))
$parametro=$_POST["param"];
//var_dump($_POST["param"]);

if(isset($_POST["param"]))
//if($parametro!="")
{
    echo "Hola ".$parametro;
}
else
echo ":(";