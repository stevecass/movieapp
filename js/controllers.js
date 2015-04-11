/* LANDING PAGE CONTROLLER */

app.controller('AppCtrl', ['$scope', function($scope, SearchQuery) {
  $scope.logo = 'imgs/reelmovies_big.png';
  $scope.search = 'imgs/search.png';
  $scope.wheel = 'imgs/wheel_big.png';
  $scope.queried = SearchQuery;
}]);

/* RESULTS PAGE CONTROLLER */

app.controller('ResultsCtrl', ['$scope', 'GetMovieJson', function($scope, GetMovieJson, $filter, SearchQuery) {
    GetMovieJson.success(function(data) {
      console.log(data);
      $scope.movies = data;
    });
    $scope.searchedWords = SearchQuery;
    console.log("Search Keyword:" + SearchQuery);
    $scope.getData = function (titles, query) {
      $scope.queryData = $filter('filter')(titles, query);
    };

}]);