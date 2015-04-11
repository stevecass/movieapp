app.factory('GetMovieJson',['$http', function($http) {
  return $http.get('http://mxngyn.com/movieapp/movies.json').success(function(data) {
  return data;
  }).error(function(err) {
    return err;
    });
}]);