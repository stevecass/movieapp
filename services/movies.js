app.factory('movies', ['$http', function($http) {
  return $http.get('movies.json')
            .success(function(data) {
              console.log(data)
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);