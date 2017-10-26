class App extends React.Component {
  constructor(props) {
    super(props);
    var videos = exampleVideoData;
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={{}}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.videos}/></div>
          </div>
        </div>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
