app.factory('SearchQuery', [function (queryWord){
  return {
    keyword: function() {
      return queryWord;
    }
  };
}]);