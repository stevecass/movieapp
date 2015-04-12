/* LANDING PAGE CONTROLLER */

app.controller('AppCtrl', ['$scope', 'SearchQuery', function($scope, SearchQuery) {
  $scope.logo = 'imgs/reelmovies_big.png';
  $scope.search = 'imgs/search.png';
  $scope.wheel = 'imgs/wheel_big.png';
  $scope.updateQuery = function() {
    SearchQuery.setData($scope.query)
  };
}]);

/* */

app.controller('SearchCtrl', ['$scope', '$location', 'SearchQuery' function($scope, $location, SearchQuery) {
  $scope.changeView = function(view){
      $location.path(view);
  }
  $scope.updateQuery = function() {
    SearchQuery.setData($scope.query)
  };
}])


/* RESULTS PAGE CONTROLLER */

app.controller('ResultsCtrl', ['$scope', 'GetMovieJson', 'SearchQuery', function($scope, GetMovieJson, SearchQuery) {
    $scope.updateQuery = function() {
      SearchQuery.setData($scope.query)
    };
    $scope.getQuery = function() {
      $scope.factoryData = SearchQuery.getData();
    }
    $scope.factoryData = SearchQuery.getData();
    GetMovieJson.success(function(data) {
      $scope.movies = data;
    });
}]);