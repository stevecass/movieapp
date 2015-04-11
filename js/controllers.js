/* LANDING PAGE CONTROLLER */

app.controller('AppCtrl', ['$scope', 'SearchQuery', function($scope, SearchQuery) {
  $scope.logo = 'imgs/reelmovies_big.png';
  $scope.search = 'imgs/search.png';
  $scope.wheel = 'imgs/wheel_big.png';
  $scope.updateQuery = function() {
    SearchQuery.setData($scope.query)
  };
}]);

/* RESULTS PAGE CONTROLLER */

app.controller('ResultsCtrl', ['$scope', 'GetMovieJson', 'SearchQuery', function($scope, GetMovieJson, SearchQuery) {
    $scope.updateQuery = function() {
      SearchQuery.setData($scope.query)
    };
    $scope.getQuery = function() {
      $scope.factoryData = SearchQuery.getData();
      console.log('factoryData' + $scope.factoryData);
    }
    $scope.factoryData = SearchQuery.getData();
    console.log('factoryData' + $scope.factoryData.keyword);
    GetMovieJson.success(function(data) {
      console.log('data' + data);
      $scope.movies = data;
    });
}]);