app.factory('SearchQuery', [function (queryWord) {
  keyword = "";
  function setData(queryWord) {
    console.log(queryWord);
      keyword = queryWord;
  }

  return {
      getData: function() {
        return {
          keyword: keyword,
        }
      },
      setData: setData
  }
}]);