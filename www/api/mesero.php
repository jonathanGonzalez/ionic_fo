<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require('conexion.php');
$data 	 = json_decode(file_get_contents("php://input"));
$userId  = $data->user_id;
$mesa = $data->mesa;
echo $user_id;
echo "<br/>";
echo $mesa;
$sql = $db->query("INSERT INTO solicitar_mesero (id_user, mesas_mes_pk_id) VALUES ('$userId','$mesa')");

?>
