var app = angular.module("ReelMovies", ['ngRoute']);


app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when("/", {controller: "AppCtrl", templateUrl: "views/home.html"})
    .otherwise({redirectTo: "/"})
}])
