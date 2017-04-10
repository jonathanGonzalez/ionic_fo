<?
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

require('conexion.php');
$data = json_decode(file_get_contents("php://input"), true);
$pedidos = $data->pedido;

//echo "///////////////////<br/>";
//foreach($data as $key=>$value) { var_dump($value->id); var_dump($array[$key]->id); }
//echo "///////////////////<br/>";
//echo $objDatos->id;
/*echo "VECTOR COMPLETO <br/>";
var_dump($data);
echo "********data 1<br/>";
//echo $data.['pedido'];
echo "<br/>";
echo "<br/>";
echo "PEDIDO EN LA POSICION 0<br/>";
var_dump($data['pedido']);
echo "<BR/>FIN DE LA POSICION 0<br/>";

echo "<br><br>imprimir POSICION 0<br/>";
var_dump($data['pedido'][0]);
echo "<BR/>FIN DE LA POSICION 0<br/>";
echo "<br><br>imprimir POSICION 0<br/>";
var_dump($data['pedido'][0]);
echo "<BR/>FIN DE LA POSICION 0<br/>";*/
//var_dump($pedido);
//echo "<br/>";
//echo "<br/>";
//$json = '[{"id":"3","nombre":"Combo Costillas","descripcion":"Costillas  + Bebida","valor":"9200","imagen":"img/productos/producto.png","$$hashKey":"object:50"},{"id":"3","nombre":"Combo Costillas","descripcion":"Costillas  + Bebida","valor":"9200","imagen":"img/productos/producto.png","$$hashKey":"object:50"},{"id":"4","nombre":"Combo Trucha","descripcion":"Trucha BBQ + Limón + Bebida","valor":"14000","imagen":"img/productos/producto.png","$$hashKey":"object:51"}]';
//$datosclientes = json_decode($json, true);

$userId = 1;
$sql = $db->query("INSERT INTO pedidos (users_use_id) VALUES ('$userId')");
$lastId = $db->lastInsertId();
//$pedido = json_decode($arr1, true);
//$pedidos = json_decode($pedido, true);
	
foreach ($pedidos as $pedido){    
    //echo "Inicio<br/>";
    //echo "<br/>";
    //var_dump($producto);
    //echo "Fin<br/>";
    //echo "<br/>";
$query = $db->query("INSERT INTO pedidos_has_productos (pedidos_ped_id,productos_pro_id)  VALUES ('".$lastId."',".$pedido['id'].")");
}
?>
