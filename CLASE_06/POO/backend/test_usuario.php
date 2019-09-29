<?php
include_once ("AccesoDatos.php");
require_once ("usuario.php");
$recibo=$_POST["param"];
$Miusuario=new usuario();
$usuarioJSON=json_decode($recibo);

$correo=$usuarioJSON->correo;
$clave=$usuarioJSON->clave;
$existe=$Miusuario->existeUsuario($correo,$clave);
       
        if($existe)
        {
            echo '{"existe":true,"correo":"'.$correo.'","clave":"'.$clave.'"}';
        }
        else
        {
            echo '{"existe":false}';
        }
        
 

        
        



