var app = angular.module('App', []);

app.controller("AppCtrl", function ($scope) {
  $scope.callHome = function (message) {
    alert(message);
  };
});

app.directive("phone", function () {
  return {
    scope: {
      dial: "&"
    },
    template: '<input type="text" ng-model="number"></input>'+
      '<div class="button" ng-click="dial({number:number})">Call home!</div>'
  };
});