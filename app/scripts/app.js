'use strict';

angular.module('app', ['ui.router','app.services', 'app.controllers'])


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

    .state('cake_day', {
      url: '/cake_day',
      templateUrl: 'views/cake_day.html',
      controller: 'CakeDayCtrl'
    })

  .state('notes', {
    url: '/notes',
    templateUrl: 'views/notes.html',
    controller: 'NotesCtrl'
  })


  $urlRouterProvider.otherwise('about');

});
