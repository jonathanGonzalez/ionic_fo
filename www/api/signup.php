<?php
    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $correo = $data->correo;
    $password = $data->password;
    $fecha = $data->fecha;
    $genero = $data->genero;
    $q= "INSERT INTO user (nombre, apellido, correo, password, fechaNacimiento, genero) VALUES  (:nombre, :apellido, :correo, :password, :fecha, :genero)";
    $query = $db->prepare($q);
    $execute = $query->execute(array(
        ":nombre" => $nombre,
        ":apellido" => $apellido,        
        ":correo" => $correo,
        ":password" => $password,
        ":fecha" => $fecha,
        ":genero" => $genero     
        
    ));

    echo json_encode($correo);
?>