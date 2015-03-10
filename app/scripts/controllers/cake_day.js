'use strict';
angular.module('app.controllers').controller('CakeDayCtrl', function($scope, $state) {
  $scope.cake_days = [
    {name: 'trev', date: '1423373014000'},
    {name: 'aesse', date: '1432272214000'},
    {name: 'andrew', date: '1418534614000'},
    {name: 'henry', date: '1429680214000'},
    {name: 'xavier', date: '1425878614000'},
    {name: 'ben', date: '1425878614000'}
  ];
  $scope.name_search = '';
  $scope.next_cake_day = function(){
    var today = new Date().getTime();
    var the_diff = 1432272214000; // magics number
    var the_date;

    for(var i = 0; i < $scope.cake_days.length; i++){
      if(parseInt($scope.cake_days[i].date) > today && (parseInt($scope.cake_days[i].date) - today) < the_diff){
        the_date = $scope.cake_days[i];
      }
    }

    return the_date;
  };
})
