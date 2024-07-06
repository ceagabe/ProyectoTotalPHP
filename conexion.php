<?php
$servername="localhost";
$username="root";
$password="root";
$dbname="movies_cac";

try
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "al menos nos conectamos";
}
catch(PDOException $e)
{
    echo "Conexion no valida   ".$e->getMessage();
}

?>