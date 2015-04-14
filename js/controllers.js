/* LANDING PAGE CONTROLLER */

app.controller('AppCtrl', ['$scope', 'SearchQuery', function($scope, SearchQuery) {
  $scope.logo = 'imgs/reelmovies_big.png';
  $scope.search = 'imgs/search.png';
  $scope.wheel = 'imgs/wheel_big.png';
}]);


/* RESULTS PAGE CONTROLLER */

app.controller('ResultsCtrl', function($scope, $http, SearchQuery, GetMovieJson, $location, $routeParams){
  $scope.updateQuery = function() {
    SearchQuery.setData($scope.query)
  };
  $scope.getQuery = function() {
    $scope.factoryData = SearchQuery.getData();
    $scope.fetchResults();
  }
  $scope.fetchResults = function(){
    console.log('term', SearchQuery.getData());
    var dfd = GetMovieJson.query({q: SearchQuery.getData().keyword });
    dfd.$promise.then(function(data){
      $scope.movies = data.movies;
      console.log($scope.movies);
    });
  }
  $scope.changeView = function(view, params){
      if ($scope.query) {
        $location.path(view).search({query: $scope.query});
      } else {
        $location.path(view);
      }

  }

  $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    $(".gray-circle").each(function(){
      var percentageNum = parseInt($(this).children('span')[0].innerHTML);
      var moveFromTop = 100 - percentageNum;
      var coloredPart = $(this).children('div');
      if(percentageNum > 80) {
        coloredPart.css({"top": moveFromTop + "%", "background-color": "#86c60c"});
      }
      else if (percentageNum > 60) {
        coloredPart.css({"top": moveFromTop + "%", "background-color": "#ffc000"});
      }
      else if (percentageNum > 40) {
        coloredPart.css({"top": moveFromTop + "%", "background-color": "#e8e642"});
      }
      else {
        coloredPart.css({"top": moveFromTop + "%", "background-color": "#ff0000"});
      }
    });
  });

  if ($routeParams.query) {
    SearchQuery.setData($routeParams.query);
    $scope.fetchResults();
  }


});

/* MOVIE SHOW CONTROLLER */

app.controller('MovieCtrl', ['$scope', 'GetMovieJson', '$routeParams', function($scope, GetMovieJson, $routeParams) {
  GetMovieJson.success(function(data) {
    $scope.detail = data.movies[$routeParams.id];
  });
  $scope.goBack = function() {
    window.history.back();
  };
}]);