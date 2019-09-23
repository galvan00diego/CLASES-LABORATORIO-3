<?php
$producto=$_POST["producto"]?$_POST["producto"]:NULL;

//var_dump($producto);
$OBJprod=new StdClass();
$OBJprod=json_decode($producto);

//MODIFICO PRECIO Y NOMBRE
$OBJprod->precio=1500;
$OBJprod->nombre="carne";

//CONVIERTO OBJETO EN STRING JSON_ENCODE
$STRprod=json_encode($OBJprod);

//ENVIO JSON
echo $STRprod;

?>