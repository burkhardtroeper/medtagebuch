// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'controllers', 'services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.dateneingabe', {
      url: '/dateneingabe',
      views: {
        'menuContent': {
          templateUrl: 'templates/dateneingabe.html',
          controller: 'dateneingabe'
        }
      }
  })
  .state('app.dateneingabe2', {
    url: '/dateneingabe2',
    views: {
      'menuContent': {
        templateUrl: 'templates/dateneingabe2.html',
        controller: 'dateneingabe2'
      }
    }
  })

  .state('app.startseite', {
      url: '/startseite',
      views: {
        'menuContent': {
          templateUrl: 'templates/startseite.html',
          controller: 'startseite'
      }
    }
  })
  .state('app.datenuebersicht', {
      url: '/datenuebersicht',
      views: {
        'menuContent': {
          templateUrl: 'templates/datenausgabe.html',
          controller: 'datenuebersicht'
        }
      }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/startseite');
});
