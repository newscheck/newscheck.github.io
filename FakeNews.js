$(document).ready(function() {
    api();
})

$('#submit').click(function() {
    urlProcess();
})

function reqListener() {
    var json = JSON.parse(this.responseText);
    var item = json.items[0].link;
    console.log(item);
}

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

$('#api-load').click(function(){
    var text = "Christmas Music Before Thanksgiving Federal Crime";
    console.log(parseQuery(text));
    var req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open(
        "GET",
        "https://www.googleapis.com/customsearch/v1?key=AIzaSyCd7ouZrmNZQFKDtMBm01IRyxQ16AbD9x4&q="+parseQuery(text)+"&cx=011041634169874731040:dq3jxn_l6wg"
    );
    req.send();
})



function urlProcess() {
  var x=document.getElementById("url");
  var text = x.elements[0].value;
  document.getElementById("dis_url").innerHTML = text;
}

function getResult() {
    $('.claim').hide();
}

var jsondata = {
     "links":[
         {source: "algorithms cormen", target: "irodov", type: "default"},
         {source: "algorithms cormen", target: "skienna", type: "default"},
         {source: "irodov", target: "skienna", type: "default"},
         {source: "irodov", target: "algorithms cormen", type: "default"}
],
    "data":[
        {node: "algorithms cormen", data: "bible of algos"},
        {node: "irodov", data: "bibile of physics"},
        {node: "skienna", data: "cool book"}
    ]
}

var links = jsondata.links;

$('#api-load').click(function() {
    $('#results').html('hi');
    $('#results').html("<a href=\""+results.items[0].link+"\">Result </a>");
})



