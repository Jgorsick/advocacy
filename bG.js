"use strict";

angular.module('ChildAdvocate', ['ui.bootstrap', 'ngAnimate']);
angular.module('ChildAdvocate').controller('bgCtrl', function ($scope) {

  $scope.collegeKids = {
    'background-image':'url(protest.png)'
  };
  console.log($scope.collegeKids);
});
