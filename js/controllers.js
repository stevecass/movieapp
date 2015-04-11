app.controller('AppCtrl', ['$scope', 'movies', 'SearchQuery', function($scope, movies) {
  $scope.name = "Reel Movies"
  movies.success(function(data) {
    console.log(data);
    $scope.movies = data;
  });
  $scope.query = '';
  $scope.$watch('query', function (newValue, oldValue) {
      if (newValue !== oldValue) SearchQuery.setSearchQuery(newValue);
  });
  $scope.logo = 'imgs/reelmovies_big.png';
  $scope.search = 'imgs/search.png'
  $scope.wheel = 'imgs/wheel_big.png'
}]);

app.controller('ResultsCtrl', ['$scope', 'movies', 'SearchQuery', function($scope, $filter, movies) {
  $scope.name = "Reel Movies"
  movies.success(function(data) {
    console.log(data);
    $scope.movies = data;
  });
  $scope.$watch(function () { return SearchQuery.getSearchQuery(); }, function (newValue, oldValue) {
          if (newValue !== oldValue) $scope.query = newValue;
      });
  $scope.queryData = $filter('filter')(names, query);

}]);