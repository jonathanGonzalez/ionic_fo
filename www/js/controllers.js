angular.module('app.controllers', [])

  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page2Ctrl', ['$scope', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http) {
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
            localStorage.setItem("correo", JSON.stringify(response));           
        }).error(function(error){
            console.error(error);
        });
    };

}])
   
.controller('page3Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$window) {
    //localStorage.setItem("prueba", "infor de prueba en localStorage");

/*if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }*/

}])
   
.controller('page4Ctrl', ['$scope','$window', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) {
  $http.get("http://co-workers.com.co/adaris/freeorder/api/sectores.php")
    .then( function(respuesta){
        $scope.sectores = respuesta.data;
    });

    $scope.consul_Rest = function(_sectId){
        localStorage.setItem("sectId", _sectId);
        $window.location = "#/page5";
    }

}])
   
.controller('page5Ctrl', ['$scope','$window','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) { 
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
        $window.location = "#/page6";
    }


}])
   
.controller('page6Ctrl', ['$scope','$window', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) {
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
        $window.location = "#/page10";
    }
}])

.controller('page7Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {


}])

.controller('page8Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {


}])

.controller('page9Ctrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {
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
            localStorage.setItem("correo", JSON.stringify({correo: response[0].use_correo}));           
        }).error(function(error){
            console.error(error);
        });
    };

}])

.controller('page10Ctrl', ['$scope', '$window', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window, $http) {
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
        $scope.carrito = [];
    
    $scope.agregar = function(_item){
               
        $scope.carrito.push(_item);

    localStorage.setItem('pedido',JSON.stringify($scope.carrito));
    }

    

    
    $scope.total = function(){
        
        var total = 0;
        
        
        for(item of $scope.carrito){
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
        $window.location = '#/page4';
    };

    $scope.comprar = function(){
        alert(localStorage['pedido'])
        var obj = JSON.parse(localStorage['pedido']);
         var data = {
          pedido: obj
          

        }
        $http.post("http://co-workers.com.co/adaris/freeorder/api/pedidos.php", data).success(function(){
            //console.log(response);           
        }).error(function(error){
            //console.error(error);
        });
    }

    
}])