<?php
$file=fopen("autos.json","r");

$str=fread($file,filesize("autos.json"));
echo $str;
?>