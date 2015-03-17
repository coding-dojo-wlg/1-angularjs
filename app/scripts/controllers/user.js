'use strict';
angular.module('app.controllers').controller('UserCtrl', function($scope, $state, UserService) {
  $scope.users = UserService.all();
})
