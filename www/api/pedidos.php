<?
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
require('conexion.php');
$data = json_decode(file_get_contents("php://input"));
$pedidos = $data->pedido;
$userId  = $data->user_id;
echo "///// Echo  del id del usuario<br/>";
echo "$userId <br/>";
echo "///// fin del echo del id del usuario<br/>";
echo "///// var dump del id del usuario<br/>";
var_dump($userId);
echo "///// <br/><br/>";
echo "///// var dump de pedidos<br/>";
var_dump($pedidos);
echo "///// <br/>";
echo "///// imprimir un pedido<br/>";
print_r( $pedidos[0]);
echo "///// fin de imprimir un pedido<br/>";
$sql = $db->query("INSERT INTO pedidos (users_use_id) VALUES ('$userId')");
$lastId = $db->lastInsertId();
echo $lastId;
//$datospedido = json_decode($pedidos, true);
echo "<br/> contador del arreglo<br/>";
echo count($pedidos);
echo "<br/> fin del contador del arreglo<br/>";
/*for($i = 0; $i < count($pedidos); ++$i) {
    $id_pedido= $pedidos[$i]['id']
}*/

/*foreach ($pedidos as $compra) {
$query = $db->query("INSERT INTO pedidos_has_productos (pedidos_ped_id, productos_pro_id)  VALUES ('".$lastId."',"$id_pedido")");
}*/
?>
