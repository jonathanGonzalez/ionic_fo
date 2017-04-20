<?php
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT');
    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $user_id = $data->user_id;
    $nombre = $data->nombre;
    $apellido = $data->apellidos;
    $correo = $data->correo;
    $password = $data->password;
    $fecha = $data->fecha;
    $genero = $data->genero;
    $telefono = $data->telefono;
    $direccion = $data->direccion;
    $codPostal = $data->codPostal;
    $ciudad = $data->ciudad;
    $q= $db->query("UPDATE users SET use_nombre = '$nombre',  use_apellidos = '$apellido', use_correo = '$correo', use_contrasena = '$password', use_fecha_nacimiento = '$fecha', use_genero = '$genero', use_telefono = '$telefono', use_direccion = '$direccion', use_codPostal = '$codPostal', use_ciudad = '$ciudad' WHERE use_id = $user_id");
    $mensaje = "Tu perfil ha sido actualizado exitosamente";
    echo json_encode($mensaje);
?>