'use strict';
angular.module('app.services').factory('UserService', [
    '$resource',
    function($resource) {
      return $resource('http://localhost:3000/users/:id', { id: '@_id' }, {
        all: {
          method: 'GET',
          isArray: true
        }
      });
    }
]);
