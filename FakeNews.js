$(document).ready(function() {
    $("#snopes").html('<object data="https://www.snopes.com/playing-christmas-music-federal-crime/"/>');
    if($('.rating').hasClass('false')) {
        alert("false");
    }
})

$('#submit').click(function() {
    urlProcess();
})

function urlProcess() {
  var x=document.getElementById("url");
  var text = x.elements[0].value;
  document.getElementById("dis_url").innerHTML = text;
}

function getResult() {
    $('.claim').hide();
}
