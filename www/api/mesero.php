<?
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
require('conexion.php');
$data = json_decode(file_get_contents("php://input"));
$userId  = $data->user_id;
$mesa = $data->mesa;

$sql = $db->query("INSERT INTO solicitar_mesero (id_user, mesa) VALUES ('$userId','$mesa')");

?>
