// $(function(){
// //.keyup means on key press. might need for webpage migration
//     $('#name').keyup(function(){
//         $('#search').text('Search ' + $('#name').val())
//     })
//
//     $('#searchsnopes').click(function(){
//     var snopesUrl = "https://www.snopes.com/?s=" + $('#name').val();
//     var createData = {
//         "url": snopesUrl,
//         "type": "popup",
//         "top": 5,
//         "left": 5,
//         "width": screen.availWidth/2,
//         "height": screen.availHeight/2
//     };
//     chrome.windows.create(createData, function(){});
//   });
// });
/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.meaningcloud.com/summarization-1.0",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "key": "c0c3254a3dafb65171986039d2d6130f",
    "url": "https://babylonbee.com/news/playing-christmas-music-thanksgiving-now-federal-crime/",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});*/



chrome.browserAction.onClicked.addListener(function(activeTab)
{

    var oldURL = "https://babylonbee.com/news/playing-christmas-music-thanksgiving-now-federal-crime/"
    // var newURL = activeTab.url;
    var newURL = "https://www.snopes.com/playing-christmas-music-federal-crime/";
    chrome.tabs.create({ url: oldURL });
    chrome.tabs.create({ url: newURL });
});
