<?php
require_once("./clases/Archivo.php");

$mensaje=$_POST["mensaje"];
$miObj=new StdClass();
$miObj->mensaje=$mensaje;

date_default_timezone_set('America/Argentina/Buenos_Aires');

$res = Archivo::Subir();
$pathTemp=$res["PathTemporal"];
$miObj->pathTemporal=$pathTemp;

$miObj->fecha=date('d/m/y h:i:s');

echo json_encode($miObj);
?>