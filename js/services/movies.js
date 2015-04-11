app.factory('SearchQuery', function(){
  var data = { MovieQuery: "" };
  return {
    getSearchQuery: function () {
      return data.MovieQuery;
    },
    setSearchQuery: function (query) {
      data.MovieQuery = query;
    }
  };
});

app.factory('movies', ['$http', function($http) {
  return $http.get('http://mxngyn.com/movieapp/movies.json')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);