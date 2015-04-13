app.factory('GetMovieJson',['$http', function($http) {
  return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0.json?apikey=j2efeebhdf9fd92447c7kcsr&callback=JSON_CALLBACK').success(function(data) {
  return data.links.movies;
  }).error(function(err) {
    return err;
    });
}]);