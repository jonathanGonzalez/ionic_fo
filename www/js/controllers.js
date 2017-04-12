angular.module('app.controllers', [])

  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page2Ctrl', ['$scope', '$http', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window) {
//variables para registrar
    $scope.signUpInfo = {
        nombre : undefined,
        apellido : undefined,
        correo : undefined,
        password : undefined,
        fecha : undefined,        
        genero : undefined
    }
//funciones a realizar con los datos
    $scope.signUserUp = function(){
        var data = {
            nombre: $scope.signUpInfo.nombre,
            apellido: $scope.signUpInfo.apellido,
            correo: $scope.signUpInfo.correo,
            password: $scope.signUpInfo.password,
            fecha: $scope.signUpInfo.fecha,
            genero: $scope.signUpInfo.genero
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/signup.php", data).success(function(response){
            console.log(response); 
             localStorage.setItem("user_id", response);             
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

.controller('page9Ctrl', ['$scope', '$http', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $window) {

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
            localStorage.setItem("user_id", response[0].use_id);
            $window.location = "#/tab/page4";        
        }).error(function(error){
            console.error(error);
        });
    };

}])

.controller('page10Ctrl', ['$scope', '$window', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http, $rootScope) {
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

    $scope.comprar = function(){
        alert(localStorage['pedido']);
        alert(localStorage['user_id']);
         var data = {
          pedido: JSON.parse(localStorage['pedido']),
          user_id: parseInt(localStorage['user_id'])
        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/pedidos.php", data).success(function(){
            //console.log(response);           
        }).error(function(error){
            //console.error(error);
        });
    }
}])

.controller('page12Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$window) {
 if(localStorage['user_id'] === undefined){
    $window.location = "#/page1";
  }

}])