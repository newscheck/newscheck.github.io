$(function(){
//.keyup means on key press. might need for webpage migration
    $('#name').keyup(function(){
        $('#search').text('Search ' + $('#name').val())
    })

    $('#searchsnopes').click(function(){
    var snopesUrl = "https://www.snopes.com/?s=" + $('#name').val();
    var createData = {
        "url": snopesUrl,
        "type": "popup",
        "top": 5,
        "left": 5,
        "width": screen.availWidth/2,
        "height": screen.availHeight/2
    };
    chrome.windows.create(createData, function(){});
  });
});
