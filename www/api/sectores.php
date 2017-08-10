<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

/// CONECTA A LA BASE DE DATOS
	// Create connection
	// reemplazar con ("localhost", USUARIO, PASSWORD, NOMBRE_DE_BASE_DE_DATOS)
	$conexion=mysqli_connect("localhost","coworker_free","freeorder2017","coworker_freeorder_final");
	// revisa si la conexion es correcta
	if (mysqli_connect_errno($conexion)) {
		echo "error en la conexion a base de datos: " . mysqli_connect_error();}

	/* convierte caracteres de la BD a utf-8  */
	$conexion->set_charset("utf8") ;
 	///// invocar datos
 	/// invoca los datos de la base de datos
 	$result = mysqli_query($conexion,"SELECT * FROM sectores");
 	/// crea un arreglo general vacio
 	$resultadoOrdenado = array();
    // el arreglo se popula en este bucle
	while($row = mysqli_fetch_array($result)){
      // crea un objeto donde se incluyen los datos del registro
	   	$sector = array();
	   	$sector["id"]          = $row['id'];
		$sector["imagen"]      = $row['sect_image'];
	   	$sector["nombre"]      = $row['sect_name'];
        $sector["descripcion"] = $row['sect_description']; 
	   	/// inserta el objeto con los datos de registro, dentro del arreglo general
	   	array_push($resultadoOrdenado, $sector);
	}
	 /// una vez populado el arreglo general con datos, se convierte a Json
		echo json_encode($resultadoOrdenado, JSON_UNESCAPED_UNICODE );
?>
