<?php

    include ('./conexiondb.php');

    $nombre = $_POST['nombre'];
    $pais = $_POST['country_name'];
    $celular = $_POST['celular'];
    $correo = $_POST['correo'];

    if(empty($nombre) || empty($pais) || empty($celular) || empty($correo)){
        echo "datos incompletos";
    }else{
        $sql = " INSERT INTO contactos (nombre,pais,celular,correo) VALUES ('$nombre','$pais','$celular','$correo') ";
        $res = mysqli_query($conn,$sql);
        echo $res;
    }

?>