app.controller('AppCtrl', ['$scope', 'movies', function($scope, movies) {
  movies.success(function(data) {
    console.log(data);
    $scope.movies = data;
  });

}]);