<?php 
    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $correo = $data->correo;
    $password = $data->password;
    $userInfo = $db->query("SELECT use_correo FROM users WHERE use_correo='$correo' AND use_contrasena='$password'");
    $userInfo = $userInfo->fetchAll();
    echo json_encode($userInfo);
	

?>