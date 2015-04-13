app.factory('GetMovieJson',['$resource', function($resource) {
 return $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json', { callback: 'JSON_CALLBACK'}, {
      query: {
        method: 'JSONP',
        params: { apikey: 'j2efeebhdf9fd92447c7kcsr' }
      }
   })
}]);