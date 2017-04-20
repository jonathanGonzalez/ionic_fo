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
                          // ...
           });          
            $window.location = "#/page3";      
        }).error(function(error){
            console.error(error);
        });
    };

}])
   
.controller('page3Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$window) {
 if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
    //localStorage.setItem("prueba", "infor de prueba en localStorage");

/*if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
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
   
.controller('page6Ctrl', ['$scope','$window', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }
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
            console.log(localStorage['user_id']);
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
        $scope.agregarPedidoId = function(_item){               
        $scope.carritoId.push(_item);
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
            var precio = parseInt(item.valor);            
            total += precio;
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
          user_id: parseInt(localStorage['user_id'])
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
            $scope.nombre = respuesta[0].use_nombre; 
            $scope.apellidos = respuesta[0].use_apellidos; 
            $scope.correo = respuesta[0].use_correo;   
            $scope.password = respuesta[0].use_contrasena;   
            $scope.fecha = respuesta[0].use_fecha_nacimiento;   
            $scope.genero = respuesta[0].use_genero;   
            $scope.telefono = respuesta[0].use_telefono;      
            $scope.direccion = respuesta[0].use_direccion;    
            $scope.codPostal = respuesta[0].use_codPostal;    
            $scope.ciudad = respuesta[0].use_ciudad;       

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
.controller('page13Ctrl', ['$scope', '$window', '$cordovaToast', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$window,$cordovaToast, $http, $rootScope) {
    if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }

  
        var data = {
            user_id: parseInt(localStorage['user_id'])
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/perfil.php", data).success(function(respuesta){
            $scope.nombre = respuesta[0].use_nombre; 
            $scope.apellidos = respuesta[0].use_apellidos; 
            $scope.correo = respuesta[0].use_correo;   
            $scope.password = respuesta[0].use_contrasena;   
            $scope.fecha = respuesta[0].use_fecha_nacimiento;   
            $scope.genero = respuesta[0].use_genero;   
            $scope.telefono = respuesta[0].use_telefono;      
            $scope.direccion = respuesta[0].use_direccion;    
            $scope.codPostal = respuesta[0].use_codPostal;    
            $scope.ciudad = respuesta[0].use_ciudad;       

        }).error(function(error){
           console.log(error);   
        });

  /////////FIN DE LA INFO DEL USUARIO////////////
    //////////////ACTUALIZAR PERFIL/////////////////

  $scope.actPerfil = function(){
var data = {
            user_id: parseInt(localStorage['user_id']),
            nombre: $scope.nombre,
            apellidos: $scope.apellidos,
            correo: $scope.correo,
            password: $scope.password,
            fecha: $scope.fecha,
            genero: $scope.genero,
            telefono: $scope.telefono,
            direccion: $scope.direccion,
            codPostal: $scope.codPostal,
            ciudad: $scope.ciudad
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/actPerfil.php", data).success(function(response){
            console.log(response); 
             alert('ha actualizado con exito');         
            $window.location = "#/tab/page12";  
                  
        }).error(function(error){
           console.log(error);   
        });

}  //////////FIN DE ACTUALIZAR PERFIL//////////

}])