var results = {
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - Is Playing Christmas Music Before Thanksgiving Now a Federal Crime",
    "totalResults": "97",
    "searchTerms": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime",
    "count": 10,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "011041634169874731040:dq3jxn_l6wg"
   }
  ],
  "nextPage": [
   {
    "title": "Google Custom Search - Is Playing Christmas Music Before Thanksgiving Now a Federal Crime",
    "totalResults": "97",
    "searchTerms": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime",
    "count": 10,
    "startIndex": 11,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "011041634169874731040:dq3jxn_l6wg"
   }
  ]
 },
 "context": {
  "title": "Snopes"
 },
 "searchInformation": {
  "searchTime": 0.514278,
  "formattedSearchTime": "0.51",
  "totalResults": "97",
  "formattedTotalResults": "97"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Is Playing Christmas Music Before Thanksgiving Now a Federal ...",
   "htmlTitle": "\u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal\u003c/b\u003e ...",
   "link": "https://www.snopes.com/playing-christmas-music-federal-crime/",
   "displayLink": "www.snopes.com",
   "snippet": "Take the most recent legislation passed by Congress, for instance: as of Tuesday\n, it is now a federal crime to play Christmas music before Thanksgiving.",
   "htmlSnippet": "Take the most recent legislation passed by Congress, for instance: as of Tuesday\u003cbr\u003e\n, it is \u003cb\u003enow a federal crime\u003c/b\u003e to \u003cb\u003eplay Christmas music before Thanksgiving\u003c/b\u003e.",
   "cacheId": "QXG-Un7jtJAJ",
   "formattedUrl": "https://www.snopes.com/playing-christmas-music-federal-crime/",
   "htmlFormattedUrl": "https://www.snopes.com/\u003cb\u003eplaying\u003c/b\u003e-\u003cb\u003echristmas\u003c/b\u003e-\u003cb\u003emusic\u003c/b\u003e-\u003cb\u003efederal\u003c/b\u003e-\u003cb\u003ecrime\u003c/b\u003e/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "311",
      "height": "162",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9kHas75mGib6AARIFEqMypdXx1jCUnHQMg8H0ql6JzC2s3e12D1JM6Lo"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     }
    ],
    "organization": [
     {
      "name": "Snopes"
     },
     {
      "name": "The Babylon Bee",
      "sameas": "http://babylonbee.com/news/playing-christmas-music-thanksgiving-now-federal-crime/"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?",
      "description": "A satirical web site spread the false claim that Congress passed a law banning the playing of Christmas music before Thanksgiving, even in private homes.",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving."
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "news_keywords": "babylon bee, christmas, fake news, thanksgiving",
      "original-source": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "og:locale": "en_US",
      "og:type": "article",
      "og:title": "FACT CHECK: Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?",
      "og:description": "A satirical web site spread the false claim that Congress passed a law banning the playing of Christmas music before Thanksgiving, even in private homes.",
      "og:url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "og:site_name": "Snopes.com",
      "article:publisher": "https://www.facebook.com/snopes",
      "article:tag": "babylon bee",
      "article:section": "Fact Check",
      "article:published_time": "8 November 2017",
      "article:modified_time": "2017-11-08T17:37:57-08:00",
      "og:updated_time": "2017-11-08T17:37:57-08:00",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg",
      "twitter:card": "summary_large_image",
      "twitter:description": "A satirical web site spread the false claim that Congress passed a law banning the playing of Christmas music before Thanksgiving, even in private homes.",
      "twitter:title": "FACT CHECK: Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_tw.jpg",
      "twitter:creator": "@snopes",
      "dc.date.issued": "2017-11-08T11:42:20-08:00",
      "boomtrain:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=375,211",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "creativework": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "thanksgiving Archives | Snopes.com",
   "htmlTitle": "\u003cb\u003ethanksgiving\u003c/b\u003e Archives | Snopes.com",
   "link": "https://www.snopes.com/tag/thanksgiving/",
   "displayLink": "www.snopes.com",
   "snippet": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime? 8 \nNovember ... Did Trump Mock Trudeau for Celebrating Thanksgiving Six Weeks \nEarly?",
   "htmlSnippet": "\u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal Crime\u003c/b\u003e? 8 \u003cbr\u003e\nNovember ... Did Trump Mock Trudeau for Celebrating Thanksgiving Six Weeks \u003cbr\u003e\nEarly?",
   "cacheId": "Ju4TbkPbiDIJ",
   "formattedUrl": "https://www.snopes.com/tag/thanksgiving/",
   "htmlFormattedUrl": "https://www.snopes.com/tag/\u003cb\u003ethanksgiving\u003c/b\u003e/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/canadian_thanskgiving_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2014/11/slaves.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2013/11/3226776737_9e06c29f99_o.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving.",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?"
     },
     {
      "datepublished": "2017-10-13T11:36:21+00:00",
      "datemodified": "2017-10-13T08:37:05+00:00",
      "claimreviewed": "President Trump mocked Prime Minister Trudeau for celebrating Thanksgiving six weeks early.",
      "url": "https://www.snopes.com/trump-mocks-trudeau-celebrating-thanksgiving-six-weeks-early/",
      "headline": "Did Trump Mock Trudeau for Celebrating Thanksgiving Six Weeks Early?"
     },
     {
      "datepublished": "2013-12-01T00:00:00+00:00",
      "datemodified": "2016-11-20T06:50:44+00:00",
      "claimreviewed": "The term \"Black Friday\" originated with the practice of selling off slaves on the day after Thanksgiving.",
      "url": "https://www.snopes.com/holidays/thanksgiving/blackfriday.asp",
      "headline": "How Did ‘Black Friday’ Get Its Name?"
     },
     {
      "datepublished": "2003-06-06T00:00:00+00:00",
      "datemodified": "2013-11-26T07:02:18+00:00",
      "claimreviewed": "Eating turkey makes people especially drowsy.",
      "url": "https://www.snopes.com/food/ingredient/turkey.asp",
      "headline": "Turkey Makes You Sleepy?"
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "og:locale": "en_US",
      "og:type": "object",
      "og:title": "thanksgiving Archives | Snopes.com",
      "og:url": "https://www.snopes.com/tag/thanksgiving/",
      "og:site_name": "Snopes.com",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "thanksgiving Archives | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "creativework": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     },
     {
      "datepublished": "2017-10-13T11:36:21+00:00"
     },
     {
      "datepublished": "2013-12-01T00:00:00+00:00"
     },
     {
      "datepublished": "2003-06-06T00:00:00+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "christmas Archives | Snopes.com",
   "htmlTitle": "\u003cb\u003echristmas\u003c/b\u003e Archives | Snopes.com",
   "link": "https://www.snopes.com/tag/christmas/",
   "displayLink": "www.snopes.com",
   "snippet": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime? ... \nbanning the playing of Christmas music before Thanksgiving, even in private \nhomes.",
   "htmlSnippet": "\u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal Crime\u003c/b\u003e? ... \u003cbr\u003e\nbanning the playing of Christmas music before Thanksgiving, even in private \u003cbr\u003e\nhomes.",
   "cacheId": "d7bQcZuoEG0J",
   "formattedUrl": "https://www.snopes.com/tag/christmas/",
   "htmlFormattedUrl": "https://www.snopes.com/tag/\u003cb\u003echristmas\u003c/b\u003e/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/AP17318596265771.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/09/christmas_december_25_calendar_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/police_line_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/cardboard_trash_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/trump_kids_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2014/12/boxing.jpg?resize=640,427",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2014/12/santacoke.jpg?resize=600,327",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/school_play_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/christmas-tree.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/shutterstock_526520869.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/shutterstock_227299135.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/shutterstock_519754525.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/Eric-Schmitt-Matzen.jpg?resize=750,365",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/clinton_portrait_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/christmas_tree_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/12/white-house-creche.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/11/rudolph-movie.jpg?resize=717,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving.",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?"
     },
     {
      "datepublished": "2017-09-13T13:10:47+00:00",
      "datemodified": "2017-09-13T13:11:39+00:00",
      "claimreviewed": "The Muslim mayor of \"Blairsville, Michigan\" has outlawed Christmas within the city's limits.",
      "url": "https://www.snopes.com/did-a-muslim-mayor-outlaw-christmas-2017/",
      "headline": "Did a Muslim Mayor Outlaw Christmas in 2017?"
     },
     {
      "datepublished": "2016-12-30T00:00:00+00:00",
      "datemodified": "2016-12-30T16:30:21+00:00",
      "claimreviewed": "No arrests were made after thousands of young people got into a massive brawl at a Kentucky mall because everyone involved was white.",
      "url": "https://www.snopes.com/thousands-white-teens-brawled-mall-nobody-arrested/",
      "headline": "Thousands of White Teens Brawled at a Mall and Nobody Was Arrested?"
     },
     {
      "datepublished": "2016-12-27T00:00:00+00:00",
      "datemodified": "2016-12-27T17:33:20+00:00",
      "claimreviewed": "Thieves select homes to break into after Christmas by taking note of boxes curbed as trash or recycling.",
      "url": "https://www.snopes.com/do-thieves-use-trash-to-case-homes-for-expensive-christmas-presents/",
      "headline": "Do Thieves Use Trash to Case Homes for Expensive Christmas Presents?"
     },
     {
      "datepublished": "2000-11-07T00:00:00+00:00",
      "datemodified": "2016-12-26T10:08:40+00:00",
      "claimreviewed": "The name of Boxing Day comes from the need to rid the house of empty boxes the day after Christmas",
      "url": "https://www.snopes.com/holidays/christmas/boxingday.asp",
      "headline": "Boxing Day"
     },
     {
      "datepublished": "2001-12-18T00:00:00+00:00",
      "datemodified": "2016-12-25T10:00:56+00:00",
      "claimreviewed": "The modern image of Santa Claus was created by the \u003cNOBR\u003eCoca-Cola\u003c/NOBR\u003e Company.",
      "url": "https://www.snopes.com/holidays/christmas/santa/cocacola.asp",
      "headline": "Did Coca-Cola Invent the Modern Image of Santa Claus?"
     },
     {
      "datepublished": "2016-12-20T00:00:00+00:00",
      "datemodified": "2016-12-21T12:12:41+00:00",
      "claimreviewed": "Centerville Elementary School in Lancaster, Pennsylvania, canceled a Christmas play because two parents complained about reference to God.",
      "url": "https://www.snopes.com/lancasters-centerville-elementary-school-cancels-offensive-christmas-play/",
      "headline": "Lancaster’s Centerville Elementary School Cancels ‘Offensive’ Christmas Play"
     },
     {
      "datepublished": "2006-02-26T00:00:00+00:00",
      "datemodified": "2016-12-17T16:51:28+00:00",
      "claimreviewed": "Transcript reproduces Ben Stein's television commentary about the observance of Christmas.",
      "url": "https://www.snopes.com/politics/soapbox/confessions.asp",
      "headline": "Confessions for the Holidays"
     },
     {
      "datepublished": "2016-12-15T00:00:00+00:00",
      "datemodified": "2016-12-15T17:50:29+00:00",
      "claimreviewed": "A group of Muslims tore down a Christmas tree in Italy.",
      "url": "https://www.snopes.com/muslim-migrants-tore-down-a-christmas-tree-in-italy/",
      "headline": "‘Muslim Migrants’ Tore Down a Christmas Tree in Italy?"
     },
     {
      "datepublished": "2016-12-14T00:00:00+00:00",
      "datemodified": "2016-12-14T16:27:22+00:00",
      "claimreviewed": "A man working as Santa Claus in a Wisconsin mall beat up a child molester after a child confided that her stepfather had been \"touching\" her.",
      "url": "https://www.snopes.com/mall-santa-beat-up-child-molester/",
      "headline": "Mall Santa Beat Up Child Molester?"
     },
     {
      "datepublished": "2016-12-14T00:00:00+00:00",
      "datemodified": "2016-12-14T09:54:39+00:00",
      "claimreviewed": "A number advertised on a Facebook page lets callers \"leave messages\" for Santa Claus.",
      "url": "https://www.snopes.com/santas-phone-number/",
      "headline": "Santa’s Phone Number"
     },
     {
      "datepublished": "2016-12-13T00:00:00+00:00",
      "datemodified": "2016-12-13T14:30:23+00:00",
      "claimreviewed": "A Tennessee boy died in the arms of a local man portraying Santa Claus during a hospital visit.",
      "url": "https://www.snopes.com/5-year-old-boy-dies-in-santas-arms/",
      "headline": "5-Year-Old Boy Dies in Santa’s Arms"
     },
     {
      "datepublished": "2016-12-07T00:00:00+00:00",
      "datemodified": "2016-12-07T11:23:20+00:00",
      "claimreviewed": "President Obama hung a portrait of Hillary Clinton at the White House as part of his 2016 Christmas decorations.",
      "url": "https://www.snopes.com/clinton-portrait-hung-christmas-decorations-white-house/",
      "headline": "Clinton Portrait Hung with Christmas Decorations at White House"
     },
     {
      "datepublished": "2016-12-05T00:00:00+00:00",
      "datemodified": "2016-12-05T20:23:35+00:00",
      "claimreviewed": "If you use a real Christmas tree, you run the risk of bringing Lyme disease-transmitting ticks into your home.",
      "url": "https://www.snopes.com/christmas-tree-probably-not-full-lyme-disease-bearing-ticks/",
      "headline": "Your Christmas Tree Is (Probably) Not Full of Lyme Disease Bearing Ticks"
     },
     {
      "datepublished": "2016-12-05T00:00:00+00:00",
      "datemodified": "2016-12-05T13:07:27+00:00",
      "claimreviewed": "The White House decided not to display a Christmas Nativity scene in 2016.",
      "url": "https://www.snopes.com/no-nativity-scenes-white-house/",
      "headline": "No Nativity Scenes at the White House?"
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "UNPROVEN",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "UNPROVEN",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "UNPROVEN",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "MIXTURE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "UNPROVEN",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "MOSTLY FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "MOSTLY FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "og:locale": "en_US",
      "og:type": "object",
      "og:title": "christmas Archives | Snopes.com",
      "og:url": "https://www.snopes.com/tag/christmas/",
      "og:site_name": "Snopes.com",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "christmas Archives | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "creativework": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     },
     {
      "datepublished": "2017-09-13T13:10:47+00:00"
     },
     {
      "datepublished": "2016-12-30T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-27T00:00:00+00:00"
     },
     {
      "datepublished": "2000-11-07T00:00:00+00:00"
     },
     {
      "datepublished": "2001-12-18T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-20T00:00:00+00:00"
     },
     {
      "datepublished": "2006-02-26T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-15T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-14T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-14T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-13T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-07T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-05T00:00:00+00:00"
     },
     {
      "datepublished": "2016-12-05T00:00:00+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2017-11-14T12:56:26+00:00",
      "datemodified": "2017-11-14T09:56:33+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/14/consumer-safety-group-unveils-worst-toys-list/",
      "headline": "Consumer Safety Group Unveils Its ‘Worst Toys’ List"
     },
     {
      "datepublished": "2016-12-26T00:00:00+00:00",
      "datemodified": "2016-12-26T21:50:37+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2016/12/26/rnc-new-king-christmas-message/",
      "headline": "RNC Called President-Elect Trump a ‘New King’ in a Christmas Message?"
     },
     {
      "datepublished": "2016-11-29T00:00:00+00:00",
      "datemodified": "2016-11-29T16:51:43+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2016/11/29/rudolph-the-red-nosed-reindeer-explained/",
      "headline": "Rudolph the Red-Nosed Reindeer, Explained"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "What's New | Snopes.com",
   "htmlTitle": "What&#39;s New | Snopes.com",
   "link": "https://www.snopes.com/whats-new/page/6/?utm_source=bme&utm_medium=manual&utm_campaign=wednesday_update&bt_ee=NQDd5ZYWqSgDNnTOY8onVAUV8dqEr%20jhYCLvx3clCmasVeIfGrRpYVrdBPHMBwB2&bt_ts=1503522014429",
   "displayLink": "www.snopes.com",
   "snippet": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime? ... \nbanning the playing of Christmas music before Thanksgiving, even in private \nhomes.",
   "htmlSnippet": "\u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal Crime\u003c/b\u003e? ... \u003cbr\u003e\nbanning the playing of Christmas music before Thanksgiving, even in private \u003cbr\u003e\nhomes.",
   "cacheId": "ELAMKjxSxjAJ",
   "formattedUrl": "https://www.snopes.com/whats-new/page/6/?...",
   "htmlFormattedUrl": "https://www.snopes.com/whats-new/page/6/?...",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "453",
      "height": "111",
      "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRr9_QkOIh0e4L_Bp6Gzpk1joLga5K986cSC7XvwQ8iAoLs4RF9hrWj9o"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/danica_roem_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/AP17311584709637.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/AP17310797987556.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/shinzo_abe_trump_fall_golf_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Ivanka_Trump_Disney_ABC_Television_Group_Flickr_FB.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/planned_parenthood_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/jacob-thompson-snopes_cropped_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/AP17311832861511.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Tony_Podesta_2009_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/shopping_rat_handle_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Marshalls_store_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/roy_halladay_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/north_american_black_bear_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/police_line_do_not_cross_tape_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/payroll_statement_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Untitled-design-10.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/first_baptist_church_sutherland_springs_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-11-08T13:10:37+00:00",
      "datemodified": "2017-11-08T13:10:37+00:00",
      "claimreviewed": "Danica Roem is the first trans state legislator in the U.S.",
      "url": "https://www.snopes.com/is-danica-roem-the-first-trans-state-lawmaker-in-the-us/",
      "headline": "Is Danica Roem the First Transgender State Legislator in the U.S.?"
     },
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving.",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?"
     },
     {
      "datepublished": "2017-11-08T09:44:14+00:00",
      "datemodified": "2017-11-08T09:44:14+00:00",
      "claimreviewed": "A video shows Prime Minister Shinzo Abe rolling down a golf bunker.",
      "url": "https://www.snopes.com/shinzo-abe-roll-golf-bunker-round-trump/",
      "headline": "Did Shinzo Abe Tumble Down a Sand Trap During Golf with Trump?"
     },
     {
      "datepublished": "2017-11-08T10:54:57+00:00",
      "datemodified": "2017-11-08T09:07:32+00:00",
      "claimreviewed": "In a November 2017 interview, Ivanka Trump \"scolded poor parents for not investing in food.\"",
      "url": "https://www.snopes.com/ivanka-trump-food-poor-parents/",
      "headline": "Did Ivanka Trump ‘Scold’ Poor Parents for Not ‘Investing’ in Food?"
     },
     {
      "datepublished": "2017-11-08T08:08:41+00:00",
      "datemodified": "2017-11-08T08:08:41+00:00",
      "claimreviewed": "A Planned Parenthood employee was arrested for using tissue from aborted fetuses as Halloween decorations.",
      "url": "https://www.snopes.com/planned-parenthood-employee-charged-using-aborted-babies-halloween-props/",
      "headline": "Was a Planned Parenthood Employee Charged with Using Aborted Babies as Halloween Props?"
     },
     {
      "datepublished": "2017-11-08T07:11:18+00:00",
      "datemodified": "2017-11-08T07:20:17+00:00",
      "claimreviewed": "The family of a terminally ill boy is asking people to send him Christmas cards.",
      "url": "https://www.snopes.com/jacob-thompson-xmas-cards/",
      "headline": "Terminally Ill Nine-Year-Old Hopes for Christmas Cards?"
     },
     {
      "datepublished": "2017-11-07T17:15:27+00:00",
      "datemodified": "2017-11-07T17:15:27+00:00",
      "claimreviewed": "Lobbyist Tony Podesta has been arrested by United States Marshals in relation to Special Counsel Bob Mueller's Russia probe.",
      "url": "https://www.snopes.com/has-tony-podesta-been-arrested-in-the-mueller-investigation/",
      "headline": "Has Tony Podesta Been Arrested in the Mueller Investigation?"
     },
     {
      "datepublished": "2017-11-07T15:50:30+00:00",
      "datemodified": "2017-11-07T16:42:32+00:00",
      "claimreviewed": "Law enforcement agencies recommend that people wash the handle on shopping carts before using them to avoid potential exposure to fentanyl.",
      "url": "https://www.snopes.com/fentanyl-overdose-residue-shopping-cart/",
      "headline": "Police Chief Warns of Fentanyl Overdose Risk from Residue on Shopping Carts?"
     },
     {
      "datepublished": "2017-11-07T15:22:28+00:00",
      "datemodified": "2017-11-07T15:22:28+00:00",
      "claimreviewed": "Marshalls employees in Puerto Rico are still being paid despite the damage to stores there caused by Hurricane Maria.",
      "url": "https://www.snopes.com/are-marshalls-and-tj-maxx-still-paying-employees-in-puerto-rico/",
      "headline": "Is Clothing Retailer Marshalls Still Paying Employees in Puerto Rico?"
     },
     {
      "datepublished": "2017-11-07T13:18:01+00:00",
      "datemodified": "2017-11-07T13:18:01+00:00",
      "claimreviewed": "A New Jersey man named Michael Lombardi killed a hibernating bear.",
      "url": "https://www.snopes.com/did-michael-lombardi-kill-a-hibernating-bear-in-new-jersey/",
      "headline": "Did Michael Lombardi Kill a Hibernating Bear in New Jersey?"
     },
     {
      "datepublished": "2017-11-07T09:33:48+00:00",
      "datemodified": "2017-11-07T09:34:41+00:00",
      "claimreviewed": "A Baltimore woman who leaked the imminent indictment of Roger Clinton, Jr. was found murdered.",
      "url": "https://www.snopes.com/was-grand-juror-clinton-probe-dead/",
      "headline": "Was a Grand Juror in a Clinton Probe Found Dead?"
     },
     {
      "datepublished": "2017-11-07T09:07:10+00:00",
      "datemodified": "2017-11-07T09:09:58+00:00",
      "claimreviewed": "The Texas church shooter was an atheist and was also on the payroll of the Democratic National Committee.",
      "url": "https://www.snopes.com/texas-church-shooter-atheist-dnc-payroll/",
      "headline": "Was the Texas Church Shooter an Atheist on the DNC Payroll?"
     },
     {
      "datepublished": "2017-11-06T17:05:31+00:00",
      "datemodified": "2017-11-06T17:05:33+00:00",
      "claimreviewed": "Snapchat, a popular messaging service, announced in November 2017 that it is being closed down by the end of the year.",
      "url": "https://www.snopes.com/snapchat-shutting-end-2017-prank/",
      "headline": "Is Snapchat Shutting Down by the End of 2017?"
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "UNPROVEN",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "NO RATING",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "OUTDATED",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "TRUE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "news_keywords": "the latest, what's new",
      "original-source": "https://www.snopes.com/whats-new/",
      "og:locale": "en_US",
      "og:type": "article",
      "og:title": "What's New on Snopes.com",
      "og:description": "All the latest rumors, urban legends, myths and misinformation gathered together in one nifty list.",
      "og:url": "https://www.snopes.com/whats-new/",
      "og:site_name": "Snopes.com",
      "article:publisher": "https://www.facebook.com/snopes",
      "article:tag": "The Latest",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2015/06/wn-1.png",
      "twitter:card": "summary_large_image",
      "twitter:description": "All the latest rumors, urban legends, myths and misinformation gathered together in one nifty list.",
      "twitter:title": "What's New on Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2015/06/wn-1.png",
      "twitter:creator": "@snopes",
      "dc.date.issued": "2015-06-26T16:55:12-08:00",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "webpage": [
     {
      "maincontentofpage": "What's New 2K Page 6 of 732 FALSE Fact Check Politics Is Danica Roem the First Transgender State Legislator in the U.S.? 8 November 2017 Roem's victory in Virginia came 25 years after Althea...",
      "headline": "What's New"
     }
    ],
    "creativework": [
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-08T10:54:57+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-08T07:11:18+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-07T15:50:30+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-07T09:33:48+00:00"
     },
     {
      "datepublished": "2017-11-07T09:07:10+00:00"
     },
     {
      "datepublished": "2017-11-06T17:05:31+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2015/06/wn-1.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2017-11-08T14:35:07+00:00",
      "datemodified": "2017-11-08T11:35:11+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/08/boy-rare-disease-gets-brand-new-skin-gene-therapy/",
      "headline": "Boy With Rare Disease Gets Brand New Skin With Gene Therapy"
     },
     {
      "datepublished": "2017-11-08T14:30:15+00:00",
      "datemodified": "2017-11-08T11:30:19+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/08/gunman-fled-mental-health-center-threatened-superiors/",
      "headline": "Gunman Once Fled Mental Health Center, Threatened Superiors"
     },
     {
      "datepublished": "2017-11-08T08:37:52+00:00",
      "datemodified": "2017-11-08T05:37:59+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/08/transgender-woman-wins-virginia-house-seat-making-history/",
      "headline": "Transgender Woman Wins Virginia House Seat, Making History"
     },
     {
      "datepublished": "2017-11-07T13:33:15+00:00",
      "datemodified": "2017-11-07T13:34:02+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/07/blue-jays-phillies-pitcher-dies-plane-crash/",
      "headline": "Former Blue Jays, Phillies Pitcher Roy Halladay Dies in Plane Crash"
     },
     {
      "datepublished": "2017-11-06T16:08:35+00:00",
      "datemodified": "2017-11-06T16:08:35+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/06/men-hailed-heroes-chasing-texas-church-shooter/",
      "headline": "Men Hailed as Heroes for Chasing Texas Church Shooter"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "babylon bee Archives | Snopes.com",
   "htmlTitle": "babylon bee Archives | Snopes.com",
   "link": "https://www.snopes.com/tag/babylon-bee/",
   "displayLink": "www.snopes.com",
   "snippet": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime? ... \nbanning the playing of Christmas music before Thanksgiving, even in private \nhomes.",
   "htmlSnippet": "\u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal Crime\u003c/b\u003e? ... \u003cbr\u003e\nbanning the playing of Christmas music before Thanksgiving, even in private \u003cbr\u003e\nhomes.",
   "cacheId": "R81jefbd3OMJ",
   "formattedUrl": "https://www.snopes.com/tag/babylon-bee/",
   "htmlFormattedUrl": "https://www.snopes.com/tag/babylon-bee/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/08/Untitled-design-3-2.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/07/FACT-CHECK-Steven-Furtick-Signs-Six-Year-110-Million-Contract-with-Lakewood-Church.png?resize=696,394",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/07/creflo_dollar_pulpit_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/07/chris_tomlin_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/06/bible_prayer_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/06/chick-fil-a-photo.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/11/Police-Calm-Millennial-Protesters-By-Handing-Out-Participation-Trophies.png?resize=696,394",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/07/joel-osteen1.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/07/joel-osteen1.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/08/babylon-bee.jpg?resize=750,400",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/07/kermit_gosnell_DNC.jpg?resize=696,394",
      "width": "865",
      "height": "452"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving.",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?"
     },
     {
      "datepublished": "2017-08-29T14:10:24+00:00",
      "datemodified": "2017-08-29T14:23:34+00:00",
      "claimreviewed": "Joel Osteen sailed through flooded Houston distributing copies of his book \"Your Best Life Now.\"",
      "url": "https://www.snopes.com/osteen-yacht-houston-book-hurricane/",
      "headline": "Joel Osteen Sails Luxury Yacht Through Flooded Houston to Pass out Copies of His Book?"
     },
     {
      "datepublished": "2017-07-31T11:25:36+00:00",
      "datemodified": "2017-07-31T08:35:12+00:00",
      "claimreviewed": "Elevation Church Pastor Steven Furtick confirmed he signed a large \"deal\" to preach at Lakewood Church alongside Joel Osteen.",
      "url": "https://www.snopes.com/steven-furtick-signs-six-year-110-million-contract-lakewood-church/",
      "headline": "Steven Furtick Signs Six Year, $110 Million Contract with Lakewood Church?"
     },
     {
      "datepublished": "2017-07-25T14:10:05+00:00",
      "datemodified": "2017-07-25T11:10:11+00:00",
      "claimreviewed": "Televangelist Creflo Dollar's pulpit is made entirely out of hundred dollar bills.",
      "url": "https://www.snopes.com/creflo-dollar-debuts-new-pulpit-made-entirely-of-hundred-dollar-bills/",
      "headline": "Creflo Dollar Debuts New Pulpit Made Entirely of Hundred Dollar Bills?"
     },
     {
      "datepublished": "2017-07-19T10:25:10+00:00",
      "datemodified": "2017-07-19T07:38:58+00:00",
      "claimreviewed": "A federal judge ordered Christian music artist Chris Tomlin to \"stop adding choruses to perfectly good hymns.\"",
      "url": "https://www.snopes.com/federal-judge-chris-tomlin/",
      "headline": "Federal Judge Orders Chris Tomlin to Stop Adding Choruses to Perfectly Good Hymns?"
     },
     {
      "datepublished": "2017-06-07T11:44:19+00:00",
      "datemodified": "2017-06-07T09:01:20+00:00",
      "claimreviewed": "California Governor Jerry Brown signed a bill into law requiring all Christians \"to register Bibles of all sizes, shapes, and translation version as 'assault weapons.'”",
      "url": "https://www.snopes.com/california-christians-must-register-bibles-assault-weapons/",
      "headline": "California Christians Must Register Bibles as Assault Weapons?"
     },
     {
      "datepublished": "2016-12-09T00:00:00+00:00",
      "datemodified": "2016-12-09T16:48:13+00:00",
      "claimreviewed": "The Southern Baptist Convention purchased fast food chain Chick fil-A.",
      "url": "https://www.snopes.com/southern-baptist-convention-buys-chick-fil/",
      "headline": "Southern Baptist Convention Buys Chick fil-A"
     },
     {
      "datepublished": "2016-11-10T00:00:00+00:00",
      "datemodified": "2016-11-10T11:07:13+00:00",
      "claimreviewed": "Police assuaged the feelings of millennials protesting Donald Trump's victory by distributing participation trophies.",
      "url": "https://www.snopes.com/police-calm-millennial-protesters-by-handing-out-participation-trophies/",
      "headline": "Police Calm Millennial Protesters by Handing out ‘Participation Trophies’"
     },
     {
      "datepublished": "2016-10-03T00:00:00+00:00",
      "datemodified": "2016-10-03T07:43:48+00:00",
      "claimreviewed": "Preacher Joel Osteen was \"horrified\" at recently learning that Jesus was crucified.",
      "url": "https://www.snopes.com/joel-osteen-crucifixion/",
      "headline": "Horrified Joel Osteen Learns About Crucifixion"
     },
     {
      "datepublished": "2016-08-30T00:00:00+00:00",
      "datemodified": "2016-08-30T13:16:58+00:00",
      "claimreviewed": "Pastor Joel Osteen apologized for using the Lord's name in a sermon.",
      "url": "https://www.snopes.com/joel-osteen-apologizes-for-using-lords-name-in-sermon/",
      "headline": "Joel Osteen Apologizes for Using Lord’s Name in Sermon"
     },
     {
      "datepublished": "2016-08-03T00:00:00+00:00",
      "datemodified": "2016-08-03T11:59:04+00:00",
      "claimreviewed": "The Elevation Church has installed a water slide to speed up baptisms.",
      "url": "https://www.snopes.com/elevation-church-water-slide/",
      "headline": "Elevation Church Debuts Water Slide Baptismal"
     },
     {
      "datepublished": "2016-07-28T00:00:00+00:00",
      "datemodified": "2016-07-28T16:45:31+00:00",
      "claimreviewed": "Incarcerated former abortion provider Kermit Gosnell made a surprise appearance at the Democratic National Convention.",
      "url": "https://www.snopes.com/kermit-gosnell-as-surprise-dnc-speaker/",
      "headline": "Kermit Gosnell as Surprise DNC Speaker"
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "og:locale": "en_US",
      "og:type": "object",
      "og:title": "babylon bee Archives | Snopes.com",
      "og:url": "https://www.snopes.com/tag/babylon-bee/",
      "og:site_name": "Snopes.com",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "babylon bee Archives | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "creativework": [
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     },
     {
      "datepublished": "2017-08-29T14:10:24+00:00"
     },
     {
      "datepublished": "2017-07-31T11:25:36+00:00"
     },
     {
      "datepublished": "2017-07-25T14:10:05+00:00"
     },
     {
      "datepublished": "2017-07-19T10:25:10+00:00"
     },
     {
      "datepublished": "2017-06-07T11:44:19+00:00"
     },
     {
      "datepublished": "2016-12-09T00:00:00+00:00"
     },
     {
      "datepublished": "2016-11-10T00:00:00+00:00"
     },
     {
      "datepublished": "2016-10-03T00:00:00+00:00"
     },
     {
      "datepublished": "2016-08-30T00:00:00+00:00"
     },
     {
      "datepublished": "2016-08-03T00:00:00+00:00"
     },
     {
      "datepublished": "2016-07-28T00:00:00+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "fake news Archives | Snopes.com",
   "htmlTitle": "fake news Archives | Snopes.com",
   "link": "https://www.snopes.com/tag/fake-news/",
   "displayLink": "www.snopes.com",
   "snippet": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime? ... \nbanning the playing of Christmas music before Thanksgiving, even in private \nhomes.",
   "htmlSnippet": "\u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal Crime\u003c/b\u003e? ... \u003cbr\u003e\nbanning the playing of Christmas music before Thanksgiving, even in private \u003cbr\u003e\nhomes.",
   "cacheId": "xPqna_hI8z0J",
   "formattedUrl": "https://www.snopes.com/tag/fake-news/",
   "htmlFormattedUrl": "https://www.snopes.com/tag/fake-news/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Sophia_Robot_Web_Summit_Flickr_FB.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/harry_shearer_simpsons_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Untitled-design.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/cat_stealing_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/08/facebook_logo_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/AP_Facebook_FB.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/facebook_fake_news_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/Sandra_Bullock_Gage_Skidmore_Flickr_FB.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/weinstein.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/woman_pierced_frozen_urine_meme_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/child_abduction_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/10/poop_emoji_emoticon_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/01/facebook_security_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/09/morgue_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/09/police_line_tape_crime_scene_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/09/man_stuck_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/07/NASA_Warns_Disaster_Is_Near__Nibiru_Is_Headed_Straight_For_Earth_-.png?resize=750,409",
      "width": "865",
      "height": "452"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-11-13T11:17:17+00:00",
      "datemodified": "2017-11-13T10:53:25+00:00",
      "claimreviewed": "An angry mob in Saudi Arabia beheaded \"Sophia,\" a robot recently awarded citizenship.",
      "url": "https://www.snopes.com/saudi-arabia-beheads-robot/",
      "headline": "Did Saudi Arabia Behead Its First Robot Citizen?"
     },
     {
      "datepublished": "2017-11-13T10:37:36+00:00",
      "datemodified": "2017-11-13T10:37:36+00:00",
      "claimreviewed": "Actor Harry Shearer announced in November 2017 that he was leaving 'The Simpsons.'",
      "url": "https://www.snopes.com/actor-harry-shearer-leaving-simpsons/",
      "headline": "Actor Harry Shearer Leaving ‘The Simpsons?’"
     },
     {
      "datepublished": "2017-11-13T09:38:40+00:00",
      "datemodified": "2017-11-13T09:42:11+00:00",
      "claimreviewed": "Famed theoretical physicist Stephen Hawking was accused of sexual misconduct by a former student.",
      "url": "https://www.snopes.com/was-stephen-hawking-accused-misconduct/",
      "headline": "Was Stephen Hawking Accused of Sexual Misconduct?"
     },
     {
      "datepublished": "2017-11-09T18:16:01+00:00",
      "datemodified": "2017-11-09T18:16:43+00:00",
      "claimreviewed": "An elderly woman trained her 65 cats to steal items, such as jewelry, from her neighbors.",
      "url": "https://www.snopes.com/did-elderly-woman-train-cats-to-steal/",
      "headline": "Did an Elderly Woman Train 65 Cats to Steal From Her Neighbors?"
     },
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving.",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?"
     },
     {
      "datepublished": "2017-10-27T11:03:30+00:00",
      "datemodified": "2017-10-27T08:29:29+00:00",
      "claimreviewed": "In October 2017, Sandra Bullock defended President Donald Trump and Urged Hillary Clinton to leave the United States.",
      "url": "https://www.snopes.com/sandra-bullock-trump-clinton/",
      "headline": "Did Trump-Supporting Sandra Bullock Urge Hillary Clinton to Leave the United States?"
     },
     {
      "datepublished": "2017-10-21T15:49:04+00:00",
      "datemodified": "2017-10-21T17:05:43+00:00",
      "claimreviewed": "Film producer Harvey Weinstein cut a deal with the FBI to turn over \"names of elite pedophiles in Hollywood and Washington, D.C.\"",
      "url": "https://www.snopes.com/weinstein-fbi-names/",
      "headline": "Harvey Weinstein Gives Names of Hollywood and Washington, D.C. Pedophiles to FBI?"
     },
     {
      "datepublished": "2017-10-16T11:30:54+00:00",
      "datemodified": "2017-10-16T11:37:13+00:00",
      "claimreviewed": "A photograph shows a woman who was killed by a frozen shaft of urine that fell from a plane.",
      "url": "https://www.snopes.com/was-a-woman-killed-frozen-urine/",
      "headline": "Was a Woman Killed by a Frozen Shaft of Urine?"
     },
     {
      "datepublished": "2017-10-13T13:02:01+00:00",
      "datemodified": "2017-10-13T12:12:29+00:00",
      "claimreviewed": "As of October 2017, there was an \"epidemic of child abduction\" in the state of Kansas.",
      "url": "https://www.snopes.com/child-abduction-kansas/",
      "headline": "Is There an ‘Epidemic of Child Abduction’ in Kansas?"
     },
     {
      "datepublished": "2017-10-10T16:09:17+00:00",
      "datemodified": "2017-10-10T13:28:45+00:00",
      "claimreviewed": "A principal in Springfield, Ohio, was arrested for defecating on his desk during the Pledge of Allegiance.",
      "url": "https://www.snopes.com/democrat-principal-defecates-in-front-of-students-during-pledge-of-allegiance/",
      "headline": "Democrat Principal Defecates In Front Of Students During Pledge Of Allegiance?"
     },
     {
      "datepublished": "2017-09-28T11:18:37+00:00",
      "datemodified": "2017-09-28T09:45:39+00:00",
      "claimreviewed": "The FBI seized over 3,000 penises during a September 2017 raid of a morgue employee's home.",
      "url": "https://www.snopes.com/fbi-seizes-3000-penises-raid-morgue-employees-home/",
      "headline": "FBI Seizes Over 3,000 Penises During Raid at Morgue Employee’s Home?"
     },
     {
      "datepublished": "2017-09-22T14:41:19+00:00",
      "datemodified": "2017-09-22T12:03:38+00:00",
      "claimreviewed": "A pedophile named William Smith was decapitated and left on a judge's doorstep in September 2017.",
      "url": "https://www.snopes.com/pedophiles-decapitated-corpse-found-on-judges-doorstep-after-bail-hearing/",
      "headline": "Pedophile’s Decapitated Corpse Found On Judge’s Doorstep After Bail Hearing?"
     },
     {
      "datepublished": "2017-09-18T09:24:28+00:00",
      "datemodified": "2017-09-18T09:25:26+00:00",
      "claimreviewed": "A hapless man somehow got his head stuck in his wife's vagina during sex, resulting in the couple's hospitalization.",
      "url": "https://www.snopes.com/man-head-stuck-wife/",
      "headline": "Was a Couple Hospitalized After a Man Got His Head Stuck in His Wife’s Vagina?"
     },
     {
      "datepublished": "2016-07-05T00:00:00+00:00",
      "datemodified": "2017-09-17T10:21:30+00:00",
      "claimreviewed": "NASA has warned of imminent disaster due to the trajectory of another planet that will intersect Earth's orbit.",
      "url": "https://www.snopes.com/nasa-warns-nibiru-is-headed-straight-for-earth/",
      "headline": "NASA Warns ‘Planet X’ Is Headed Straight for Earth?"
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "og:locale": "en_US",
      "og:type": "object",
      "og:title": "fake news Archives | Snopes.com",
      "og:url": "https://www.snopes.com/tag/fake-news/",
      "og:site_name": "Snopes.com",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "fake news Archives | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "creativework": [
     {
      "datepublished": "2017-11-13T11:17:17+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-13T09:38:40+00:00"
     },
     {
      "datepublished": "2017-11-09T18:16:01+00:00"
     },
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     },
     {
      "datepublished": "2017-10-27T11:03:30+00:00"
     },
     {
      "datepublished": "2017-10-21T15:49:04+00:00"
     },
     {
      "datepublished": "2017-10-16T11:30:54+00:00"
     },
     {
      "datepublished": "2017-10-13T13:02:01+00:00"
     },
     {
      "datepublished": "2017-10-10T16:09:17+00:00"
     },
     {
      "datepublished": "2017-09-28T11:18:37+00:00"
     },
     {
      "datepublished": "2017-09-22T14:41:19+00:00"
     },
     {
      "datepublished": "2017-09-18T09:24:28+00:00"
     },
     {
      "datepublished": "2016-07-05T00:00:00+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2017-11-01T13:30:20+00:00",
      "datemodified": "2017-11-01T13:34:36+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/01/lawmakers-release-russian-ads/",
      "headline": "Lawmakers Release Russia-Linked Facebook Ads"
     },
     {
      "datepublished": "2017-10-31T09:56:51+00:00",
      "datemodified": "2017-10-31T07:11:01+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/10/31/social-media-russia-election/",
      "headline": "Facebook, Twitter and Google Find More Evidence of Russian Election Activity"
     },
     {
      "datepublished": "2017-10-30T18:35:19+00:00",
      "datemodified": "2017-10-30T18:35:19+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/10/30/fake-news-purveyors-apologize-satire-story-calling-fallen-soldier-deserter/",
      "headline": "Fake News Purveyors Apologize for ‘Satire’ Story Calling Fallen Soldier a Deserter"
     },
     {
      "datepublished": "2017-09-29T12:52:32+00:00",
      "datemodified": "2017-09-29T10:34:47+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/09/29/misinfluence-inc-how-fake-news-is-reaching-millions/",
      "headline": "Misinfluencers, Inc.: How Fake News Is Reaching Millions Using Verified Facebook Accounts"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "nasa deforestation Archives | Snopes.com",
   "htmlTitle": "nasa deforestation Archives | Snopes.com",
   "link": "https://www.snopes.com/tag/nasa-deforestation/",
   "displayLink": "www.snopes.com",
   "snippet": "The Balding Blue Marble. 26 October 2015 Popular NASA photographs \npurportedly highlighting the dramatic effects of deforestation in North America \nactually ...",
   "htmlSnippet": "The Balding Blue Marble. 26 October 2015 Popular NASA photographs \u003cbr\u003e\npurportedly highlighting the dramatic effects of deforestation in North America \u003cbr\u003e\nactually&nbsp;...",
   "cacheId": "zMg7BKyexaUJ",
   "formattedUrl": "https://www.snopes.com/tag/nasa-deforestation/",
   "htmlFormattedUrl": "https://www.snopes.com/tag/nasa-deforestation/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2015/10/nasa-deforestation.jpg?resize=720,452",
      "width": "865",
      "height": "452"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     }
    ],
    "rating": [
     {
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "og:locale": "en_US",
      "og:type": "object",
      "og:title": "nasa deforestation Archives | Snopes.com",
      "og:url": "https://www.snopes.com/tag/nasa-deforestation/",
      "og:site_name": "Snopes.com",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "nasa deforestation Archives | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "creativework": [
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2015-10-26T10:54:01+00:00",
      "datemodified": "2015-10-26T10:54:01+00:00",
      "url": "https://www.snopes.com/nasa-deforestation-images/",
      "headline": "The Balding Blue Marble"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "coup attempt Archives | Snopes.com",
   "htmlTitle": "coup attempt Archives | Snopes.com",
   "link": "https://www.snopes.com/tag/coup-attempt/",
   "displayLink": "www.snopes.com",
   "snippet": "Attempted Military Takeover in Turkey. 15 July 2016 Tanks, jets, gunfire were all \nreported in Ankara, and flights to and from Istanbul were delayed amid rumors ...",
   "htmlSnippet": "Attempted Military Takeover in Turkey. 15 July 2016 Tanks, jets, gunfire were all \u003cbr\u003e\nreported in Ankara, and flights to and from Istanbul were delayed amid rumors&nbsp;...",
   "cacheId": "eM2IQJiMFxoJ",
   "formattedUrl": "https://www.snopes.com/tag/coup-attempt/",
   "htmlFormattedUrl": "https://www.snopes.com/tag/coup-attempt/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2016/07/1142.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "og:locale": "en_US",
      "og:type": "object",
      "og:title": "coup attempt Archives | Snopes.com",
      "og:url": "https://www.snopes.com/tag/coup-attempt/",
      "og:site_name": "Snopes.com",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "coup attempt Archives | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2016-07-15T00:00:00+00:00",
      "datemodified": "2016-07-15T13:53:37+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2016/07/15/attempted-military-takeover-in-turkey/",
      "headline": "Attempted Military Takeover in Turkey"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Bank Holiday",
   "htmlTitle": "Bank \u003cb\u003eHoliday\u003c/b\u003e",
   "link": "https://www.snopes.com/politics/business/bankholiday.asp",
   "displayLink": "www.snopes.com",
   "snippet": "This raises the likelihood of a ONE WEEK LONG bank holiday coming soon. It \nwould be ... IsPlayingChristmasMusicBeforeThanksgivingNowaFederalCrime?",
   "htmlSnippet": "This raises the likelihood of a ONE WEEK LONG bank holiday coming soon. It \u003cbr\u003e\nwould be ... \u003cb\u003eIsPlayingChristmasMusicBeforeThanksgivingNowaFederalCrime\u003c/b\u003e?",
   "cacheId": "miVxdjVCYjUJ",
   "formattedUrl": "https://www.snopes.com/politics/business/bankholiday.asp",
   "htmlFormattedUrl": "https://www.snopes.com/politics/business/bank\u003cb\u003eholiday\u003c/b\u003e.asp",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/default-thumb.png",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     }
    ],
    "organization": [
     {
      "name": "Snopes"
     },
     {
      "name": "Snopes"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "news_keywords": "asp article",
      "original-source": "https://www.snopes.com/politics/business/bankholiday.asp",
      "og:locale": "en_US",
      "og:type": "article",
      "og:title": "Bank Holiday",
      "og:description": "Receipt of special 'closed' signs by Bank of America signals that U.S. banks will soon be shut down by the government for one week.",
      "og:url": "https://www.snopes.com/politics/business/bankholiday.asp",
      "og:site_name": "Snopes.com",
      "article:publisher": "https://www.facebook.com/snopes",
      "article:tag": "ASP Article",
      "article:section": "Business",
      "article:published_time": "7 October 2008",
      "article:modified_time": "2017-11-06T16:16:14-08:00",
      "og:updated_time": "2017-11-06T16:16:14-08:00",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:description": "Receipt of special 'closed' signs by Bank of America signals that U.S. banks will soon be shut down by the government for one week.",
      "twitter:title": "Bank Holiday",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:creator": "@snopes",
      "dc.date.issued": "2008-10-07T04:34:14-08:00",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2008-10-07T04:34:14+00:00",
      "datemodified": "2008-10-07T04:34:14+00:00",
      "articlesection": "News\u003c/a\u003e",
      "mainentityofpage": "https://www.snopes.com/politics/business/bankholiday.asp",
      "headline": "Bank Holiday",
      "description": "Receipt of special 'closed' signs by Bank of America signals that U.S. banks will soon be shut down by the government for one week."
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Video | Snopes.com",
   "htmlTitle": "Video | Snopes.com",
   "link": "https://www.snopes.com/video/",
   "displayLink": "www.snopes.com",
   "snippet": "Updated Reports that President Trump \"revoke[d] all sixteen Thanksgiving Day \nturkey ... Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?",
   "htmlSnippet": "Updated Reports that President Trump &quot;revoke[d] all sixteen Thanksgiving Day \u003cbr\u003e\nturkey ... \u003cb\u003eIs Playing Christmas Music Before Thanksgiving Now a Federal Crime\u003c/b\u003e?",
   "cacheId": "vEv8iqX9PFYJ",
   "formattedUrl": "https://www.snopes.com/video/",
   "htmlFormattedUrl": "https://www.snopes.com/video/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "310",
      "height": "163",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8V4BrnEc6MuQ4y4n4h9UZNTMa7P55OWHJ9SIo0Wqrlnitg2vaDtVmJudB"
     }
    ],
    "imageobject": [
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/01/obama_turkey_pardon_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/drugbust.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/jennifer_aniston_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Gadsden_Mall_Alabama_Roy_Moore_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://www.snopes.com/content/themes/snopes/dist/images/logo-main-header.png"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Al_Franken_photographer_quote_tweet_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Donald_trump_golfing_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/flaming_truck_tire_video_faux_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/gun_control_concept_bullet_shells_on_flag_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/sharia_law_march_bradford_england_faux_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/deported_veterans_twitter_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/marijuana_grower_hiding_faux_feature.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/washington_post_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/walmart_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/happy_dog_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/roy_moore_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Untitled-design-12.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/christmas_music_fb.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     },
     {
      "url": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/11/Ivanka_Trump_Disney_ABC_Television_Group_Flickr_FB.jpg?resize=865,452",
      "width": "865",
      "height": "452"
     }
    ],
    "organization": [
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Snopes"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     },
     {
      "name": "snopes",
      "url": "https://www.snopes.com"
     },
     {
      "name": "Internet"
     }
    ],
    "claimreview": [
     {
      "datepublished": "2017-01-25T00:00:00+00:00",
      "datemodified": "2017-11-21T11:10:20+00:00",
      "claimreviewed": "President Trump ordered the execution of several turkeys pardoned by President Obama.",
      "url": "https://www.snopes.com/trump-turkey-pardons-reversed/",
      "headline": "Did President Trump Reverse President Obama’s Turkey Pardons?"
     },
     {
      "datepublished": "2017-11-20T19:45:01+00:00",
      "datemodified": "2017-11-20T19:52:26+00:00",
      "claimreviewed": "Authorities in Mexico have seized a massive shipment of cocaine headed towards a U.S. government facility.",
      "url": "https://www.snopes.com/mexico-seizes-us-cocaine/",
      "headline": "Did Mexico Seize 800 Pounds of U.S. Government Cocaine?"
     },
     {
      "datepublished": "2017-11-20T11:14:42+00:00",
      "datemodified": "2017-11-20T11:14:42+00:00",
      "claimreviewed": "Jennifer Aniston and other actors are starting a \"Celebrities For Trump\" advocacy group.",
      "url": "https://www.snopes.com/is-jennifer-aniston-starting-a-celebrities-for-trump-group/",
      "headline": "Is Jennifer Aniston Starting A ‘Celebrities For Trump’ Group?"
     },
     {
      "datepublished": "2017-11-17T10:55:49+00:00",
      "datemodified": "2017-11-17T10:55:49+00:00",
      "claimreviewed": "The photographer of the infamous Al Franken image said that the moment was staged, that Leeann Tweeden \"was playing dead,\" and that \"she wanted him to ‘revive’ her.\"",
      "url": "https://www.snopes.com/photographer-said-franken-image-was-staged/",
      "headline": "Did Franken Photog Say Groping Image Was Staged?"
     },
     {
      "datepublished": "2017-11-17T10:41:38+00:00",
      "datemodified": "2017-11-17T10:41:38+00:00",
      "claimreviewed": "The Republican-sponsored Tax Cuts and Jobs Act includes a deduction benefitting golf course owners.",
      "url": "https://www.snopes.com/does-the-republican-tax-bill-include-a-loophole-benefitting-golf-course-owners/",
      "headline": "Does The Republican Tax Bill Include a Tax Loophole Benefitting Golf Course Owners?"
     },
     {
      "datepublished": "2017-11-16T17:00:13+00:00",
      "datemodified": "2017-11-16T14:06:06+00:00",
      "claimreviewed": "A video shows a flaming tire rocketing past a car.",
      "url": "https://www.snopes.com/video-flaming-tire-car/",
      "headline": "Is This a ‘Flaming Tire’ Rocketing Past a Car?"
     },
     {
      "datepublished": "2017-11-15T10:43:45+00:00",
      "datemodified": "2017-11-15T11:48:25+00:00",
      "claimreviewed": "The California Senate voted 28-8 in favor of exempting lawmakers from the state's gun control regulations.",
      "url": "https://www.snopes.com/california-senate-exempt-gun-laws/",
      "headline": "Did California Legislators Vote to Exempt Themselves from State’s Gun Laws?"
     },
     {
      "datepublished": "2017-11-15T12:32:25+00:00",
      "datemodified": "2017-11-15T09:46:26+00:00",
      "claimreviewed": "A video shows Muslims \"marching for Sharia law\" in England.",
      "url": "https://www.snopes.com/video-muslims-sharia-ashoura/",
      "headline": "Did Muslims March in Favor of Sharia Law in England?"
     },
     {
      "datepublished": "2017-11-14T11:03:46+00:00",
      "datemodified": "2017-11-14T11:09:08+00:00",
      "claimreviewed": "A photograph shows a group of deported veterans in the Mexican border city of Ciudad Juárez.",
      "url": "https://www.snopes.com/image-shows-a-group-of-deported-veterans/",
      "headline": "Is This a Group of Deported United States Military Veterans?"
     },
     {
      "datepublished": "2017-11-14T08:19:29+00:00",
      "datemodified": "2017-11-14T08:22:04+00:00",
      "claimreviewed": "A video shows a marijuana grower hiding from law enforcement officers in a corner.",
      "url": "https://www.snopes.com/marijuana-grower-hiding-law-enforcement/",
      "headline": "Is This a Marijuana Grower Hiding From Law Enforcement?"
     },
     {
      "datepublished": "2017-11-13T20:26:45+00:00",
      "datemodified": "2017-11-13T20:29:10+00:00",
      "claimreviewed": "An Alabama woman claimed the Washington Post tried to pay her to come forward and make accusations of sexual abuse against Roy Moore.",
      "url": "https://www.snopes.com/did-washington-post-offer-accuse-roy-moore/",
      "headline": "Did a Woman Say the Washington Post Offered Her $1,000 to Accuse Roy Moore of Sexual Abuse?"
     },
     {
      "datepublished": "2017-11-13T12:41:30+00:00",
      "datemodified": "2017-11-13T12:42:49+00:00",
      "claimreviewed": "A Facebook Live video shows careless food waste at a Celina, Ohio Walmart.",
      "url": "https://www.snopes.com/food-waste-walmart/",
      "headline": "Does a Video Show Needlessly Wasted Food at an Ohio Walmart?"
     },
     {
      "datepublished": "2017-11-13T08:34:46+00:00",
      "datemodified": "2017-11-13T09:00:14+00:00",
      "claimreviewed": "President Trump abruptly closed the Dogs for Wounded Warriors program.",
      "url": "https://www.snopes.com/trump-dogs-veterans-day/",
      "headline": "President Trump Abruptly Shuts Down Dogs for Wounded Warriors Program?"
     },
     {
      "datepublished": "2017-11-10T11:43:34+00:00",
      "datemodified": "2017-11-10T11:55:48+00:00",
      "claimreviewed": "U.S. Senate candidate from Alabama Roy Moore said that a practicing Muslim should not be allowed to serve in Congress by reason of his faith.",
      "url": "https://www.snopes.com/roy-moore-muslims-serve-congress/",
      "headline": "Did Roy Moore Say Muslims Shouldn’t Be Allowed to Serve in Congress?"
     },
     {
      "datepublished": "2017-11-08T19:14:24+00:00",
      "datemodified": "2017-11-08T19:56:20+00:00",
      "claimreviewed": "The California NAACP is seeking to replace \"The Star-Spangled Banner' as the national anthem of the United States due to concerns over its racist overtones and history.",
      "url": "https://www.snopes.com/california-naacp-want-replace-national-anthem/",
      "headline": "Does the California NAACP Want to Replace the National Anthem?"
     },
     {
      "datepublished": "2017-11-08T11:43:00+00:00",
      "datemodified": "2017-11-08T11:42:20+00:00",
      "claimreviewed": "President Trump signed legislation in 2017 forbidding the playing of Christmas music before Thanksgiving.",
      "url": "https://www.snopes.com/playing-christmas-music-federal-crime/",
      "headline": "Is Playing Christmas Music Before Thanksgiving Now a Federal Crime?"
     },
     {
      "datepublished": "2017-11-08T10:54:57+00:00",
      "datemodified": "2017-11-08T09:07:32+00:00",
      "claimreviewed": "In a November 2017 interview, Ivanka Trump \"scolded poor parents for not investing in food.\"",
      "url": "https://www.snopes.com/ivanka-trump-food-poor-parents/",
      "headline": "Did Ivanka Trump ‘Scold’ Poor Parents for Not ‘Investing’ in Food?"
     }
    ],
    "rating": [
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "TRUE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "TRUE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "MISCAPTIONED",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "MIXTURE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "TRUE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "TRUE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "FALSE",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     },
     {
      "alternatename": "NO RATING",
      "ratingvalue": "-1",
      "worstrating": "-1",
      "bestrating": "-1"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "original-source": "https://www.snopes.com/video/",
      "og:locale": "en_US",
      "og:type": "article",
      "og:title": "Video | Snopes.com",
      "og:url": "https://www.snopes.com/video/",
      "og:site_name": "Snopes.com",
      "article:publisher": "https://www.facebook.com/snopes",
      "fb:app_id": "1637816429839563",
      "og:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:card": "summary_large_image",
      "twitter:title": "Video | Snopes.com",
      "twitter:site": "@snopes",
      "twitter:image": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png",
      "twitter:creator": "@snopes",
      "dc.date.issued": "2017-02-08T16:28:20-08:00",
      "msapplication-tileimage": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/cropped-snopes-drop-light-only-yellow.png?fit=270,270"
     }
    ],
    "webpage": [
     {
      "maincontentofpage": "Video 36 FALSE Fact Check Fake News Did President Trump Reverse President Obama’s Turkey Pardons? Updated Reports that President Trump \"revoke[d] all sixteen Thanksgiving Day turkey pardons,\"..."
     }
    ],
    "creativework": [
     {
      "datepublished": "2017-01-25T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-20T19:45:01+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "1970-01-01T00:00:00+00:00"
     },
     {
      "datepublished": "2017-11-16T17:00:13+00:00"
     },
     {
      "datepublished": "2017-11-15T10:43:45+00:00"
     },
     {
      "datepublished": "2017-11-15T12:32:25+00:00"
     },
     {
      "datepublished": "2017-11-14T11:03:46+00:00"
     },
     {
      "datepublished": "2017-11-14T08:19:29+00:00"
     },
     {
      "datepublished": "2017-11-13T20:26:45+00:00"
     },
     {
      "datepublished": "2017-11-13T12:41:30+00:00"
     },
     {
      "datepublished": "2017-11-13T08:34:46+00:00"
     },
     {
      "datepublished": "2017-11-10T11:43:34+00:00"
     },
     {
      "datepublished": "2017-11-08T19:14:24+00:00"
     },
     {
      "datepublished": "2017-11-08T11:43:00+00:00"
     },
     {
      "datepublished": "2017-11-08T10:54:57+00:00"
     }
    ],
    "cse_image": [
     {
      "src": "https://us-east-1.tchyn.io/snopes-production/uploads/2017/02/snopes-og-image-default.png"
     }
    ],
    "sitenavigationelement": [
     {
      "url": "ASP Article"
     },
     {
      "url": "https://www.snopes.com/"
     },
     {
      "url": "Automobiles"
     },
     {
      "url": "Get the Newsletter"
     }
    ],
    "newsarticle": [
     {
      "datepublished": "2017-11-17T15:53:23+00:00",
      "datemodified": "2017-11-17T15:53:23+00:00",
      "articlesection": "News",
      "mainentityofpage": "https://www.snopes.com/2017/11/17/roy-moore-banned-mall-harassing-teen-girls/",
      "headline": "Was Roy Moore Banned from a Shopping Mall for Harassing Teen Girls?"
     }
    ]
   }
  }
 ]
}
