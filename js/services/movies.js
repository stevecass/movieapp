app.factory('GetMovieJson',['$http', function($http) {
  return $http.get('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=j2efeebhdf9fd92447c7kcsr').success(function(data) {
  return data;
  }).error(function(err) {
    return err;
    });
}]);