// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */



 function parseQuery(query) {
     var i = 0;
     var parsed = "";
     while(i < query.length) {
         if(query.charAt(i) == " ") {
             parsed += "%20";
         } else {
             parsed += query.charAt(i);
         }
         i++;
     }
     return parsed;
 }

 function reqListener() {
     var json = JSON.parse(this.responseText);
     var item = json.items[0].link;
     console.log(item);
     chrome.tabs.create({ url: item });
 }

 function sendRequest(text){
     var req = new XMLHttpRequest();
     req.addEventListener("load", reqListener);
     req.open(
         "GET",
         "https://www.googleapis.com/customsearch/v1?key=AIzaSyCd7ouZrmNZQFKDtMBm01IRyxQ16AbD9x4&q="+parseQuery(text)+"&cx=011041634169874731040:dq3jxn_l6wg"
     );
     req.send();
 }
//
//  chrome.tabs.executeScript( {
//   code: "window.getSelection().toString();"
// }, function(selection) {
//   document.getElementById("output").value = selection[0];
// });

 chrome.browserAction.onClicked.addListener(function(activeTab)
 {
     var text = "Christmas Music Before Thanksgiving Federal Crime";
     chrome.tabs.executeScript({
         code:"window.getSelection().toString();"

     }, function(selection) {
         sendRequest(selection[0]);
     })
     // console.log(text);
     // sendRequest(text);
     // var newURL = "https://www.snopes.com/playing-christmas-music-federal-crime/";
 });
