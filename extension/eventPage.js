var menuItem = {
    "id": "Snopesit",
    "title": "Snopesit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}


chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "Snopesit" && clickData.selectionText){
        var snopesURL = "https://www.snopes.com/?s=" + fixedEncodeURI(clickData.selectionText);

        var createData = {
            "url": snopesURL,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth,
            "height": screen.availHeight
        };
        chrome.windows.create(createData, function(){});
    }
});
