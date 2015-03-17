'use strict';

angular.module('app', ['ui.router','app.services', 'app.controllers','ngResource'])


.run(function($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function (event, next) {
  });

})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'RootCtrl'
    })
    .state('cake_days', {
      url: '/cake_days',
      templateUrl: 'views/cake_day/index.html',
      controller: 'CakeDayCtrl'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'views/user/index.html',
      controller: 'UserCtrl'
    })
    .state('notes', {
      url: '/notes',
      templateUrl: 'views/notes.html',
      controller: 'NotesCtrl'
    })


  $urlRouterProvider.otherwise('about');

});
