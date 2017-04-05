<?
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

require('conexion.php');
$data = file_get_contents("php://input");
$json = $data->pedido;
$jsonFinal = "'" + $json +"'";
var_dump($json);
//$json = '[{"id":"3","nombre":"Combo Costillas","descripcion":"Costillas  + Bebida","valor":"9200","imagen":"img/productos/producto.png","$$hashKey":"object:69"},{"id":"4","nombre":"Combo Trucha","descripcion":"Trucha BBQ + Limón + Bebida","valor":"14000","imagen":"img/productos/producto.png","$$hashKey":"object:70"}]';
$userId = 1;

$sql = $db->query("INSERT INTO pedidos (users_use_id) VALUES ('$userId')");
$lastId = $db->lastInsertId();
$pedido = json_decode($jsonFinal, true);
foreach ($pedido as $producto){
$query = $db->query("INSERT INTO pedidos_has_productos (pedidos_ped_id,productos_pro_id) 
    VALUES ('".$lastId."',".$producto['id'].")");
}


?>
