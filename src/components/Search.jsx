var Search = (props) => {
  
  var onSearchButtonClick = () => {
    var searchTerm = $('#searchBar').val();
    if (searchTerm !== '') {
      var success = function (data) {
        props.newSearch(data.items);
        console.log(data.items);
      };
      searchYouTube({query: searchTerm}, success);
      // console.log('data: ', newData);
      // props.newSearch(newData);
    } else {
      // do nothing
    }
  };  
  
  return (
    <div className="search-bar form-inline">
      <input className="form-control" id="searchBar" type="text" />
      <button className="btn hidden-sm-down" onClick={onSearchButtonClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );

};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
