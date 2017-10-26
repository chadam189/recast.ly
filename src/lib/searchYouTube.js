// window.testYTData = [];

window.defaultCallback = function (data) { 
  console.log('data: ' + data);
  return data.items;
};

// window.defaultOptions = {
//   max: 5, 
//   part: 'snippet', 
//   query: query, 
//   key: YOUTUBE_API_KEY
// };

var searchYouTube = (options, callback = defaultCallback) => {

  const YTURL = 'https://www.googleapis.com/youtube/v3/search';
  //get
    // url, data, success callback, dataType
  let dataFilter = {
    q: options.query || 'dogs',
    maxResults: options.max || 5, 
    key: options.key || YOUTUBE_API_KEY,
    videoEmbeddable: true, 
    type: 'video',
    part: 'snippet'
  };

  $.get(YTURL, dataFilter, callback);
  
};

window.searchYouTube = searchYouTube;



// var Videos = Backbone.Collection.extend({

//   model: Video,
  
//   url: 'https://www.googleapis.com/youtube/v3/search',
  
//   search: function(query) {
//     this.fetch({
//       url: this.url,
//       type: 'GET',
//       dataType: 'json',
//       data: {
//         maxResults: '5',
//         part: 'snippet',
//         q: query,
//         key: window.YOUTUBE_API_KEY
//       }, success: function () {
//         console.log('we did it');
//       }, error: function () {
//         console.log('we effed it up it');
//       }
//     });
//   },
  
//   parse: function(data) {
//     return data.items;
//   },

// });

// $.ajax({
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });

// $.get( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });