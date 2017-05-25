<?
$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$pedidoId = $request->pedidoId;
/// CONECTA A LA BASE DE DATOS

	// Create connection
	// reemplazar con ("localhost", USUARIO, PASSWORD, NOMBRE_DE_BASE_DE_DATOS)
	$conexion=mysqli_connect("localhost","coworker_free","freeorder2017","coworker_freeorder");

	// revisa si la conexion es correcta
	if (mysqli_connect_errno($conexion)) {
		echo "error en la conexion a base de datos: " . mysqli_connect_error();
	}

	/* convierte caracteres de la BD a utf-8  */
	$conexion->set_charset("utf8") ;



 	///// invocar datos

 	/// invoca los datos de la base de datos
 	$result = mysqli_query($conexion,"SELECT * FROM pedidos_has_productos WHERE pedidos_ped_id = $pedidoId ");

 	/// crea un arreglo general vacio
 	$resultadoOrdenado = array();



    // el arreglo se popula en este bucle
	while($row = mysqli_fetch_array($result)){
		// crea un objeto donde se incluyen los datos del registro
	   	$productos = array();
	   	$pro_id = $row['productos_pro_id'];
	   	$productos["id"]          = $row['productos_pro_id'];
	   	$productos["comentario"]  = $row['coment_prod_ped'];
	   	$productos["cantidad"]    = $row['cant_prod_ped'];
	   	$query = mysqli_query($conexion,"SELECT * FROM productos WHERE pro_id = '$pro_id'");
	   	$fila = mysqli_fetch_assoc($query);
	   	$productos['nombre'] = $fila['pro_nombre'];
	   	$productos['valor']  = $fila['pro_valor'];
	   	$productos['imagen'] = $fila['pro_image'];


	

	   	/// inserta el objeto con los datos de registro, dentro del arreglo general
	   	array_push($resultadoOrdenado, $productos);

	}


    /// una vez populado el arreglo general con datos, se convierte a Json
		echo json_encode($resultadoOrdenado, JSON_UNESCAPED_UNICODE );

?>
