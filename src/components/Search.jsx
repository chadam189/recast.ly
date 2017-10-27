var Search = (props) => {
  
  return (
    <div className="search-bar form-inline">
      <input onChange={props.onSearch} className="form-control" id="searchBar" type="text" />
      <button className="btn hidden-sm-down" onClick={props.onSearch}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );

};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
