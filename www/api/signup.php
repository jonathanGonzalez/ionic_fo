<?php
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT');
    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $correo = $data->correo;
    $password = $data->password;
    $fecha = $data->fecha;
    $genero = $data->genero;
    $q= $db->query("INSERT INTO users (use_nombre, use_apellidos, use_correo, use_contrasena, use_fecha_nacimiento, use_genero) VALUES ('$nombre', '$apellido', '$correo', '$password', '$fecha', '$genero')");
    $user_id = $db->lastInsertId();
    echo json_encode($user_id);
?>