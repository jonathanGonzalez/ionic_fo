<?php 
    header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $user_id = $data->user_id;
    $perfil = $db->query("SELECT * FROM users WHERE use_id = $user_id");
    $perfil = $perfil->fetchAll();
    echo json_encode($perfil);
?>
