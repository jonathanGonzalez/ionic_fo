<?php
    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $correo = $data->correo;
    $password = $data->password;
    $fecha = $data->fecha;
    $genero = $data->genero;
    $q= "INSERT INTO users (use_nombre, use_apellidos, use_correo, use_contrasena, use_fecha_nacimiento, use_genero) VALUES  (:nombre, :apellido, :correo, :password, :fecha, :genero)";
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