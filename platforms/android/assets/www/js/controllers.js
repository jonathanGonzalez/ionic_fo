angular.module('app.controllers', ['ionic','ngCordova'])

  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page2Ctrl', ['$scope', '$http', '$window','$cordovaLocalNotification', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window,$cordovaLocalNotification) {
//variables para registrar
    $scope.signUpInfo = {
        nombre : undefined,
        apellido : undefined,
        correo : undefined,
        password : undefined,
        fecha : undefined,        
        genero : undefined,
        telefono: undefined,
        direccion: undefined,
        codPostal: undefined,
        ciudad: undefined
    }
//funciones a realizar con los datos
    $scope.signUserUp = function(){
        var data = {
            nombre: $scope.signUpInfo.nombre,
            apellido: $scope.signUpInfo.apellido,
            correo: $scope.signUpInfo.correo,
            password: $scope.signUpInfo.password,
            fecha: $scope.signUpInfo.fecha,
            genero: $scope.signUpInfo.genero,
            telefono: $scope.signUpInfo.telefono,
            direccion: $scope.signUpInfo.direccion,
            codPostal: $scope.signUpInfo.codPostal,
            ciudad: $scope.signUpInfo.ciudad
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/signup.php", data).success(function(response){
            console.log(response); 
             localStorage.setItem("user_id", response);
             $cordovaLocalNotification.schedule({
            id: 1,
            title: 'Felicidades,',
            text: ' Se ha registrado correctamente',
            data: {
              customProperty: 'custom value'
            }
         }).then(function (result) {
            $window.location = "#/tab/page4";
           });          
          
        }).error(function(error){
            console.error(error);
        });
    };
    $window.location = "#/tab/page4";

}])
   
.controller('page3Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$window) {
/* if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }*/


}])
   
.controller('page4Ctrl', ['$scope','$window', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
  $http.get("http://co-workers.com.co/adaris/freeorder/api/sectores.php")
    .then( function(respuesta){
        $scope.sectores = respuesta.data;
    });

    $scope.consul_Rest = function(_sectId){
        localStorage.setItem("sectId", _sectId);
        $window.location = "#/tab/page5";
    }

}])
   
.controller('page5Ctrl', ['$scope','$window','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  } 
  
   $http({
       url:"http://co-workers.com.co/adaris/freeorder/api/restaurantes.php",
       method:"POST",
       data: {
           sectId: localStorage['sectId']
        },
       headers: {'Content-type': 'application/x-www-form-urlencoded'}
   }).then(
       function(respuesta){
        $scope.restaurantes = respuesta.data;    
       }
   )

    $scope.consul_Carta = function(_restId){
        localStorage.setItem("restId", _restId);
        $window.location = "#/tab/page6";
    }
}])
   
.controller('page6Ctrl', ['$scope','$window', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http, $ionicPopup) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
///SE PIDE EL NUMERO DE MESA //
var popupMesa = $ionicPopup.prompt({
   title: 'Sr. Usuario',
   template: '¿Ya está ubicado en una mesa de nuestro restaurante?',
   inputType: 'text',
   inputPlaceholder: 'Ingrese el numero de su mesa',
 });

popupMesa.then(function(res) {
  console.log('Su mesa es: ', res);
  localStorage.setItem("mesa", res);
  });


/// FIN DE LA PETICION DE LA MESA//


////////// INICIA LA PETICIÓN PARA LA IMG DEL RESTAURANTE EN EL HEADER/////

////////// INICIA LA PETICIÓN PARA LA IMG DEL RESTAURANTE EN EL HEADER/////

$http({
       url:"http://co-workers.com.co/adaris/freeorder/api/img_rest.php",
       method:"POST",
       data: {
           restId: localStorage['restId']
        },
       headers: {'Content-type': 'application/x-www-form-urlencoded'}
   }).then(
       function(respuesta){          
        $scope.restaurantes = respuesta.data;    
       }
   );
  

///////// FIN DE LA PETICIÓN PARA LA IMG DEL RESTAURANTE EN EL HEADER//////

///////// FIN DE LA PETICIÓN PARA LA IMG DEL RESTAURANTE EN EL HEADER//////


 $http({
       url:"http://co-workers.com.co/adaris/freeorder/api/categorias.php",
       method:"POST",
       data: {
           restId: localStorage['restId']
        },
       headers: {'Content-type': 'application/x-www-form-urlencoded'}
   }).then(
       function(respuesta){          
        $scope.categorias = respuesta.data;    
       }
   )

    $scope.consul_Productos = function(_categId){
        localStorage.setItem("categId", _categId);
        $window.location = "#/tab/page10";
    }
}])

.controller('page7Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
  

}])

.controller('page8Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }

}])

