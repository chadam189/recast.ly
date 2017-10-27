class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      collection: exampleVideoData,
    };
  }
  

  
  
  selected(item) { 
    this.setState({
      currentVideo: item
    });
  }
  
  componentDidMount () {
    this.props.searchYouTube({query: 'soccer'}, this.setNewVideoData.bind(this) );
  } 
  
  onSearchButtonClick () {
    var searchTerm = $('#searchBar').val();
    if (searchTerm !== '') {
      this.props.searchYouTube({query: searchTerm}, this.setNewVideoData.bind(this));
    } 
  } 
  
  //call onSearchButtonClick every few seconds
  
  
  
  
  
  setNewVideoData(data) {
    this.setState({
      collection: data.items,
      currentVideo: data.items[0]
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            
            <div><Search onSearch={this.onSearchButtonClick.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.collection} onSelect={this.selected.bind(this)}/></div>
          </div>
        </div>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


//<div><Search newSearch={this.searched.bind(this)}/></div>

 // +  