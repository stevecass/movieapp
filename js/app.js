/* ANGULAR MODULE */

var app = angular.module("ReelMovies", ['ngRoute']);


app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
  .when("/", {controller: "AppCtrl", templateUrl: "views/home.html"})
  .when("/results", {controller: "ResultsCtrl", templateUrl: "views/results.html"})
  .when("/movies/:id", {controller: "MovieCtrl", templateUrl: "views/movie.html"})
  .otherwise({redirectTo: "/"})
}])

app.directive('onFinishRender', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function () {
          scope.$emit('ngRepeatFinished');
        });
      }
    }
  }
});