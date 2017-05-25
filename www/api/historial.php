<?
$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$userId = $request->userId;
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
 	$result = mysqli_query($conexion,"SELECT * FROM pedidos WHERE users_use_id = $userId ORDER BY ped_fecha DESC ");



 	/// crea un arreglo general vacio
 	$resultadoOrdenado = array();



    // el arreglo se popula en este bucle
	while($row = mysqli_fetch_array($result)){


      // crea un objeto donde se incluyen los datos del registro
	   	$historial = array();
	   	$historial["id"]          = $row['ped_id'];
        $historial["fecha"]      = $row['ped_fecha'];

       
	   

	   	/// inserta el objeto con los datos de registro, dentro del arreglo general
	   	array_push($resultadoOrdenado, $historial);

	}


    /// una vez populado el arreglo general con datos, se convierte a Json
		echo json_encode($resultadoOrdenado, JSON_UNESCAPED_UNICODE );


?>
