// Avoid `console` errors in browsers that lack a console.
var photos = [];
var lyricLength = lyrics.length;

(function() {
    var method;

    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
   
    var url = 'http://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&jsoncallback=?&api_key=4403c4fbc0b5dfe77dedc6363437ed05&tags=stage%20dive&group_id=10773269%40N00&extras=url_m&format=json'
    
    $.getJSON( url).done(function( data ) {
        photos = data.photos.photo;
       // console.log(item)
       updateScene(); 
       $("#update").show();
    });
    
    
}());
    function updateScene(){
        updateLyrics();
        updatePhoto();
        _gaq.push(['_trackEvent', 'T-Shirt', 'Button', 'UpdateScene']);
    }
    function updatePhoto(){
        var item = photos[Math.round(Math.random()*100)];
        if(item.url_m){
            $( "#images" ).html("<img src='"+item.url_m+"' id='image' />");    
        }else{
            updatePhoto();
        }
        
    }

    function updateLyrics(){
        var lyric = lyrics[Math.round(Math.random()*lyricLength)];
        $("#top").html(lyric.top.toUpperCase());
        $("#bottom").html(lyric.bottom.toUpperCase());
        Cufon.replace('h1');
    }
// Place any jQuery/helper plugins in here.
