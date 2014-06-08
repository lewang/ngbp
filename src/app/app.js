app = angular.module('App', []);

app.directive('collection', function () {
  return {
    restrict: "E",
    replace: true,
    scope: {
      collection: '='
    },
    template: "<ul><member ng-repeat='member in collection' member='member'></member></ul>"
  };
});

app.directive('member', function ($compile) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      member: '='
    },
    template: "<li>{{member.name}}</li>",
    link: function (scope, element, attrs) {
      if (angular.isArray(scope.member.children)) {
        element.append("<collection collection='member.children'></collection>");
        $compile(element.contents())(scope);
      }
    }
  };
});

app.controller('IndexCtrl', function ($scope) {
  $scope.tasks = [
    {
      name: 'Europe',
      children: [
        {
          name: 'Italy',
          children: [
            {
              name: 'Rome'
            },
            {
              name: 'Milan'
            }
          ]
        },
        {
          name: 'Spain'
        }
      ]
    },
    {
      name: 'South America',
      children: [
        {
          name: 'Brasil'
        },
        {
          name: 'Peru'
        }
      ]
    }
  ];
});