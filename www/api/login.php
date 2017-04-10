<?php 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT');

    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $correo = $data->correo;
    $password = $data->password;
    $userInfo = $db->query("SELECT use_id FROM users WHERE use_correo='$correo' AND use_contrasena='$password'");
    $userInfo = $userInfo->fetchAll();
    echo json_encode($userInfo);
?>