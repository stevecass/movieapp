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
