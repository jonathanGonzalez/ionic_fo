<?php 
    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $correo = $data->correo;
    $password = $data->password;
    $userInfo = $db->query("SELECT correo FROM user WHERE correo='$correo' AND password='$password'");
    $userInfo = $userInfo->fetchAll();
    echo json_encode($userInfo);
	

?>