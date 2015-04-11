app.controller('AppCtrl', ['$scope', 'movies', function($scope, movies) {
  $scope.name = "Reel Movies"
  movies.success(function(data) {
    console.log(data);
    $scope.movies = data;
  });

}]);