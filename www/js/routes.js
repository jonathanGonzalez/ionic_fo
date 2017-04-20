angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
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
    url:'/page3',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('tab.page4', {
    url: '/page4',    
       views: {
      'tab-page4': {
        templateUrl: 'templates/page4.html', 
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tab.page5', {
    url: '/page5',    
     views: {
      'tab-page4': {  
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
     }
  })

  .state('tab.page6', {
    url: '/page6',   
    views: {
      'tab-page4': {  
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
     }
  })

  .state('tab.page7', {
    url: '/page7',   
    views: {
      'tab-page7': {
         templateUrl: 'templates/page7.html',  
        controller: 'page7Ctrl'
      }
     }
  })

  .state('tab.page8', {
    url: '/page8',
    views: {
      'tab-page8': {
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
      }
     }
  })

  .state('page9', {
    url: '/page9',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('tab.page10', {
    url: '/page10',    
    views: {
      'tab-page4': {  
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
     }
  })

   .state('tab.page11', {
    url: '/page11',    
    views: {
      'tab-page11': {  
        templateUrl: 'templates/page11.html',
        controller: 'page10Ctrl'
      }
     }
  })

.state('tab.page12', {
    url: '/page12',    
    views: {
      'tab-page12': { 
        templateUrl: 'templates/page12.html', 
        controller: 'page12Ctrl'
      }
     }
  })

  .state('tab.page13', {
    url: '/page13',    
    views: {
      'tab-page12': { 
        templateUrl: 'templates/page13.html', 
        controller: 'page13Ctrl'
      }
     }
  })

$urlRouterProvider.otherwise('/tab/page4')

});