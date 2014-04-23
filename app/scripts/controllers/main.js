'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope , $resource) {
    //$resource('/api').query();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