.controller('page9Ctrl', ['$scope', '$http', '$window', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window,$ionicPopup) {
//variables para registrar
    $scope.loginInfo = {
        correo : undefined,
        password : undefined
    }
//funciones a realizar con los datos
    $scope.loginUser = function(){
        var data = {
            correo: $scope.loginInfo.correo,
            password: $scope.loginInfo.password
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/login.php", data).success(function(response){
            console.log(response); 
            if (response.length == 0){
                var alertPopup = $ionicPopup.alert({
                      title: 'algo ha ocurrido',
                      template: 'No ha sido posible iniciar sesion. Intente nuevamente.',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    }); 
            }
            else {
            localStorage.setItem("user_id", response[0].use_id);
             var alertPopup = $ionicPopup.alert({
                      title: 'Sr. Usuario',
                      template: 'Nos alegra que estés de regreso en FreeOrdeR.',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });
            $window.location = "#/tab/page4";
            }               
                  
        }).error(function(error){
           console.log(error);  
           var alertPopup = $ionicPopup.alert({
                      title: 'Usuario',
                      template: 'Compruebe su conexión a internet e intente nuevamente.',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    }); 
        });
    };

}])

.controller('page10Ctrl', ['$scope', '$window', '$http', '$rootScope','$cordovaLocalNotification', '$ionicPopup', '$cordovaToast', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http, $rootScope,$cordovaLocalNotification,$ionicPopup,$cordovaToast) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
$http({
       url:"http://co-workers.com.co/adaris/freeorder/api/productos.php",
       method:"POST",
       data: {
           categId: localStorage['categId']
        },
       headers: {'Content-type': 'application/x-www-form-urlencoded'}
   }).then(
       function(respuesta){          
        $scope.productos = respuesta.data;
     }
   );  
  
    //agregar productos al carrito de compras
        $scope.carritoId = [];    
        $scope.agregarPedidoId = function(_item, _comentario, _cantidad){               
        $scope.carritoId.push(_item, _comentario, _cantidad);
        localStorage.setItem('pedido',JSON.stringify($scope.carritoId));
}   
        $rootScope.carritoCompleto = [];
        $scope.agregarPedidoCompleto = function(_productoCompleto){
        $scope.carritoCompleto.push(_productoCompleto);
        
        //Toast al agregar un producto
        $cordovaToast.showLongBottom('El producto se ha agregado a su carrito de compras').then(function(success) {
                // success
            }, function (error) {
                // error
         });
        //Fin del toast al agregar un carrito
    }
   $scope.total = function(){
        var total = 0;
        for(item of $scope.carritoCompleto){
            var cantidad = parseInt(item.cantidad);
            var precio = parseInt(item.valor); 
            var valProducto = (cantidad * precio);           
            total += valProducto;
        }
        return total;        
    }
    //fin de agregar productos al carrito

    $scope.eliminarPedido = function(){
        localStorage.removeItem('sectId');
        localStorage.removeItem('restId');
        localStorage.removeItem('categId');
        localStorage.removeItem('pedido');
        $window.location = '#/tab/page4';
    };
   $rootScope.comprar = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Sr. Usuario',
       template: '¿Está seguro que quiere hacer este pedido?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         var data = {
          pedido: JSON.parse(localStorage['pedido']),
          user_id: parseInt(localStorage['user_id']),
          mesa: parseInt(localStorage['mesa'])
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/pedidos.php", data).success(function(){
         $cordovaLocalNotification.schedule({
            id: 1,
            title: 'Felicidades,',
            text: ' Su pedido ha sido registrado',
            data: {
              customProperty: 'custom value'
            }
         }).then(function (result) {
                          // ...
                        });
        //Alert bonito para Dar aviso de que si se hizo el pedido                  
                        var alertPopup = $ionicPopup.alert({
                        title: 'Sr. Usuario',
                        template: 'Hemos recibido su pedido.'
                        });
                        alertPopup.then(function(res) {
                             //Toast al hacer un pedido
                                $cordovaToast.showLongBottom('Ha hecho su pedido satisfactoriamente').then(function(success) {
                                        // success
                                    }, function (error) {
                                        // error
                                });
                                //Fin del Toast al hacer un pedido
                             });
                    
        //Fin del alert para dar aviso de que si se hizo el pedido
       
        }).error(function(error){
            //console.error(error);
        });
        ///////SE VACIA EL CARRITO DE COMPRAS///////
            $scope.carritoId.length=0;
        ///////FIN DEL VACIO DEL CARRITO///////////
       } else {
        //Toast al hacer un pedido
         $cordovaToast.showLongBottom('Ha cancelado su pedido').then(function(success) {
                // success
            }, function (error) {
                // error
         });
        //Fin del Toast al hacer un pedido
       }
     });
   };

   ////PEDIR LA CUENTA ////////
    $rootScope.pedirCuenta = function(){
     var confirmPopup = $ionicPopup.confirm({
       title: 'Sr. Usuario',
       template: '¿Cómo desea hacer su pago?',
        cancelText: 'Tarjeta',
        cancelType: 'button-positive',
        okText: 'Efectivo'
     });
     confirmPopup.then(function(res) {
       if(res) {
            console.log("Ha seleccionado la opción  EFECTIVO");
            var pago = "Efectivo";
       }
       else {
            console.log("Ha seleccionado la opción  TARJETA");
            var pago = "Tarjeta de Crédito";
       }
       var data = {
            user_id: parseInt(localStorage['user_id']),
            rest_id: parseInt(localStorage['restId']),
            total: $scope.total(),
            formaPago: pago
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/pedirCuenta.php", data).success(function(response){ 
            var alertPopup = $ionicPopup.alert({
                title: 'Sr. Usuario',
                template: 'Uno de nuestros meseros le atenderá enseguida con su cuenta'
            });

            alertPopup.then(function(res) {
                console.log('Uno de nuestros meseros le atenderá enseguida con su cuenta');
            });
                  
        }).error(function(error){
           
        });
     });       
    }
   ////FIN DE PEDIR CUENTA ////
   
}])

