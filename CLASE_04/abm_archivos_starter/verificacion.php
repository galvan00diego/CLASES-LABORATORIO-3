<?php

//se tiene que incluir en administracion.php

if($_SESSION["usuario"]="ok")
{

}
else
{
    header("location=login.php");
}