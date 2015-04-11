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
    $scope.getQuery = function() {
      $scope.factoryData = SearchQuery.getData();
      console.log(factoryData);
    }
    // GetMovieJson.success(function(data) {
    //   console.log(data);
    //   $scope.movies = data;
    // });
    // $scope.searchedWords = SearchQuery.keyword;
    // console.log("Search Keyword:" + SearchQuery.keyword);
    // $scope.getData = function (titles, query) {
    //   $scope.queryData = $filter('filter')(titles, query);
    // };

}]);