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
    $telefono = $data->telefono;
    $direccion = $data->direccion;
    $codPostal = $data->codPostal;
    $ciudad = $data->ciudad;
    $q= $db->query("INSERT INTO users (use_nombre, use_apellidos, use_correo, use_contrasena, use_fecha_nacimiento, use_genero, use_telefono, use_direccion, use_codPostal, use_ciudad) VALUES ('$nombre', '$apellido', '$correo', '$password', '$fecha', '$genero', '$telefono', '$direccion', '$codPostal', '$ciudad')");
    $user_id = $db->lastInsertId();
    echo json_encode($user_id);
?>