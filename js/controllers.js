app.controller('AppCtrl', ['$scope', 'movies', function($scope, movies) {
  forecast.success(function(data) {
    console.log(data);
    $scope.movies = data;
  });

}]);