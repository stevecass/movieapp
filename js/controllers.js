/* LANDING PAGE CONTROLLER */

app.controller('AppCtrl', ['$scope', 'movies', function($scope, movies, SearchQuery) {
  $scope.logo = 'imgs/reelmovies_big.png';
  $scope.search = 'imgs/search.png';
  $scope.wheel = 'imgs/wheel_big.png';
  $scope.queried = SearchQuery;
}]);

/* RESULTS PAGE CONTROLLER */

app.controller('ResultsCtrl', ['$scope', 'movies', function($scope, $filter, movies, SearchQuery) {
    movies.success(function(data) {
      console.log(data);
      $scope.movies = data;
    });
    $scope.searchedWords = SearchQuery;
    console.log(SearchQuery);
    $scope.getData = function (titles, query) {
      $scope.queryData = $filter('filter')(titles, query);
    };

}]);