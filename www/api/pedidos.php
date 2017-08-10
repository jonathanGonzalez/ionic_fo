<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require('conexion.php');
$data 	 = json_decode(file_get_contents("php://input"));
$pedidos = $data->pedido;
$adicionales = $data->adicionales;
$userId  = $data->user_id;
$mesa 	 = $data->mesa;


$sql	= $db->query("INSERT INTO pedidos (users_use_id, mesas_mes_pk_id) VALUES ('$userId','$mesa')");
$lastId = $db->lastInsertId();
echo $lastId;

for($i = 0; $i <= count($pedidos); ++$i) {
    $id_producto= $pedidos[$i];
    ++$i;
    $coment_producto= $pedidos[$i];
    ++$i;
    $cant_producto= $pedidos[$i];
    ++$i;
    $tamano_prod = $pedidos[$i];
    echo "///// Echo  del tamaño seleccionado<br/>";
    echo $tamano_prod;
    $sql = $db->query("INSERT INTO pedidos_has_productos (pedidos_ped_id, productos_pro_id, ped_comentario, tamanos_tam_pk_id) VALUES ('$lastId','$id_producto','$coment_producto','$tamano_prod')");
    $lastInsert = $db->lastInsertId();

for($a = 0; $a <= count($adicionales); ++$a){
    $adicionales_adi_pk_id = $adicionales[$a];
    $sql = $db->query("INSERT INTO pedidos_has_productos_has_adicionales (pedidos_has_productos_ped_pk_id, adicionales_adi_pk_id) VALUES ('$lastInsert','$adicionales_adi_pk_id')");
}
}

?>
