<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$idProducto = $request->detalles_Producto;
/// CONECTA A LA BASE DE DATOS
	$conexion=mysqli_connect("localhost","coworker_free","freeorder2017","coworker_freeorder_final");

	// revisa si la conexion es correcta
	if (mysqli_connect_errno($conexion)) {
		echo "error en la conexion a base de datos: " . mysqli_connect_error();
	}

	/* convierte caracteres de la BD a utf-8  */
	$conexion->set_charset("utf8") ;
 	///// invocar datos

 	/// invoca los datos de la base de datos
 	$result = mysqli_query($conexion,"SELECT * FROM productos WHERE pro_id = $idProducto");
 	/// crea un arreglo general vacio
 	$resultadoOrdenado = array();
    // el arreglo se popula en este bucle
	while($row = mysqli_fetch_array($result)){


      // crea un objeto donde se incluyen los datos del registro
	   	$producto = array();
	   	$producto["id"]          = $row['pro_id'];
		$producto["nombre"]      = $row['pro_nombre'];
	   	$producto["descripcion"] = $row['pro_descripcion'];
        $producto["valor"]		 = $row['pro_valor'];
        $producto["imagen"]		 = $row['pro_image'];
        $producto["imagen"]		 = $row['pro_image'];
		$producto["comentario"]  = $row['pro_comentario'];
		$producto["cantidad"]  	 = $row['pro_cantidad'];
	   /// inserta el objeto con los datos de registro, dentro del arreglo general
	   	array_push($resultadoOrdenado, $producto);

	}
    /// una vez populado el arreglo general con datos, se convierte a Json
		echo json_encode($resultadoOrdenado, JSON_UNESCAPED_UNICODE );


?>
