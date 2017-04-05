angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page3',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/page6',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/page8',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

   .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page10Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});