.controller('page12Ctrl', ['$scope', '$window', '$cordovaToast', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$window,$cordovaToast, $http, $rootScope) {
 if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }

  ///////////////INFO DEL USUARIO////////////////

        var data = {
            user_id: parseInt(localStorage['user_id'])
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/perfil.php", data).success(function(respuesta){
            $rootScope.nombre = respuesta[0].use_nombre; 
            $rootScope.apellidos = respuesta[0].use_apellidos; 
            $rootScope.correo = respuesta[0].use_correo;   
            $rootScope.password = respuesta[0].use_contrasena;   
            $rootScope.fecha = respuesta[0].use_fecha_nacimiento;   
            $rootScope.genero = respuesta[0].use_genero;   
            $rootScope.telefono = respuesta[0].use_telefono;      
            $rootScope.direccion = respuesta[0].use_direccion;    
            $rootScope.codPostal = respuesta[0].use_codPostal;    
            $rootScope.ciudad = respuesta[0].use_ciudad;       

        }).error(function(error){
           console.log(error);   
        });

  /////////FIN DE LA INFO DEL USUARIO////////////
  $scope.logout = function(){
      localStorage.clear();
      $window.location = "#/page1";
  }
  $scope.editPerfil = function(){
    $window.location ="#/tab/page13";
}

}])
.controller('page13Ctrl', ['$scope', '$window', '$cordovaToast', '$http', '$ionicPopup', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $cordovaToast, $http, $ionicPopup, $ionicHistory) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }

  /////////FIN DE LA INFO DEL USUARIO////////////
  $scope.actUser = {
        nombre : $scope.nombre,
        apellido : $scope.apellidos,
        correo : $scope.correo,
        password : $scope.password,
        fecha : $scope.fecha,        
        genero : $scope.genero,
        telefono: $scope.telefono,
        direccion: $scope.direccion,
        codPostal: $scope.codPostal,
        ciudad: $scope.ciudad
    }
    //////////////ACTUALIZAR PERFIL/////////////////

  $scope.actPerfil = function(){
        var data = {
            user_id: parseInt(localStorage['user_id']),
            nombre: $scope.actUser.nombre,
            apellidos: $scope.actUser.apellidos,
            correo: $scope.correo,
            password: $scope.actUser.password,
            fecha: $scope.actUser.fecha,
            genero: $scope.actUser.genero,
            telefono: $scope.actUser.telefono,
            direccion: $scope.actUser.direccion,
            codPostal: $scope.actUser.codPostal,
            ciudad: $scope.actUser.ciudad
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/actPerfil.php", data).success(function(response){
            console.log(response);  
            var alertPopup = $ionicPopup.alert({
                      title: $scope.actUser.nombre,
                      template: 'Ha actualizado su perfil correctamente',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });    
            $ionicHistory.clearCache().then(function(){ $window.location = '#/tab/page12';});  
    
        }).error(function(error){
           console.log(error);   
        });

}  //////////FIN DE ACTUALIZAR PERFIL//////////

}])

.controller('scannerCtrl', ['$scope', '$window', '$cordovaBarcodeScanner', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $cordovaBarcodeScanner){
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
      $scope.scanner = function (){
      cordova.plugins.barcodeScanner.scan(
      function (result) {
                var datos = result.text.split(",");;
                localStorage.setItem("restId", datos[0]); 
                localStorage.setItem("mesa", datos[1]);               
                $window.location = "#/tab/page6";

      },
      function (error) {
          alert("Scaner fallido: " + error);
      },
      {
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
      }
      );
 };

}])

.controller('meseroCtrl', ['$scope', '$window', '$http', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http, $ionicPopup){
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
     //////////////LLAMAR AL MESERO /////////////////

  $scope.llamarMesero = function(){
        var data = {
            user_id: parseInt(localStorage['user_id']),
            mesa:     parseInt(localStorage['mesa'])
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/mesero.php", data).success(function(response){
            console.log(response);  
            var alertPopup = $ionicPopup.alert({
                      title: 'Sr. Usuario',
                      template: 'Uno de nuestros meseros le atenderá en un momento',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    });              
        }).error(function(error){
           console.log(error); 
           var alertPopup = $ionicPopup.alert({
                      title: 'Sr. Usuario',
                      template: 'Al parecer hay un problema con la conexión, por favor intenta nuevamente',
                      cssClass: 'dark',
                      okType: 'button-positive'
                    }); 
        });
}  //////////FIN DE LLAMAR AL MESERO ////////// 

}])