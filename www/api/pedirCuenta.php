<?php 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT');

    include("conexion.php");
    $data = json_decode(file_get_contents("php://input"));
    $user_id = $data->user_id;
    $rest_id = $data->rest_id;
    $mesa = 7;
    $valorCuenta = $data->total;
    $formaPago = $data->formaPago;
    
    $Cuenta = $db->query("INSERT INTO pagos_has_pedidos (use_id, rest_id, mesa, valorCuenta, formaPago)  VALUES ('".$user_id."','".$rest_id."','".$mesa."','".$valorCuenta."','".$formaPago."')");
?>