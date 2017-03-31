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
        $http.post("http://localhost/Co-Workers/APPS/Freeorder/www/api/signup.php", data).success(function(response){
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

if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }

}])
   
.controller('page4Ctrl', ['$scope','$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }

}])
   
.controller('page5Ctrl', ['$scope','$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }

}])
   
.controller('page6Ctrl', ['$scope','$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }

}])

.controller('page7Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }

}])

.controller('page8Ctrl', ['$scope', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $window) {
if(localStorage['correo'] === undefined){
    $window.location = "#/page9";
  }

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
        $http.post("http://localhost/Co-Workers/APPS/Freeorder/www/api/login.php", data).success(function(response){
            console.log(response); 
            localStorage.setItem("correo", JSON.stringify({correo: response[0].correo}));           
        }).error(function(error){
            console.error(error);
        });
    };

}])
 