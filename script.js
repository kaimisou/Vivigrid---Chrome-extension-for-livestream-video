(function() {

// Boostrap _ this works
//$('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">').appendTo('head');

//alert(document.head.html);
//document.head.html()='as';

/*
var node = document.createElement("script"); 
node.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");

document.head.appendChild(node);
*/


function waitForElement(elementPath, callBack){
  window.setTimeout(function(){
    if($(elementPath).length){
      callBack(elementPath, $(elementPath));
    }else{
      waitForElement(elementPath, callBack);
    }
  },500)
}
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('"'+$(element).text()+'",').select();
    document.execCommand("copy");
    $temp.remove();
}
function copyCirtcleNameToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('"['+$(element).text().split('[')[1].split(']')[0]+']",').select();
    document.execCommand("copy");
    $temp.remove();
}



function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ // <<<<  Base
var url  = window.location.href;

var today = new Date();


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('https://www.earthcam.com/')){ 

vid = $('[name="twitter:player"]').attr('content').replace('?name=','?name=_________-');
$(`<div>${vid}</div>`).prependTo('body')
}
`
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■                                ■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
`
if(url.includes('youtube.com/results?search_query=20190831_20240831')||
    url.includes('https://sp.live.nicovideo.jp/favorites?8')&& 1 // 3x3 public youtube side
    ){

    
    $('body').empty()
    $('head').empty()

    $('<style>div{opacity:1}</style>').appendTo('head')

    $(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`)
    .appendTo('head')



    var opt = 1;

    $('[class*="maia"]').remove()
    $('[id*="maia"]').remove()
    
    $('html').css('background-color','black')
    $('<div id="sheet0"  style="position:absolute;left:0; background-color:black ;width:100%;overflow:hidden ;"></div>')
    .prependTo('body')
    $('<div id="sheet" style="background-color:black; position: relative; width:82%;left:1%"></div>').prependTo('#sheet0')        
    

    function new_youtube(...args){
        w = $(window).width()*0.325+'px'; //  3x3
        h = $(window).height()*0.38+'px'; // 3x3
        for(let yid of args){
            if(yid=='WL'){
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}" 
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=playlist&iv_load_policy=3&enablejsapi=1&modestbranding=1&disable_polymer=true&list=WL" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.includes('youtube')&&yid.includes('user') ) {
                url = yid
                yid= 'youtubeuser'+yid.split('user')[1]
                console.log(yid);
                if(yid.includes('/')){yid=yid.replace('/','')}
                    console.log(yid);
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=user_uploads&list=${yid.split('user')[1]}&iv_load_policy=3&enablejsapi=1&modestbranding=1&disable_polymer=true&list=WL" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.slice(0,3)=='sss'){
                url = `https://www.youtube.com/embed?listType=search&list=${yid.slice(3)}`
                $(`<div style="display:inline-block"><iframe id="${yid.replace(/ /g,'_')}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=search&list=${yid.slice(3)}&iv_load_policy=3&enablejsapi=1&modestbranding=1&disable_polymer=true&list=WL" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.includes('twitch')){
                url = yid;
                if(yid.includes('twitch.tv/')){ 
                    yid=yid.split('tv/')[1]
                    if(yid.includes('/')){ yid=yid.split('/')[0]   } }
                yid = yid.replace('twitch','');
                    
                $(`<div style="display:inline-block"><iframe id="twitch${yid}" 
                    src="https://player.twitch.tv/?channel=${  yid}&autoPlay=1" 
                    frameborder="0" allowfullscreen="true" scrolling="no" 
                    height="${$(window).height()*0.4}" width="${$(window).width()*0.3275}"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('dailymotion')){
                url = yid;
                if(yid.includes('video/')){ 
                    yid=yid.split('video/')[1]
                    if(yid.includes('?')){ yid=yid.split('?')[0]   } }
                yid = yid.replace('dailymotion','');

            $(`<div style="display:inline-block"><iframe id="dailymotion${yid}" src="https://www.dailymotion.com/embed/video/${yid}?autoPlay=1" 
                width="${$(window).width()*0.3275}" height="${$(window).height()*0.4}" 
                frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`)
            .prependTo('#sheet')
            }
            else if(yid.includes('vimeo')){
                url = yid;
                if(yid.includes('vimeo.com/')){ 
                    yid=yid.split('vimeo.com/')[1]
                    if(yid.includes('?')){ yid=yid.split('?')[0]   } }
                yid = yid.replace('vimeo','');

            $(`<div style="display:inline-block"><iframe id="vimeo${yid}" src="https://player.vimeo.com/video/${yid}?autoPlay=1" 
                width="${$(window).width()*0.3275}" height="${$(window).height()*0.4}" frameborder="0" 
                allow="autoplay; fullscreen" allowfullscreen></iframe></div>`)
            .prependTo('#sheet')
            }

            else if(yid.includes('watch/sm')){
                w = $(window).width()*0.12*2.73+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                yid = yid.split('watch/')[1];
                if(yid.includes('?')){ yid = yid.split('?')[0]; }
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" 
                    src="https://embed.nicovideo.jp/watch/${yid}?oldScript=1&amp;referer=https%3A%2F%2Fwww.nicovideo.me%2Fwatch%2F${yid}
                    &amp;from=0&amp;autoplay=0&amp;allowProgrammaticFullScreen=1"></iframe></div>`)
                .prependTo('#sheet')
            
            }
            else if(yid.slice(0,2)=='sm'){
                w = $(window).width()*0.12*2.73+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                if(yid.includes('?')){ yid = yid.split('?')[0]; }
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" 
                    src="https://embed.nicovideo.jp/watch/${yid}?oldScript=1&amp;referer=https%3A%2F%2Fwww.nicovideo.me%2Fwatch%2F${yid}
                    &amp;from=0&amp;autoplay=0&amp;allowProgrammaticFullScreen=1"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('fc2')){
                url = yid
                if(yid.includes('fc2.')){
                    yid = yid.split('com/')[1].split('/')[0]    
                }
                
                yid = yid.replace('fc2','');

                $(`<div style="display:inline-block"><iframe id="fc2${yid}"
                    style="margin: 1px auto; border:1px solid #242424;border-radius:4px;" 
                    width="${$(window).width()*0.325+'px'}" height="${$(window).height()*0.38+'px'}" 
                    src="https://fc2livecn.com/embedPlayer/?id=${yid}&lang=ja&suggest=1&thumbnail=1&adultaccess=1
                    &autoplay=0&mute=1" 
                    frameborder="0" scrolling="no" allowfullscreen=1 ></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.slice(0,2)=='lv'){
                w = $(window).width()*0.12*2.7+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" 
                    src="https://ext.live2.nicovideo.jp/watch/${yid}?default_mute=true&amp;auto_play=true&amp;comment_visible=on&amp;niconico_link_hidden=true&amp;video_clickable=true&amp;gate_status_hidden=true&amp;link_url=https%3A%2F%2Flive.nicovideo.jp%2Fwatch%2Flv321420616%3Fref%3Dtop%26zroute%3Dindex&amp;"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('watch/lv') ){ // nico
                yid=yid.split('watch/lv')[1]
                if(yid.includes('?')){ yid=yid.split('?')[0]}
                w = $(window).width()*0.12*2.7+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                $(`<div style="display:inline-block"><iframe id="lv${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" 
                    src="https://ext.live2.nicovideo.jp/watch/lv${yid}?default_mute=true&amp;auto_play=true&amp;comment_visible=on&amp;niconico_link_hidden=true&amp;video_clickable=true&amp;gate_status_hidden=true&amp;link_url=https%3A%2F%2Flive.nicovideo.jp%2Fwatch%2Flv321420616%3Fref%3Dtop%26zroute%3Dindex&amp;"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('earthcam')){ // earthcam
                if(yid.includes('name=')){
                    yid = yid.split('name=')[1].split('.flv&timezone')[0]
                }yid = yid.replace('earthcam','');

            $(`<div style="display:inline-block"><iframe id="earthcam${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                src="https://www.earthcam.com/js/video/embed.php?vid=${yid}.flv&requested_version=current" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </iframe></div>`)
            .prependTo('#sheet')
            }
            
            else if(yid.length == 33){ // earthcam
                if(yid.includes('name=')){
                    yid = yid.split('name=')[1].split('.flv&timezone')[0]
                }yid = yid.replace('earthcam','');


            $(`<div style="display:inline-block">
                <iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; "
                src="https://drive.google.com/file/d/${yid}/preview" width="${w}" height="${h}"></iframe>
                `)
            .prependTo('#sheet')
            }
            else if(yid.length == 11 ){
            url = 'https://www.youtube.com/watch/'+yid
            $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed/${yid}?autoplay=1&iv_load_policy=3&enablejsapi=1&modestbranding=1&mute=1" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
            .prependTo('#sheet');
            
            }else if(!yid.includes('list=')&&yid.includes('v=') ){
                    url = yid
                    if(yid.includes('v=')){yid = yid.split('v=')[1]}
                    if(yid.includes('&')){
                        yid=yid.split('&')[0]
                    }
            
            $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed/${yid}?autoplay=1&iv_load_policy=3&enablejsapi=1&modestbranding=1&mute=1" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
            .prependTo('#sheet');
            
            } else if( yid.includes('list=')||yid.includes('channel/UC') ||
                yid.slice(0,2)=='PL'||yid.slice(0,2)=='UU'      
             ){
                    url = yid

                 if(yid.includes('list=')){
                    yid = yid.split('list=')[1]
                    if(yid.includes('&')){ 
                        yid=yid.split('&')[0]}
                    }
                if(yid.includes('channel/UC')){
                    yid ='UU'+ yid.split('channel/UC')[1]
                    if(yid.includes('/') ){ yid =yid.split('/')[0]}
                    }
            
            $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
            width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=playlist&iv_load_policy=3&enablejsapi=1&modestbranding=1&disable_polymer=true&list=${yid}&autoplay=1&mute=1" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
            .prependTo('#sheet');
            }else{alert('Oops.Nothing found  ¯\\_(ツ)_/¯');return false}

            $(`<div id="${$('iframe').eq(0).attr('id') }" class="closeit1" 
                style="position: absolute;display:inline-block; 
                width: 32px; height: ${ $('iframe').eq(0).height()/3+'px'  };
            background-color: #87CEFA  ; opacity:0.6; z-index: 999;border-radius:6px" ></div>`)
            .insertAfter($('iframe').eq(0))
            .click(function(){ 
                $(`#`+$(this).attr('id')).parent().fadeOut(200,function(){
                    $(this).remove() 
                })
                $(this).remove();
                let s = Math.floor(Math.random()*100) %img.length
                add_img(img[s])

                img.splice(s,1);
                })
            .fadeOut('slow').fadeIn('slow').fadeOut('slow')
            .fadeIn('slow',function(){$(this).css('opacity','0.05')})
            .hover(function(){
                $(this).css('opacity','0.6')
                $(`#`+$(this).attr('id')).css('opacity','0.7')},
                function(){ 
                    $(this).css('opacity','0')
                    $(`#`+$(this).attr('id')).css('opacity','1') })
        
        if($('iframe').eq(0).attr('id').length==34 || 
            $('iframe').eq(0).attr('id').length==24)
        {        }else{return;}

        $(`<div id="${$('iframe').eq(0).attr('id') }" class="random" 
                style="position: absolute;display:inline-block; 
                width: 32px; height: ${ $('iframe').eq(0).height()/7+'px'  };
            background-color: red  ; opacity:0.6; z-index: 1000;border-radius:6px;color:white;font-size:250%"><img style="zoom:6%" src="https://cdn1.iconfinder.com/data/icons/ios-11-ui-elements/29/15_shuffle_music_player_function-512.png"></div>`)
            .insertAfter($('iframe').eq(0))
            .fadeOut('slow').fadeIn('slow').fadeOut('slow')
            .fadeIn('slow',function(){$(this).css('opacity','0.05')})
            .hover(function(){
                $(this).css('opacity','0.6')
                $(`#`+$(this).attr('id')).css('opacity','0.7')},
                function(){ 
                    $(this).css('opacity','0')
                    $(`#`+$(this).attr('id')).css('opacity','1') })
            .click(function(){
                    $(`<script>
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('${$('iframe').eq(0).attr('id')}', {

          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // Ready _ The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        console.log('attempt play');
        event.target.playVideo();

        //setTimeout(tolist, 2000);
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            console.log('status playing');
            
          done = true;
        }
        if (player.getPlayerState()==1) {
            console.log(event.data)

        }
        if (player.getPlayerState()==0) {
            
            console.log('ended')
            idx =Math.floor(Math.random()*1000 %player.getPlaylist().length)

        player.cuePlaylist({list:'${$('iframe').eq(0).attr('src').split('list=')[1].split('&')[0] }',
                            index:idx});
        }
      }

      function stopVideo() {
        player.stopVideo();
      }
      onYouTubeIframeAPIReady();

    </script>`).prependTo('head')    
            $(this).fadeOut('slow')
            $(this).remove()
            })

        }// end of for loop
        }//----------------------------------------------------------------------

    // youtube watch later 1
        if(0){
        $(`<iframe style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
            width:${$(window).width()*0.325+'px'};height:${$(window).height()*0.38+'px'}"  
                border-radius = "4px"
            src="https://player.bilibili.com/player.html?aid=63054495&cid=40734416&page=1" scrolling="yes" border="0" frameborder="no" framespacing="1" allowfullscreen="true">
            </iframe></div>`)
        .prependTo('#sheet');// somehow doesn't work in loading
        $(`<iframe style="margin: 1px auto; border:1px solid #242424;border-radius:4px;" 
            width="${$(window).width()*0.325+'px'}" height="${$(window).height()*0.38+'px'}" 
            src="https://fc2livecn.com/embedPlayer/?id=${'9143596'}&lang=ja&suggest=1&thumbnail=1&adultaccess=1
            &autoplay=0&mute=1" 
            frameborder="0" scrolling="no" allowfullscreen=1 ></iframe></div>`)
        .prependTo('#sheet');

        }
        

        new_youtube('WL');
        

    if(0) {//                           Youtube and others
        
        newlist =[ // bottom
               //'xrPjvq32eKE', // Beach Tropical

         'NvqKZHpKs-g', // DW
         ];
  
        if(1
            ){
            for(let i of newlist  ){ new_youtube(i); }
        }else if(1
            ){
            var vid = 'T_h55ysAxtQ'
            //var end = [vid,vid,vid,vid,vid,vid,vid,vid,vid];
            
            //  > rockman x speed run
            touhou = [];
            ninjar =[];
            tales = [];
            persona =['PLjohP1uwRC9oMZ2rpTIaluRgEx9oiN0ov','PLNo0zGy2VDP3p7aP0YPMYDGDiQLNhOLhQ','PLPyrrGp9A6oCYE9HLZ4PY3CmNfEmlraw5','PLPyrrGp9A6oDxp24_SaOg-Smk-E5njuMO','PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB'];
            megaten =['PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB','iJwOiRWx5-k','PLuYWW6PcZgevwDxqvAfaY5lf1z6dGIhaQ','PLPyrrGp9A6oDkD4l5BJAldqFpUxZRZXXH','PLWevjNnsEtsY4yUry6H3exIiZthKEW-zD','PLoJz9N2bnBlsbfWCTjmRITKy5NhlFOyNT','JG5y98s80Jo','PLPyrrGp9A6oAcq7Gd9c_WOjvZW4q8oNKh','k9Yfq35jm-E','w7N4hH8pqpA'];
            megaten_p =['PLjohP1uwRC9oMZ2rpTIaluRgEx9oiN0ov','PLNo0zGy2VDP3p7aP0YPMYDGDiQLNhOLhQ','PLPyrrGp9A6oCYE9HLZ4PY3CmNfEmlraw5','PLPyrrGp9A6oDxp24_SaOg-Smk-E5njuMO','PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB','PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB','iJwOiRWx5-k','PLuYWW6PcZgevwDxqvAfaY5lf1z6dGIhaQ','PLPyrrGp9A6oDkD4l5BJAldqFpUxZRZXXH','PLWevjNnsEtsY4yUry6H3exIiZthKEW-zD','PLoJz9N2bnBlsbfWCTjmRITKy5NhlFOyNT','JG5y98s80Jo','PLPyrrGp9A6oAcq7Gd9c_WOjvZW4q8oNKh','k9Yfq35jm-E','w7N4hH8pqpA'];
            pokemon = [];
            kof = ["XKzk4M7G7wI","d7Bp8CwPCb0","PZPuQeOeBhk","IFHvDdUAnzI","YNfD5ndPSjs","-2TcH2ismsY","NJ9kV0emLMA","xrQLRCwM1Ds","DuAg9ILvzUo","ziyqWaKqb1Y","H5lc6Lle2lc","yuR-XEzUHAA",'greALx7jn4U','g4G0dX-w8QI'];
            mslug = ["ProWjLIi3MI","Trx8t74WlaM","IjM7kJ6Kj1Q","ngfD2YrTbIo","ZVxr47jkufM","OPCHeaqZZBQ","sfParGc8BJw","lw8yq1ubQG0","lMx4iLp-EAc",];
            batman_arkham = [];
            metrovania = [];
            ys = [];
            cas = ['4uwIvhtK2-8','w5Ht1WzeWv0','kGiEdTu3BGE','dCM-JDf8S2I','yQdDEXg36HA','El0vYauVjyY','nGCzrV-ir-I','ZMiSzFbSJJY','5YHjHzHJKkU'];
            // over 1 hr  mgs1 is eng ver
            mgs = ['L2zVJvsJAy0','3IyRAC_CSKI','q38NSWv1coI','gYKqHPN1S7A','nilgaHRg-Dg','y0JBivGJl-w','clV3iKNc0XU','4wEysNpXnD8','zD4bu4vTIb0'];
            bio = ['67mK3xSvRbo','S5XXjKuCYzw','lNhwDCNbejE','2oaN_e7vbHI','GNhsOdINu0I','pedlGMG2Ito','Uk3Qt5WjbT8','0cofIkvvH9w','giFH8uw-v0k'];
            mg = ['tD61AX9IBTc','ngViMRuKRCs','pUZzO2tb4ZU','o-KYbFS0wU0','NJOpu09w1rc','7VcZKdCU9I0','J_kRnmusJIY','9U8CDC-4L9M','NS_IUj1WgQw'];
            mgx = ['f8CHaiY0Yts','FxPayMr3hO0','_eDgZN5jzgU','mQPeEtncWuo','ClFSXWVz0i4','GD9SWB9P1Ys','oNoozJJkfh0','IURT8bhpm2I','VqNnkqQgFbc'];
            dq = ['vhLkT2n-Pk4','sKYF9ISuRAk','xlRO43u6mUo','lIRREn2y-lA','YaeRJqM8Vfs','OVmTZ_xR-8A','BQkAV8ZDTJw','2-GXejJ9oDY','0cofIkvvH9w'];
            ff =[
                '-NJkAyFwNPg', // 9
                '6vucZvS__zo', // 8
                'bBmoVUBOvXY',//'V3-1mxM0xFs', // 7  //'Ki38f41OJxE', // 7
                '8kX1t22Pzeg', // 6
                'vNUc2CzN9kw', // 5
                'VBkwHF_lSlE', // 4 
                'XEnkNjri_d0', // 3
                'xBUUekCp96c', // 2
                '4bM7NWJXjrQ'] // 1

            for(let i of mgx
                .reverse()
                ){
                //new_youtube(end);
                w = $(window).width()*0.325+'px'; //  3x3
                h = $(window).height()*0.365+'px'; // 3x3
                
                new_youtube(i);

                }
        }

    }

    if(0) {//    Optional Live
        w = $(window).width()*0.33+'px'; //  3x3
        h = $(window).height()*0.38+'px';  var opt = 1;
        lv = 'lv321471600' ;
        $(`<iframe  style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
            class="___thumbnail___1Afwg" src="https://ext.live2.nicovideo.jp/watch/${lv}?default_mute=true&amp;auto_play=true&amp;comment_visible=on&amp;niconico_link_hidden=true&amp;video_clickable=true&amp;gate_status_hidden=true&amp;link_url=https%3A%2F%2Flive.nicovideo.jp%2Fwatch%2Flv321420616%3Fref%3Dtop%26zroute%3Dindex&amp;"></iframe></div>`)
        .prependTo('#sheet')//.css('zoom','270%')   
    }else{
        var opt=0;
    }


    if(0
    ){ // optional video playlist
        sm=["sm28194074","sm28193982","sm28193920","sm28193847","sm28100013","sm28099842","sm28081523","sm28081317","sm27995525"];
        sm=['sm10473126'
        ];
        //sm=['sm30959747']
        var playtime = 999990;
        var i =1;

        for(var i=0;i<sm.length; i++){
        $(`<div style="display:inline-block"><iframe id="plr" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
            width:${$(window).width()*0.12+'px'};height:${$(window).height()*0.14+'px'}" 
        allowfullscreen="allowfullscreen" allow="autoplay" frameborder="0"
            src="https://embed.nicovideo.jp/watch/${sm[i]}?oldScript=1&amp;referer=https%3A%2F%2Fwww.nicovideo.me%2Fwatch%2F${sm[i]}
            &amp;from=0&amp;autoplay=0&amp;allowProgrammaticFullScreen=1" style="max-width: 100%; display:block; margin: 0 auto;"></iframe></div>`)
        .appendTo('#sheet').css('zoom','270%')
        
        }
    }




    block_comu =[
    'なんかやるねぷ','うめ部','豚野郎放送','漫画家2人の暇','teppen','りり生',//'チルノチャンネル'
    'APEX','アペックス','マリオメ','ドラクエ','殺人鬼','【LIVE】','艦これ','スマブラ','ハイスクル','【実況】','【MLB】',
    '雑酒','酒雑','エンドレスレジェンド','黒い砂漠',
    'けたまが何かやるコミュニティ','自由帖','猛暑'
    ];


    
    $('iframe').click(function(){
        //$(this).remove()
        navigator.clipboard.writeText(document.title);
        //$(this).css('zoom','540%')
        //$('#sheet').css('height','1200px')
        
    })



  $(` 
    <div id="sidebar" style="position:absolute;opacity:0.8 ;
    display:block;color:white; zoom:120%; width: 15% ;height:100%; 
    top: 9%; left: 84%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 9;" >
    </div>`        ).appendTo('body')
    

    img0=[];

    chrome.storage.sync.get(['imgs'],function(result){
       img = result.imgs;
       img0 = img0.concat(img);
       
       console.log(img);

       for(var i=0;i<=imgcount +1 ;i++){
        let s = Math.floor(Math.random()*100) %img.length;
        add_img(img[s])

        img.splice(s,1);
    }

    });

    chrome.storage.sync.get(['ch_reg'],function(result){
        ch_reg = result.ch_reg;
        if(ch_reg){
        for(let [key, value] of Object.entries(ch_reg) ){
            new_youtube(key);
        }}
    });



    chrome.storage.sync.get(['chennels'],function(result){
            ch = result.chennels;
            //console.log(ch);
            for(let [key, value] of Object.entries(ch) ){
            $(`<h3 class="sidel" style="z-index:0;display:inline-block; 
                color:white; margin-block-end: 0.1em ;border:2px solid #add8e6; 
                background-color :transparent; border-radius:4px" aria-label=
                "${key}" > 
                ${value} </h3>`).appendTo('#sidebar')
            }

              $('.sidel:contains(".")').css('color','#98FB98')
                $('.sidel').hover(
                    function(){
                        $(this).css('background-color','#6c6c6c');
                        $(`<img id="closeitem" style="z-index:99;zoom:8%;position:absolute;display:block"
                        src="https://icon-library.net/images/close-button-icon/close-button-icon-27.jpg">`)
                        .appendTo(this)
                        .click(function(){
                            //document.title=$(this).parent().attr('aria-label');
                            delete ch[$(this).parent().attr('aria-label')];
                            delete ch_reg[$(this).parent().attr('aria-label')];
                            chrome.storage.sync.set({chennels: ch });
                            chrome.storage.sync.set({ch_reg: ch_reg });
                            $(`#${$(this).parent().attr('aria-label')}`).remove()
                            $(this).parent().remove() })
                         },

                    function(){$(this).children('img').remove();$(this).css('background-color','transparent')}
                    ).click(function(){
                
                //$('html,body').animate({scrollTop:$(this).offset().top-  $(window).height()*0.43  },100)
                new_youtube($(this).attr('aria-label') );
                $('.ume').last().remove()
                })

         })  ;


    img00 =[];
    img00 = img00.concat(img0);
    
    $(`<div>
        <input id="imgurl" class="form-control form-control-sm"  style="display:inline-block;width:76%"
        type="text" id="newimg" placeholder=

        "Add background image (URL)">
            <button  style="display:inline-block"id="addbtn_img" type="button" class="btn btn-primary">
            Add</button>
             </div>
            `).prependTo('#sidebar')    

    $(`<div>
        <input id="vid" class="form-control form-control-sm" 
        type="text" placeholder="Video/Playlist URL">
            
            <button id="addbtn" type="button" class="btn btn-primary">
            ←Add</button>
            <button id="addbtn_list" class="btn btn-info" type="button" >
            Add to List</button>
             </div>
            `).prependTo('#sidebar')

    $(`<div>
        <input id="name" class="form-control form-control-sm" 
        type="text" placeholder=
        "Enter title of box (optional)">
            
             </div>
            `).prependTo('#sidebar')
    //<button id="title" type="button" class="btn btn-primary">Copy title</button>
    
    $('#imgurl').mouseover(function(){

        navigator.clipboard.readText().then(function(data){
            if(data.includes('jpg')||
                data.includes('gif')||
                data.includes('png')
                ){
                $('#imgurl').val(data);
            }
        })
    })


    //------------------------------------

    $('#addbtn_img')
    .hover(
        function(){
        $(`<button id="del" class="btn btn-danger"  type="button" 
            style="position:absolute;display:block">
            Del</button>`).appendTo('#addbtn_img').click(function(){
                if($('#imgurl').val().length>2){
                
                img0 = img0.filter(e => e !== $('#imgurl').val()); 
                $('#imgurl').val('')
                chrome.storage.sync.set({imgs:img0});}
            })
    },function(){
        $('#del').remove()
    })
    .click(function(){
        if($('#imgurl').val().length>2){
        
        img0.push( $('#imgurl').val()); 
        $('#imgurl').val('')
        chrome.storage.sync.set({imgs:img0});
        }
        
    }) // end of click

    $('#addbtn').click(function(){
        if($("#vid").val()==''){return}
        let id = $("#vid").val();

        new_youtube(id);
        $("#vid").val('');
    })

    $('#addbtn_list').click(function(){
        if($("#vid").val()==''){return}
        let id = $("#vid").val();

        new_youtube(id);
        $("#vid").val('');
        

        if(  url.includes('list=')   ){
            url = 'https://www.youtube.com/playlist?list='+url.split('list=')[1];
            
            if(url.includes('&')  && 1){

                url = url.split('&')[0];
                //document.title=url;
            }
        }

        $.get( url ,function(data,status){
            pureid =  $('iframe').eq(0).attr('id')

            
            if(pureid.slice(0,3)=='sss'){
                title = 'Search: '+pureid.replace('sss','')
            }
            else if(pureid.slice(0,2)=='sm'){
                title = pureid
                console.log(title);
            }
            else if(url.includes('nicovideo')){
                title = url.split('watch/')[1].split('?')[0]
            }else{
                title = (data.replace('\n','')).split('<title>').reverse()[0].split('</title>')[0];
            }

            //trim
            if(title.includes(' - YouTube')  ){ title = title.replace(' - YouTube','') }

            //document.title = $('iframe>head>title').text()
            console.log(title);

            if(title.length<1 ||title.includes('earthcam') || 
            title=='YouTube' || 
                title.includes('something went wrong')
                ){ 
                t = new Date();
                title=  //('00'+(t.getMonth()+1) ).slice(-2)+'-'+
                            ('00'+t.getDate()).slice(-2)+'-'+
                            ('00'+t.getHours()).slice(-2)+
                            ('00'+t.getMinutes()).slice(-2) +
                            ('00'+t.getSeconds()).slice(-2) 
                        }
            //console.log( data);
            
            if(0){//error

            }else{ // case the target exist
                if($("#name").val().length>0 ){   title= $("#name").val(); }
                

                if( $('.sidel').eq(0).html().includes(title) ){

                }else{

                    $(`<h3 class="sidel" style="z-index:0;display:inline-block; color:white; margin-block-end: 0.1em ;
                        border:2px solid #98FB98; background-color :transparent; border-radius:4px" id=
                    "${pureid}" > 
                    ${title} </h3>`).insertBefore( $('.sidel').eq(0) )
                    .hover(
                    function(){
                        $(this).css('background-color','#6c6c6c');
                        $(`<img id="closeitem" style="z-index:99;zoom:8%;position:absolute;display:block"
                        src="https://icon-library.net/images/close-button-icon/close-button-icon-27.jpg">`).appendTo(this)
                        .click(function(){
                            //document.title=$(this).parent().attr('id');
                            delete ch[$(this).parent().attr('id')];
                            delete ch_reg[$(this).parent().attr('id')];
                            chrome.storage.sync.set({chennels: ch });
                            chrome.storage.sync.set({ch_reg: ch_reg });
                            $(`#sheet>#${$(this).parent().attr('id')}`).remove()
                            $(this).parent().remove() })
                         },
                        function(){$(this).children('img').remove();$(this).css('background-color','transparent')}
                    ).click(function(){
                    new_youtube($(this).attr('id') );
                    //$('html,body').animate({scrollTop:$(this).offset().top-  $(window).height()*0.43  },100)
                    $('.ume').last().remove()
                    })
                }
                
                
                $("#name").val('');

                newch = { [pureid] : title };
                newch0 = { [pureid] : title+'.' };
                Object.assign(newch,ch_reg);
                Object.assign(newch0, ch);
                chrome.storage.sync.set({ch_reg:newch});
                chrome.storage.sync.set({chennels:newch0});
            }
        })
         
    }) // end of btn click----------------------------------------------------------

    //$('#title').click(function(){       $("[class='form-control form-control-sm']").val(document.title)
    //    new_youtube( document.title);   })

  
    for(let i of $('[class="___anchor___F4gUZ ___anchor-base___3gkJT"]')) {
        $(i).attr('id',$(i).attr('href'))

        $('<img class="smallbox" style="zoom:30%;cursor:pointer" src="data:image/png;base64,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">')
        .prependTo($(i))
        .click(function(){
        window.open(
            $(this).parent().attr('id'),
            "_blank",'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width=340,height=198,left='+$("body").width()/1.38+',top='+$("body").height()/3+'');
    
        })
    }
    //$('[class="___anchor___F4gUZ ___anchor-base___3gkJT"]').removeAttr('href')

    //25-$('iframe').length
    var imgcount = 33-$('iframe').length;

    function add_img(url){
        if(typeof url==='undefined'){
            url ='https://previews.123rf.com/images/gdolgikh/gdolgikh1207/gdolgikh120700169/14478724-raw-pine-planks-background.jpg';
        }            // 埋め
        $(`<div class="ume" style="
            width:${$('iframe').eq(0).width() }px; 
            height:${$('iframe').eq(0).height() }px; overflow:hidden ;border:1px solid #242424;border-radius:4px;
            display:inline-block; 
            background-image: url(${url});background-size: cover;
            opacity:0.6;
            " ><img style="height:100%;     margin:auto; display:block;"
            src="${url}"></div>`)
        .appendTo('#sheet')
    }
    


    $('[class="___program-card___375BS ___program-card___3Z6Vu"]').css('height','50%')
    
    $('[class="___anchor___F4gUZ ___anchor-base___3gkJT"]').off().click(function(){
        let lv = $(this).attr('id')
        new_youtube(lv);
        $('.ume').last().remove()
    })

    $('#name, #vid, #imgurl').css('color','blue')

    $('#vid').mouseover(function(){
        
        navigator.clipboard.readText().then(function(data){
            if(data.includes('list=')||
                data.includes('?v=')||
                data.includes('nicovideo')||
                data.includes('youtube.com/channel/')||
                data.includes('youtube.com/user/')||
                data.includes('vimeo')||
                data.includes('dailymotion')||
                data.includes('twitch.tv/')||
                data.includes('fc2.')||
                data.includes('earthcam')||
                data.slice(0,2)=='UU'||
                data.slice(0,2)=='WL'||
                data.slice(0,2)=='sm'||
                data.slice(0,2)=='lv'||
                data.slice(0,2)=='PL'
                ){
                $('#vid').val(data).fadeOut(100).fadeIn(100)
            }

            })
    })

    
    grid = [
    chrome.extension.getURL("images/-11-.png"),
    chrome.extension.getURL("images/-22-.png"),
    chrome.extension.getURL("images/-33-.png"),
    ];
    gi = 2;

    $('<style >iframe,.ume{zoom:100%}</style>').appendTo('body')

    // "sidebar" top
    $(`<div id="grid" style="position:fixed;cursor:pointer;
        top:1%; left:90.2%;zoom:8%;background-color:white;opacity:1;border-radius:10px">
        <img src="${grid[gi]}"></div>`)
    .prependTo('#sidebar')
    .hover(
        function(){
        $(this).css('background-color','rgba(255,255,255,1.0)');

    },function(){
        $(this).css('background-color','rgba(255,255,255,0.9)');
    }).click(function(){
        gi= (gi+1)%grid.length; 
        $(this).fadeOut(100).fadeIn(100)
        
        setTimeout(function(){
        $('#grid>img').attr('src',grid[gi]) },100)

        $('#sheet').fadeOut(100).fadeIn(100)
        
        setTimeout(function(){
        if(gi==0)     {    $('style').last().html('iframe,.ume{zoom:303%}')
                            $('#nextsc').show()}
        else if(gi==1){    $('style').last().html('iframe,.ume{zoom:150%}')
                            $('#nextsc').hide() }
        else if(gi==2){    $('style').last().html('iframe,.ume{zoom:100%}')
                            $('#nextsc').hide() }
        },100)        
        
    })


    $(`<img id="round" style="zoom:20%;cursor:pointer;opacity:0.8;position:absolute; top:-5%"
        src="${chrome.extension.getURL('images/round.png')}" oncontextmenu="return false"
        alt="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/214/clockwise-rightwards-and-leftwards-open-circle-arrows_1f501.png">`)
    .insertAfter('#grid')
    .click(function(){
        $('iframe').eq(-1).prependTo('#sheet')
        $('.closeit1').eq(-1).prependTo('#sheet')
    })
    .contextmenu(function(){
        $('iframe').eq(0).insertBefore($('.ume').eq(0))
        $('.closeit1').eq(0).insertBefore($('.ume').eq(0))
    })
    .hover(function(){
        $(this).css('opacity','1')
    },function(){ $(this).css('opacity','0.8') })
    
    document.onkeypress=function(e){
        //document.title= e.keyCode;
        if (e.keyCode === 91 ){
            $('#nextsc').trigger('click')
        }
        if (e.keyCode === 92 ){
            $('#nextsc').trigger('contextmenu')
        }
        if (e.keyCode === 96 || e.keyCode === 93 ) {
            $('#grid').trigger('click')
        }}


    $(`<img id="save" style="zoom:14%;cursor:pointer;opacity:0.8;position:absolute; top:-10%; left:-3% "
        src="https://img.icons8.com/cotton/2x/save.png" oncontextmenu="return false" 
        title="right click to load"
        alt="https://img.icons8.com/cotton/2x/save.png"
        >`).insertAfter('#grid')
    .hover(function(){
        $(this).css('opacity','1')
    },function(){ $(this).css('opacity','0.8') })
    .click(function(){
        $(this).fadeOut(150).fadeIn(150)
        savel=[];
        ifr = $('iframe')
        for(let i of ifr){
            savel.push( $(i).attr('id'))        }
        chrome.storage.sync.set({savel:savel});
        console.log(savel);
    })
    .contextmenu(function(){
        chrome.storage.sync.get(['savel'],function(result){
            savel = result.savel
            savel.reverse().splice(0,1)
            //savel = savel.reverse()
            $('.closeit1').trigger('click')
            setTimeout(function(){
            for(let i of savel){
                new_youtube(i);    
            }
            },500);
            
        });
    })


    //$('<')

    scrollto = 0
    $(`<img id="nextsc" src="${chrome.extension.getURL('images/2screen.png')}"
        alt="https://cdn4.iconfinder.com/data/icons/business-2-retro-2/60/79_-Change_Screen_Mode-_design_graphic_tool-512.png"
        style="zoom:5%;position:fixed;top:2px;right:5%; display:none;opacity:0.7" >`)
        .prependTo('#sidebar').hover(
            function(){$(this).css('opacity','1')},function(){$(this).css('opacity','0.7')},)
        .click(function(){ 
            scrollto= (scrollto+1)%$('iframe').length;
            $('html,body').animate({scrollTop: $('iframe').height()*scrollto*2.555 }, 200); return false
        })
        .contextmenu(function(){
            scrollto= (scrollto+$('iframe').length-1)%$('iframe').length;
            $('html,body').animate({scrollTop: $('iframe').height()*scrollto*2.555 }, 200); return false  
        })

    $(`<img id="totop" src="${chrome.extension.getURL('images/totop.png')}"
        alt="https://cdn0.iconfinder.com/data/icons/simple-arrows-essentials-flat/48/Simple_Arrows-01-512.png"
        style="zoom:10%;display:none;position:fixed; bottom:30%;right:20px;opacity:0.6" >`)
        .prependTo('#sidebar').hover(
            function(){$(this).css('opacity','1')},function(){$(this).css('opacity','0.6')},)
        .click(function(){ $('html,body').animate({scrollTop:0}, 200); return false})

    $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#totop').fadeIn();
            } else {
                $('#totop').fadeOut();
            }
        });


    img01 = []
    img01 = img01.concat(img0);

    setInterval(function(){
        
        ume = $('.ume')
        for(let i=0; i< 8; i++ ){
        let rd = Math.floor(Math.random()*100)%img0.length
        
        $('.ume').fadeOut('slow')
        
        setTimeout(function(){
        $('.ume>img').eq(i).attr('src',img0[rd])
        $('.ume').eq(i).css('background-image',`url(${img0[rd]})`)
            
            setTimeout(function(){  $('.ume').fadeIn('slow') },500)
        },500)
        
        //img00.splice(i,1);
        
        }
        //console.log('d');
        if(img0.length){}else{img0 = img0.concat(img01)}

    },60000)

    $(`<link rel="icon" href="${chrome.extension.getURL('images/Youtube-blue.png')}">`)
    .appendTo('head')

     $('<div style="left:0px;background-color:blue;opacity:0;width:5px;height:100%;position:fixed;display:block"></div>')
    .prependTo('#sheet0')
    .click(function(){ window.open(" ", "_self","");window.close();})
    .hover(
            function(){$(this).css('opacity','0.7').fadeIn(300)},
            function(){$(this).css('opacity','0'); $(this).fadeOut(300);$(this).fadeIn(0)} )

    
    if(url.includes('live.nico')){
        $('#sidebar').css('zoom','80%')
    }

    $('#sheet').css('zoom','83%')
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    document.title= 'ViviGrid';

    lang ={
    "live in English":"https://www.youtube.com/results?search_query=live&sp=EgJAAQ%253D%253D",
    'live in Japanese':'https://www.youtube.com/results?search_query=%E3%83%A9%E3%82%A4%E3%83%96&sp=EgJAAQ%253D%253D',
    'live in Korean':'https://www.youtube.com/results?search_query=%ED%83%9C%ED%92%8D+%E2%80%98%EB%A7%81%EB%A7%81%E2%80%99&sp=EgJAAQ%253D%253D',
    'live in Spainish':'https://www.youtube.com/results?search_query=vivir&sp=EgJAAQ%253D%253D',
    "live in Portuguese":"https://www.youtube.com/results?search_query=transmissão+ao+vivo&sp=EgJAAQ%253D%253D",
    "live in Deutsch":"https://www.youtube.com/results?search_query=Leben&sp=EgJAAQ%253D%253D",
    "live in Chinese":"https://www.youtube.com/results?search_query=%E7%9B%B4%E6%92%AD&sp=EgJAAQ%253D%253D",
    "live in Russian":"https://www.youtube.com/results?search_query=%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D0%B9+%D1%8D%D1%84%D0%B8%D1%80&sp=EgJAAQ%253D%253D",
    "live in Arabic":"https://www.youtube.com/results?search_query=+%D8%A8%D8%AB+%D9%85%D8%A8%D8%A7%D8%B4%D8%B1+",
    "live in Africa":"https://www.youtube.com/results?search_query=africa&sp=EgJAAQ%253D%253D",
    }
    
    setTimeout(function(){
        $(`<div >
        <h3 style="display:inline-block; color:white; margin-block-end: 0.1em ;" > 
        _________________________</h3></div>`)
        .appendTo('#sidebar')
    for(let [key, value] of Object.entries(lang) ){
    $(`<a href="${value}" target="_blank"><div >
        <img style="width:21px;height:21px;vertical-align:top; " 
        src="${chrome.extension.getURL('images/earth.ico')}">
        <h3 style="display:inline-block; color:white; margin-block-end: 0.1em ;
        " > 
         ${key} </h3></div></a>`)
    .appendTo('#sidebar')
    .hover(function(){
        $(this).children('div').css('background-color','rgb(108,108,108)')
    },function(){ $(this).children('div').css('background-color','transparent') }    )
    
    }
    },500)

}
`
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
`
if(url.includes('https://sp.live.nicovideo.jp/favorites?77')
        ){  // nicovideo nico live mobile 
    `
    $.get( url, function(data,status){
        $()$.parseHTML(data)

    }
        )
    `
    $('[class="___item___2Ygdh ___item___2UWvK ___item-skin___3B9Gi"]:contains("開始")').remove()

    
    $(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">`)
    .prependTo('head')

    setTimeout(function(){
    $(`
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>`)
    .appendTo('body')
    },1000);

    var opt = 1;


    //list.push( $('[class="___program-card___375BS ___program-card___3Z6Vu"] a').attr('href') )
    //list = $('a[class="___anchor___F4gUZ ___anchor-base___3gkJT"]')  // It worked before
    list = $('[class="___item___2Ygdh ___item___2UWvK ___item-skin___3B9Gi"]')

    if(1){
        $('<div id="sheet0" style="background-color:black ;width:100%;overflow:hidden ;"></div>').prependTo('.___page___lyKFH')
        $('<div id="sheet" style="background-color:black; position: relative; width:82%;left:1% "></div>').prependTo('#sheet0')
    }

    function new_youtube(...args){
        w = $(window).width()*0.325+'px'; //  3x3
        h = $(window).height()*0.38+'px'; // 3x3
        for(let yid of args){
            if(yid=='WL'){
                $(`<div style="display:inline-block"><iframe id="${yid}"
                    style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=playlist&iv_load_policy=3&modestbranding=1&disable_polymer=true&list=WL" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.includes('youtube')&&yid.includes('user') ) {
                url = yid;
                yid= 'youtubeuser'+yid.split('user/')[1]
                
                if(yid.includes('/')){yid=yid.split('/')[0] }
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=user_uploads&list=${yid.split('user')[1]}&iv_load_policy=3&modestbranding=1&disable_polymer=true&list=WL" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.slice(0,3)=='sss'){
                url = `https://www.youtube.com/embed?listType=search&list=${yid.slice(3)}`
                $(`<div style="display:inline-block"><iframe id="${yid.replace(/ /g,'_')}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=search&list=${yid.slice(3)}&iv_load_policy=3&modestbranding=1&disable_polymer=true&list=WL" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.includes('twitch')){
                url = yid;
                if(yid.includes('twitch.tv/')){ 
                    yid=yid.split('tv/')[1]
                    if(yid.includes('/')){ yid=yid.split('/')[0]   } }
                yid = yid.replace('twitch','');
                    
                $(`<div style="display:inline-block"><iframe id="twitch${yid}" 
                    src="https://player.twitch.tv/?channel=${  yid}&autoPlay=1" 
                    frameborder="0" allowfullscreen="true" scrolling="no" 
                    height="${$(window).height()*0.4}" width="${$(window).width()*0.3275}"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('dailymotion')){
                url = yid;
                if(yid.includes('video/')){ 
                    yid=yid.split('video/')[1]
                    if(yid.includes('?')){ yid=yid.split('?')[0]   } }
                yid = yid.replace('dailymotion','');

            $(`<div style="display:inline-block"><iframe id="dailymotion${yid}" src="https://www.dailymotion.com/embed/video/${yid}?autoPlay=1" 
                width="${$(window).width()*0.3275}" height="${$(window).height()*0.4}" 
                frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`)
            .prependTo('#sheet')
            }
            else if(yid.includes('vimeo')){
                url = yid;
                if(yid.includes('vimeo.com/')){ 
                    yid=yid.split('vimeo.com/')[1]
                    if(yid.includes('?')){ yid=yid.split('?')[0]   } }
                yid = yid.replace('vimeo','');

            $(`<div style="display:inline-block"><iframe id="vimeo${yid}" src="https://player.vimeo.com/video/${yid}?autoPlay=1" 
                width="${$(window).width()*0.3275}" height="${$(window).height()*0.4}" frameborder="0" 
                allow="autoplay; fullscreen" allowfullscreen></iframe></div>`)
            .prependTo('#sheet')
            }

            else if(yid.includes('watch/sm')){
                w = $(window).width()*0.12*2.73+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                yid = yid.split('watch/')[1];
                if(yid.includes('?')){ yid = yid.split('?')[0]; }
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" 
                    src="https://embed.nicovideo.jp/watch/${yid}?oldScript=1&amp;referer=https%3A%2F%2Fwww.nicovideo.me%2Fwatch%2F${yid}
                    &amp;from=0&amp;autoplay=0&amp;allowProgrammaticFullScreen=1"></iframe></div>`)
                .prependTo('#sheet')
            
            }
            else if(yid.slice(0,2)=='sm'){
                w = $(window).width()*0.12*2.73+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                if(yid.includes('?')){ yid = yid.split('?')[0]; }
                $(`<div style="display:inline-block"><iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" 
                    src="https://embed.nicovideo.jp/watch/${yid}?oldScript=1&amp;referer=https%3A%2F%2Fwww.nicovideo.me%2Fwatch%2F${yid}
                    &amp;from=0&amp;autoplay=0&amp;allowProgrammaticFullScreen=1"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('fc2')){
                url = yid
                if(yid.includes('fc2.')){
                    yid = yid.split('com/')[1].split('/')[0]    
                }
                
                yid = yid.replace('fc2','');

                $(`<div style="display:inline-block"><iframe id="fc2${yid}"
                    style="margin: 1px auto; border:1px solid #242424;border-radius:4px;" 
                    width="${$(window).width()*0.325+'px'}" height="${$(window).height()*0.38+'px'}" 
                    src="https://fc2livecn.com/embedPlayer/?id=${yid}&lang=ja&suggest=1&thumbnail=1&adultaccess=1
                    &autoplay=0&mute=1" 
                    frameborder="0" scrolling="no" allowfullscreen=1 ></iframe></div>`)
                .prependTo('#sheet');
            }
            else if(yid.slice(0,2)=='lv'){
                w = $(window).width()*0.12*2.7+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                $(`<div style="display:inline-block"><iframe id="${yid}"
                    style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" src="https://ext.live2.nicovideo.jp/watch/${yid}?default_mute=true&amp;auto_play=true&amp;comment_visible=on&amp;niconico_link_hidden=true&amp;video_clickable=true&amp;gate_status_hidden=true&amp;link_url=https%3A%2F%2Flive.nicovideo.jp%2Fwatch%2Flv321420616%3Fref%3Dtop%26zroute%3Dindex&amp;"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('watch/lv') ){
                yid=yid.split('watch/lv')[1]
                if(yid.includes('?')){ yid=yid.split('?')[0]}
                w = $(window).width()*0.12*2.7+'px'; //  3x3
                h = $(window).height()*0.14*2.7+'px'; // 3x3
                $(`<div style="display:inline-block"><iframe id="lv${yid}"style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
                    class="___thumbnail___1Afwg" src="https://ext.live2.nicovideo.jp/watch/lv${yid}?default_mute=true&amp;auto_play=true&amp;comment_visible=on&amp;niconico_link_hidden=true&amp;video_clickable=true&amp;gate_status_hidden=true&amp;link_url=https%3A%2F%2Flive.nicovideo.jp%2Fwatch%2Flv321420616%3Fref%3Dtop%26zroute%3Dindex&amp;"></iframe></div>`)
                .prependTo('#sheet')
            }
            else if(yid.includes('earthcam')){ // earthcam
                if(yid.includes('name=')){
                    yid = yid.split('name=')[1].split('.flv&timezone')[0]
                }yid = yid.replace('earthcam','');

            $(`<div style="display:inline-block"><iframe id="earthcam${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
                width:${w};height:${h}"  
                src="https://www.earthcam.com/js/video/embed.php?vid=${yid}.flv&requested_version=current" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </iframe></div>`)
            .prependTo('#sheet')
            }

            else if(yid.length == 33){ // earthcam
                if(yid.includes('name=')){
                    yid = yid.split('name=')[1].split('.flv&timezone')[0]
                }yid = yid.replace('earthcam','');


            $(`<div style="display:inline-block">
                <iframe id="${yid}" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; "
                src="https://drive.google.com/file/d/${yid}/preview" width="${w}" height="${h}"></iframe>
                `)
            .prependTo('#sheet')
            }
            else if(yid.length == 11){
            url = "https://www.youtube.com/watch/"+yid
            $(`<div style="display:inline-block"><iframe id="${yid}"style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed/${yid}?autoplay=1&iv_load_policy=3&modestbranding=1&mute=1" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
            .prependTo('#sheet');
            
            }else if(!yid.includes('list=')&&yid.includes('v=') ){
                    url = yid
                    yid = yid.split('v=')[1]
                    if(yid.includes('&')){
                        yid=yid.split('&')[0]
                    }
                
            $(`<div style="display:inline-block"><iframe id="${yid}"style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed/${yid}?autoplay=1&iv_load_policy=3&modestbranding=1&mute=1" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
            .prependTo('#sheet');
            
            } else if( yid.includes('list=') ||
                yid.slice(0,2)=='PL'||yid.slice(0,2)=='UC'||yid.slice(0,2)=='UU'
                ){
                url = yid

             if(yid.includes('list=')){
                yid = yid.split('list=')[1]
                if(yid.includes('&')){ 
                    yid=yid.split('&')[0]}
            }
            $(`<div style="display:inline-block"><iframe id="${yid}"style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
            width:${w};height:${h}"  
                border-radius = "4px"
                src="https://www.youtube.com/embed?listType=playlist&iv_load_policy=3&modestbranding=1&disable_polymer=true&list=${yid}&autoplay=1&mute=1" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`)
            .prependTo('#sheet');
            }
            else{
                alert('Oops.Nothing found  ¯\\_(ツ)_/¯');return false
            }

            $(`<div id="${$('iframe').eq(0).attr('id') }" class="closeit1" style="position: absolute;display:inline-block; 
                width: 35px; height: ${$('iframe').eq(0).height()/3+'px'};
            background-color: #87CEFA  ; opacity:0.6; z-index: 999;border-radius:6px" ></div>`)
            .insertAfter($('iframe').eq(0))
            .click(function(){ 
                $(`#`+$(this).attr('id')).fadeOut(200,function(){
                    $(this).remove() 
                })
                $(this).remove();
                let s = Math.floor(Math.random()*100) %img.length
                add_img(img[s])

                img.splice(s,1);
                })
            .fadeOut('slow')
            .fadeIn('slow',function(){$(this).css('opacity','0.05')})
            .hover(function(){
                $(this).css('opacity','0.6')
                $(`#`+$(this).attr('id')).css('opacity','0.7')},
                function(){ 
                    $(this).css('opacity','0')
                    $(`#`+$(this).attr('id')).css('opacity','1') })


        }//end of for loop
        }

    // youtube watch later 1
        if(0){
        $(`<iframe style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
            width:${$(window).width()*0.325+'px'};height:${$(window).height()*0.38+'px'}"  
                border-radius = "4px"
            src="https://player.bilibili.com/player.html?aid=63054495&cid=40734416&page=1" scrolling="yes" border="0" frameborder="no" framespacing="1" allowfullscreen="true">
            </iframe></div>`)
        .prependTo('#sheet');// somehow doesn't work in loading
        $(`<iframe style="margin: 1px auto; border:1px solid #242424;border-radius:4px;" 
            width="${$(window).width()*0.325+'px'}" height="${$(window).height()*0.38+'px'}" 
            src="https://fc2livecn.com/embedPlayer/?id=${'9143596'}&lang=ja&suggest=1&thumbnail=1&adultaccess=1
            &autoplay=0&mute=1" 
            frameborder="0" scrolling="no" allowfullscreen=1 ></iframe></div>`)
        .prependTo('#sheet');

        }
        
        new_youtube('WL');
        

    if(1) {//                           Youtube and others
        dad = [
        'nQ1axMuLvt0', // 高鐵
        'vtBkYZmCCpk', 'dxpWqjvEKaM', 'Hu1FkdAOws0', // 東森財經　//東森 // TVBS
        'JVhWJmxVI9w', // AQUA
        'fNc3b_f3BFw', // SET iNEWS  // not allowed
        'wUPPkSANpyo', // 中天        // not allowed
        'PL02zpjjwMEjr_uUA_1zNmV_uSDrJMhEE5', // 大時代   not allowed
        'PLXrr3cMt3pbk6EBYbhhBn9WDzVcb8uJ9D', // 新聞挖挖挖
        'PLi0ZZWlxtL4HAiQjwZ6djimZBm7uW8jOf', // 綜藝大集合 not allowed
        'PLp7hnLHxd1KHK1HUzgpM9bJWdavXPE-Bl', // 東森氣象

        'ED4QXd5xAco', // 公視

        'PQLMD4iHhG8', // 國會頻道 1
        '-9lQuKoyb9w', // 國會頻道 2
        'q64jlLL8hIg', // waterfall
        'YWp2YMsEczc', // 美濃溪
        'xm_LXq3XsBo', // 梓官赤砍
        ];

        tw=[
        
        'vtBkYZmCCpk', 'dxpWqjvEKaM', 'Hu1FkdAOws0', // 東森財經　//東森 // TVBS
        'wUPPkSANpyo', // 中天       // not allowed
        
        'PQLMD4iHhG8', // 國會頻道 1
        '-9lQuKoyb9w', // 國會頻道 2
        
        '8xkTsk5T_SY', // 中視
        'XxJKnDLYZz4', // 民視
        'NbjI0cARzjQ', // 台視
        'IVWLupq4pk0', // 客家
        'VO0ghih_3g0', // 木棉花動畫
        'YWp2YMsEczc', // 美濃溪
        'xm_LXq3XsBo', // 梓官赤砍
        '33c5gG8GZjQ', // 馬祖 港
        'm3pbYDeAsaw',  // 石門水庫

        'PLjjrV9IhkIpf3Lm_CcnGep8utrDf-3trd', // 公視 新聞全球話
        'PLjjrV9IhkIpcwPTc3fRKCTZlWpl6MT4x0', // 公視 每日新聞
        'PLjjrV9IhkIpfgE-SC2T5B8LCuSA-nYfej', // 公視 管見新聞
        'PLd5zGth6CDdXbjaIYH_znBmvP83f9WBY7', // 消失的國界

        'qr4rdJ7zDb8', // hiroyuki
        'coYw-eVU0Ks', // ANN jp
        '_-ybzKvHz84', // Cat Hospital
        'siyW0GOBtbo', // Sky News
        'tPeUHECNLKs', // NBC2 US huston
        'kwxtkBcayK8', // ABC Australia
        'vCDDYb_M2B4', // CCTV  CH
        'dp8PhLsUcFE', // Bloomberg  Not allowed
        'NvqKZHpKs-g', // DW
        'jL8uDJJBjMA', // Al Jazeera
        'JvZVnBn6zEI', // CNA eng Singapore

        'ED4QXd5xAco', // 公視
        'UUkqrvXuqW7dN3E2_4v8Ha5Q', // 中廣 BCC RADIO 830
        'plDqw6o0LXg', // 台灣 地震
        'B-2TOkxUFCI', // 美國之音
        '1A6ytChL69g', // 明鏡
        
        ];
      

        newlist =[
        'yEoEp85mw2A','Psxv9VZ0L-c','0_RnxtaaIII','B8tQ8RUbTW8','xrPjvq32eKE','JVhWJmxVI9w',
        '4sSnEdJAh6Q','LdYimY3mPk0',// fox
                'coYw-eVU0Ks', // ANN jp
        ];
        newlist =[ // bottom
               //'xrPjvq32eKE', // Beach Tropical
                'LXWVYoBluT4', // Beach British Virgin Islands

            //'xm_LXq3XsBo', // 梓官赤砍
                'YWp2YMsEczc', // 美濃溪
                         'c4C1c4z8hTQ', // Katmai national park 
                //'8dmC9NK9NoY', // train norway
                'sXXaMSLAtVI', //
                        'coYw-eVU0Ks', // ANN jp
                        'P393gTj527k', // Venice Italy 2
                                'JqUREqYduHw', // Venice Italy
                                'DbY00xhcrgU', // Beach Huntington Beach Pie
                                "sbZNL98Z0GE",//.Street Thailand,  // ----------
        ];
        
        if(1
            ){
            for(let i of newlist  ){ new_youtube(i); }
        }else if(1
            ){
            var vid = 'T_h55ysAxtQ'
            //var end = [vid,vid,vid,vid,vid,vid,vid,vid,vid];
            
            //  > rockman x speed run
            touhou = [];
            ninjar =[];
            tales = [];
            persona =['PLjohP1uwRC9oMZ2rpTIaluRgEx9oiN0ov','PLNo0zGy2VDP3p7aP0YPMYDGDiQLNhOLhQ','PLPyrrGp9A6oCYE9HLZ4PY3CmNfEmlraw5','PLPyrrGp9A6oDxp24_SaOg-Smk-E5njuMO','PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB'];
            megaten =['PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB','iJwOiRWx5-k','PLuYWW6PcZgevwDxqvAfaY5lf1z6dGIhaQ','PLPyrrGp9A6oDkD4l5BJAldqFpUxZRZXXH','PLWevjNnsEtsY4yUry6H3exIiZthKEW-zD','PLoJz9N2bnBlsbfWCTjmRITKy5NhlFOyNT','JG5y98s80Jo','PLPyrrGp9A6oAcq7Gd9c_WOjvZW4q8oNKh','k9Yfq35jm-E','w7N4hH8pqpA'];
            megaten_p =['PLjohP1uwRC9oMZ2rpTIaluRgEx9oiN0ov','PLNo0zGy2VDP3p7aP0YPMYDGDiQLNhOLhQ','PLPyrrGp9A6oCYE9HLZ4PY3CmNfEmlraw5','PLPyrrGp9A6oDxp24_SaOg-Smk-E5njuMO','PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB','PLPyrrGp9A6oA4nR8eocu-__tv04i_jwxB','iJwOiRWx5-k','PLuYWW6PcZgevwDxqvAfaY5lf1z6dGIhaQ','PLPyrrGp9A6oDkD4l5BJAldqFpUxZRZXXH','PLWevjNnsEtsY4yUry6H3exIiZthKEW-zD','PLoJz9N2bnBlsbfWCTjmRITKy5NhlFOyNT','JG5y98s80Jo','PLPyrrGp9A6oAcq7Gd9c_WOjvZW4q8oNKh','k9Yfq35jm-E','w7N4hH8pqpA'];
            pokemon = [];
            kof = ["XKzk4M7G7wI","d7Bp8CwPCb0","PZPuQeOeBhk","IFHvDdUAnzI","YNfD5ndPSjs","-2TcH2ismsY","NJ9kV0emLMA","xrQLRCwM1Ds","DuAg9ILvzUo","ziyqWaKqb1Y","H5lc6Lle2lc","yuR-XEzUHAA",'greALx7jn4U','g4G0dX-w8QI'];
            mslug = ["ProWjLIi3MI","Trx8t74WlaM","IjM7kJ6Kj1Q","ngfD2YrTbIo","ZVxr47jkufM","OPCHeaqZZBQ","sfParGc8BJw","lw8yq1ubQG0","lMx4iLp-EAc",];
            batman_arkham = [];
            metrovania = [];
            ys = [];
            cas = ['4uwIvhtK2-8','w5Ht1WzeWv0','kGiEdTu3BGE','dCM-JDf8S2I','yQdDEXg36HA','El0vYauVjyY','nGCzrV-ir-I','ZMiSzFbSJJY','5YHjHzHJKkU'];
            // over 1 hr  mgs1 is eng ver
            mgs = ['L2zVJvsJAy0','3IyRAC_CSKI','q38NSWv1coI','gYKqHPN1S7A','nilgaHRg-Dg','y0JBivGJl-w','clV3iKNc0XU','4wEysNpXnD8','zD4bu4vTIb0'];
            bio = ['67mK3xSvRbo','S5XXjKuCYzw','lNhwDCNbejE','2oaN_e7vbHI','GNhsOdINu0I','pedlGMG2Ito','Uk3Qt5WjbT8','0cofIkvvH9w','giFH8uw-v0k'];
            mg = ['tD61AX9IBTc','ngViMRuKRCs','pUZzO2tb4ZU','o-KYbFS0wU0','NJOpu09w1rc','7VcZKdCU9I0','J_kRnmusJIY','9U8CDC-4L9M','NS_IUj1WgQw'];
            mgx = ['f8CHaiY0Yts','FxPayMr3hO0','_eDgZN5jzgU','mQPeEtncWuo','ClFSXWVz0i4','GD9SWB9P1Ys','oNoozJJkfh0','IURT8bhpm2I','VqNnkqQgFbc'];
            dq = ['vhLkT2n-Pk4','sKYF9ISuRAk','xlRO43u6mUo','lIRREn2y-lA','YaeRJqM8Vfs','OVmTZ_xR-8A','BQkAV8ZDTJw','2-GXejJ9oDY','0cofIkvvH9w'];
            ff =[
                '-NJkAyFwNPg', // 9
                '6vucZvS__zo', // 8
                'bBmoVUBOvXY',//'V3-1mxM0xFs', // 7  //'Ki38f41OJxE', // 7
                '8kX1t22Pzeg', // 6
                'vNUc2CzN9kw', // 5
                'VBkwHF_lSlE', // 4 
                'XEnkNjri_d0', // 3
                'xBUUekCp96c', // 2
                '4bM7NWJXjrQ'] // 1

            for(let i of mgx
                .reverse()
                ){
                
                w = $(window).width()*0.325+'px'; //  3x3
                h = $(window).height()*0.365+'px'; // 3x3
                
                new_youtube(i);

                }
        }

    }

    if(0) {//    Optional Live
        w = $(window).width()*0.33+'px'; //  3x3
        h = $(window).height()*0.38+'px';  var opt = 1;
        lv = 'lv321471600' ;
        $(`<iframe  style="margin: 1px auto; border:1px solid #242424;border-radius:4px; width:${w};height:${h}" 
            class="___thumbnail___1Afwg" src="https://ext.live2.nicovideo.jp/watch/${lv}?default_mute=true&amp;auto_play=true&amp;comment_visible=on&amp;niconico_link_hidden=true&amp;video_clickable=true&amp;gate_status_hidden=true&amp;link_url=https%3A%2F%2Flive.nicovideo.jp%2Fwatch%2Flv321420616%3Fref%3Dtop%26zroute%3Dindex&amp;"></iframe></div>`)
        .prependTo('#sheet')//.css('zoom','270%')   
    }else{
        var opt=0;
    }


    if(0
    ){ // optional video playlist
        sm=["sm28194074","sm28193982","sm28193920","sm28193847","sm28100013","sm28099842","sm28081523","sm28081317","sm27995525"];
        sm=['sm10473126'
        ];
        //sm=['sm30959747']
        var playtime = 999990;
        var i =1;

        for(var i=0;i<sm.length; i++){
        $(`<div style="display:inline-block"><iframe id="plr" style="margin: 1px auto; border:1px solid #242424;border-radius:4px; 
            width:${$(window).width()*0.12+'px'};height:${$(window).height()*0.14+'px'}" 
        allowfullscreen="allowfullscreen" allow="autoplay" frameborder="0"
            src="https://embed.nicovideo.jp/watch/${sm[i]}?oldScript=1&amp;referer=https%3A%2F%2Fwww.nicovideo.me%2Fwatch%2F${sm[i]}
            &amp;from=0&amp;autoplay=0&amp;allowProgrammaticFullScreen=1" style="max-width: 100%; display:block; margin: 0 auto;"></iframe></div>`)
        .appendTo('#sheet').css('zoom','270%')
        
        }
    }




    block_comu =[
    'なんかやるねぷ','うめ部','豚野郎放送','漫画家2人の暇','teppen','りり生',//'チルノチャンネル'
    'APEX','アペックス','マリオメ','ドラクエ','殺人鬼','【LIVE】','艦これ','スマブラ','ハイスクル','【実況】','【MLB】',
    '雑酒','酒雑','エンドレスレジェンド','黒い砂漠',
    'けたまが何かやるコミュニティ','自由帖','猛暑'
    ];

    for(i=0 ; i<list.length ; i++){   
    for(let b of block_comu){
            if($(list[i]).text().includes(b)){  
                console.log($(list[i]).text());
                list.splice(i,1);
            }  
        }   }
    
    for(i=0 ; i<list.length ; i++){


        lv = $(list[i]).children('div').children('a').attr('href')
        //$(list[i]).children('div').children('a').attr('href', 'https://live2.nicovideo.jp/watch'+lv)
        new_youtube(lv);
        // order:0

    }
    
    

    $('iframe').mouseover(function(){
        var copy= $(this).attr('src')
        if(copy.includes('nico')){
            copy= copy.split('.jp/')[1].split('?')[0];
        
        }else{
            copy= copy.split('bed/')[1].split('?')[0];
        }
        
        document.title=copy;

    })

    //setInterval(function(){
    //navigator.clipboard.writeText(document.title);
    //},2000);


    //$('#sheet0').click(function(){
    //    $('#'+$('iframe').eq(-1).attr('id')).prependTo('#sheet')        })
    
    if(0){

    $('<div id="0" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 1%; left:   26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="3" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 34%; left:  26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="6" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 68%; left:  26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="9" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 101%; left: 26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="12" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 132%; left: 26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="15" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 164%; left: 26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="18" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 196%; left: 26%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');

    $('<div id="1" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 1%; left:   53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="4" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 34%; left:  53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="7" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 68%; left:  53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="10" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top:101%; left: 53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="13" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 132%; left: 53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="16" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 164%; left: 53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="19" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 196%; left: 53%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');

    $('<div id="2" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 1%; left:  80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="5" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 34%; left: 80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="8" class="closeit" style="position: absolute;display:block; width: 40px; height: 40px;top: 68%; left: 80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="11" class="closeit" style="position:absolute;display:block; width: 40px; height: 40px;top: 101%; left:80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.0); z-index: 999;" ></div>').prependTo('body');
    $('<div id="14" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 132%; left:80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="17" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 164%; left: 80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');
    $('<div id="20" class="closeit"style="position: absolute;display:block; width: 40px; height: 40px;top: 196%; left: 80%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 999;" ></div>').prependTo('body');


    $('.closeit').hover(
        function(){
        $(this).css('background-color','rgba(110,218,255,0.5)');
        $( 'iframe').eq($(this).attr('id')).css('opacity','0.6') 
        //$( 'iframe').eq($(this).attr('id')).css('border','2px solid #add8e6;') 

    },function(){
        $(this).css('background-color','rgba(110,218,255,0.0)');
        $( 'iframe').eq($(this).attr('id')).css('opacity','1') 
        //$( 'iframe').eq($(this).attr('id')).css('border','1px solid #242424') 
    })
    .click(function(){
        $( 'iframe').eq($(this).attr('id')).remove() 
        let s = Math.floor(Math.random()*100) %img.length
        add_img(img[s])

        img.splice(s,1);

    })

    }

    var ch={
        "WL":"watch later",
        "PQLMD4iHhG8":"國會頻道 1",
        "-9lQuKoyb9w":"國會頻道 2",
        "YWp2YMsEczc":"美濃溪",
        "xm_LXq3XsBo":"梓官赤砍",
        'xurynuSqi1M':'高雄燈塔',
        'tWdI0YfY93Y':'.花蓮七星潭',
        'hZOpVKil9YE':'屏東 林邊溪',
        "33c5gG8GZjQ":"馬祖 ",
        "m3pbYDeAsaw":"石門水庫", 
        "PLjjrV9IhkIpf3Lm_CcnGep8utrDf-3trd":"公視 全球",
        "PLjjrV9IhkIpcwPTc3fRKCTZlWpl6MT4x0":"公視 每日",
        "PLjjrV9IhkIpfgE-SC2T5B8LCuSA-nYfej":"公視 管見",
        'PL4K-OwIaWxiDiYiPRgVfqgFLIu-abbVIl':'中央社 全球',
        
        "qr4rdJ7zDb8":"Hiroyuki",
        
        "coYw-eVU0Ks":"ANN",
        "UUGCZAYq5Xxojl_tSXcVJhiQ":"ANN ch",
        
        "_-ybzKvHz84":"Cat Hospital",
        "siyW0GOBtbo":"Sky News",
        "tPeUHECNLKs":"NBC2 US",
        "kwxtkBcayK8":"ABC Aus",
        "NvqKZHpKs-g":"DW",
        "jL8uDJJBjMA":"Al Jazeera",
        //"sA0lYmSuN1Q":"NDTV  India", // not allowed
        "vCDDYb_M2B4":"CCTV CH",
    
        "JvZVnBn6zEI":"CNA Singapore",

        "UCkqrvXuqW7dN3E2_4v8Ha5Q":"中廣電台 830",
        "1A6ytChL69g":"明鏡",
        "B-2TOkxUFCI":"美國之音",

        "plDqw6o0LXg":"台灣 地震",
        
        "B8tQ8RUbTW8":"InYourChill 1",
        "TY4nHKgSry0":"InYourChill 2",
        "UUP8wWzfUcral_E6iNMdIdKg":"Train Railway",
        'UU8mWulo_qPrlXZZw98nbR7g':'Train Slovakia /week',
        "yEoEp85mw2A":"南海電車　高野線",
        "sbZNL98Z0GE":".Street Thailand",  // ----------
        "vPxAgn3EtDQ":".Street NL",     // ----------

        "earthcam5204":"Hawaii",
        "earthcamphilippinesHD1":".Boracay",
        "earthcam7382":"Falls_N",
        "V7L9xiKwq6U":"Ocean Bar Fl.",
        '_LAw6D5CWHo':"black water Fl",
        "UG--sqneYYg":"Beach Florida ",
        "wnNrd-VjLsQ":"Beach Waimea Bay",
        "5lK8CJLW1oI":"Beach Okaloosa",    
        "6i0yI_pfg7k":".Beach Hawaii",  // ----------
        "XgS54H9cokY":"Beach Thailand",    
        
        "1FvwPEKgcsA":"Beach Crystal bay",
        "fa7wCF6JL1w":"Beach ball_N",
        "DbY00xhcrgU":"Pier-Huntington Beach",
        'bEoNVd3spEM':'Pier-Dania Beach ',
        'sXXaMSLAtVI':'Pier-Cocoa Beach',
        'YIaNM70J91M':'.Ship Cam_N',  // ----------
        
        "LXWVYoBluT4":"Beach Virgin Islands_f",
        "DH0VmRsj05c":"Mississippi_N",        
        "JqUREqYduHw":"Venice 1",
        "P393gTj527k":"Venice 2",
        "GgLRWs8OyMs":"Venice 3",
        "mr-O8qqLqeM":"Venice 4",
        "q64jlLL8hIg":"waterfall",
        "c4C1c4z8hTQ":"Katmai national park ",
        "AAnXQt8-gRs":"圓山高塔 央廣",
        "hJAdyea_BzI":"UW red",
        
        "https://live.fc2.com/19890425/":"cat cam",
        "earthcam14443":".animal meerkat",
        "XdsP3yX084A":"animal panda",
        "O6Ir_sMsTtc":"animal Nest",
        "LdYimY3mPk0":"animal fox_ night",
        "sDgWnw3YPjs":"animal shark",
        "JVhWJmxVI9w":"AQUA",
        "Z6v4hoxzpkc":"AQUA 2",
        "ogMTmdbYaPs":"AQUA 3",
        "HYknTgcw2BM":"AQUA 4",
        "F109TZt3nRc":"AQUA 5",
        
        //"napcrcam1.flv":"fish1",   
        //"hdtimes10.flv":"NY Times 1",  // not allowed

        "PLpc9QDUSa7bge6pcikc_FLYpH4s215ndb":"AlmazanKitchen",
        "PL_uLYGDZi5I48zhEwT-Y6Nn9XC2pymsC2":"Wind Walk",
        "PL2hH_nTlbRiMPG3ScndR0dUydCc61WwAp":"NYC Cyc",
        "PL2hH_nTlbRiMCD2wR1_6JJEVkQwjpQNDh":"NYC walk",
        'UUBcVQr-07MH-p9e2kRTdB3A':'Drive J Utah',
        'UUAcsAE1tpLuP3y7UhxUoWpQ':'JP walk Rambalac',
        "UUf9uPmJgnaaoLMro1BM8Dcw":"集落",
        "UUnq0zNFkSa8YFc3f1-7Q3mg":"遊研社",
        'UUHSsKYrMv7V34eGYGyv7BDA':'FTG M. Bizarro/w',
        'PL9XlYK9s2WGdOZO9PQI1BXdgKqjSJMutX':'Anime OPED',  // 90
        "RuAQR81dUyI":"風雲",
    };

    $(` 
        <div id="sidebar" style="position:absolute;opacity:0.8 ;display:block;color:white; zoom:75%; width: 15% ;height:100%; 
        top: 7%; left: 84%;right: 0;bottom: 0; background-color: rgba(110,218,255,0.05); z-index: 9;" >
        </div>`        ).appendTo('body')
    
    for(let [key, value] of Object.entries(ch) ){
    $(`<h3 class="sidel" style="display:inline-block; color:white; margin-block-end: 0.1em ;border:2px solid #add8e6; background-color :black; border-radius:4px" id=
        "${key}" > 
        ${value} </h3>`).appendTo('#sidebar')
    }
    $(`<div>
        <input id="vid" class="form-control form-control-sm" 
        type="text" placeholder="youtube/list id: UU***, PL***, WL***, sm*** or lv***">
            <button id="addbtn" type="button" class="btn btn-primary">
            Add</button>
             </div>
            `).prependTo('#sidebar')
    //<button id="title" type="button" class="btn btn-primary">Copy title</button>
    $('#vid').mouseover(function(){
        
        navigator.clipboard.readText().then(function(data){
            if(data.includes('list=')||
                data.includes('?v=')||
                data.includes('nicovideo')||
                data.includes('youtube.com/channel/')||
                data.includes('youtube.com/user/')||
                data.includes('vimeo')||
                data.includes('dailymotion')||
                data.includes('twitch.tv/')||
                data.includes('fc2.')||
                data.includes('earthcam')||
                data.slice(0,2)=='UU'||
                data.slice(0,2)=='WL'||
                data.slice(0,2)=='sm'||
                data.slice(0,2)=='lv'||
                data.slice(0,2)=='PL'
                ){
                    
                
                $('#vid').val(data).fadeOut(100).fadeIn(100)
            }

            })
    })

    $('#addbtn').click(function(){
        let id = $("[class='form-control form-control-sm']").val();
        new_youtube(id);
    })

    $('.sidel:contains(".")').css('color','#98FB98')
    $('.sidel').hover(
        function(){$(`<img id="closeitem" style="zoom:11%;position:absolute;display:block"
            src="https://icon-library.net/images/close-button-icon/close-button-icon-27.jpg">`).appendTo(this)
            .click(function(){$(this).parent().remove() })
             },
        function(){$(this).children('img').remove() }
        )


    for(let i of $('[class="___anchor___F4gUZ ___anchor-base___3gkJT"]')){
        $(i).attr('id',$(i).attr('href'))

        $('<img class="smallbox" style="zoom:30%;cursor:pointer" src="data:image/png;base64,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">').prependTo($(i))
    
    }

    $('.smallbox').click(function(){
        window.open($(this).parent().attr('id'),
            "_blank",'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width=350,height=210,left=1220%,top=599%');
    }).hover(function(){$(this).css('opacity','0.6')},
                function(){$(this).css('opacity','1')},)

    //$('[class="___anchor___F4gUZ ___anchor-base___3gkJT"]').removeAttr('href')


    $('.sidel').click(function(){
        //$('html,body').animate({ scrollTop:$(this).offset().top} ,0)
        new_youtube($(this).attr('id') );
        //$('html,body').animate({scrollTop:$(this).offset().top-  $(window).height()*0.43  },100)
        $('.ume').last().remove()
    }).hover(
    function(){$(this).css('background-color','#6c6c6c')},
    function(){$(this).css('background-color','black')}
    )

    img=[
    'https://cdn.animenewsnetwork.com/assets/a965b47a4e165d7a7d7865ab643280b285eb6628.jpg',
    'https://p1-e6eeae93.imageflux.jp/c!/a=2,w=460,h=460/sevenvape/ba2959d6f2d8d75c57a7.jpeg',
    'https://vignette.wikia.nocookie.net/neptunia/images/8/8b/Kami_Jigen_Idol_Neptune_PP_Complete_Bundle_Processor_Vol.1_Album_Art.png/revision/latest?cb=20130815222050',
    'https://vignette.wikia.nocookie.net/macross/images/1/17/Fire_Bomber_-_Radio_Fire%21%21.jpg/revision/latest?cb=20161111232840',
    'https://i.ytimg.com/vi/Oi6FlwukGcw/hqdefault.jpg',
    'https://i.kinja-img.com/gawker-media/image/upload/s--FjPrp55c--/c_scale,f_auto,fl_progressive,q_80,w_800/d6jfxjeqjtifzog9vjk8.jpg',
    'https://m.media-amazon.com/images/M/MV5BYWQzOTcwYWItNWI2Mi00MWZkLWJkMmQtZGRlZThjMDJkMzlkXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg',
    'https://66.media.tumblr.com/6fd6ee8c493531ac85a7729ce7ecd3f6/tumblr_ov4j78UYoX1qckikjo2_500.jpg',
    'https://media2.giphy.com/media/dQXgiJSI8QEBa/source.gif',
    'http://basementrejects.com/wp-content/uploads/2015/03/cowboy-bebop-jet-black-battles-vincent-eiffel-tower-ending-review.jpg',
    'https://66.media.tumblr.com/60fda27c84919ce6c559e59ceaad51a8/tumblr_pf0k55NC181v1hotuo2_500.gif',
    'http://giphygifs.s3.amazonaws.com/media/9bxfaL5pC8oso/giphy.gif',
    'https://upload.wikimedia.org/wikipedia/commons/7/76/Cowboy_Bebop_intertitle.jpg',
    'http://livedoor.blogimg.jp/yabanet/imgs/0/0/00e907d8.jpg',
    'https://www.thefinalfantasy.com/gallery/wallpaper/ff5/ff5-black-title-screen-1024.jpg',
    'http://33.media.tumblr.com/997ce632b27317063ed36a59f91b8ff8/tumblr_n864xsWixf1s7p9b6o1_r3_500.gif',
    'https://thumbs.gfycat.com/FakeComfortableHatchetfish-mobile.jpg',
    'https://i.v-s.mobi/2K8dVAkEHhtoH2z1Tobxf6u8jmpO8UQSZrI0iT3INaFQsxa6ce_w5bakuhIDHA1h7RdTCBLFqAzmIgNVVjQzHQ.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cbaad78-b934-4415-bef4-50bb8b30603f/dc5nji9-ad7afdfe-0c2c-4a34-8f1d-be1d1502a31e.jpg/v1/fill/w_1192,h_670,q_70,strp/jjba__stardust_crusaders_opening_wallpaper_recolor_by_kaz_kirigiri_dc5nji9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcLzdjYmFhZDc4LWI5MzQtNDQxNS1iZWY0LTUwYmI4YjMwNjAzZlwvZGM1bmppOS1hZDdhZmRmZS0wYzJjLTRhMzQtOGYxZC1iZTFkMTUwMmEzMWUuanBnIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TagOATnlQ-Upjv3198saOi2kBQ2mxurjADyNdwhAaQk',
    'https://66.media.tumblr.com/6b603f88b3b7db26b697327966617f6b/tumblr_pof0ztPtnb1rzp45wo1_1280.jpg',
    'http://i.imgur.com/yYY8VBk.jpg',
    'https://www.animenpc.com/wp-content/uploads/2019/03/0301162647_5c78deb7e3b7c.jpg',// voceroid akane
    'https://i.kym-cdn.com/photos/images/original/000/968/070/727.gif', // metal slug 3 ed
    'https://pm1.narvii.com/5981/f3c4e0c58cb8b91e2d909bc9781214fc0f8f3d5f_hq.jpg', // akira
    'http://artisticmetropol.es/web/wp-content/uploads/Akira-1.jpg',            // akira
    'https://images-na.ssl-images-amazon.com/images/I/519ATzukiIL.jpg',         // akira
    'https://bitex-cn.com/upload/wordfile/567/109567_p1.jpg',//innocence
    'https://images2.static-bluray.com/reviews/15144_5.jpg',//innocence
    'https://www.ganriki.org/media/2017/gits-innocence-035.jpg',//innocence
    'https://i.ytimg.com/vi/iCDrJD1x9bk/maxresdefault.jpg',// pt2
    'https://image.tmdb.org/t/p/w500_and_h282_face/tS39rr7z2KPDTic2Ln2o6TpwaCq.jpg',// pt2
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1096-FQGMshEIpE3e.jpg', // pt2
    'http://i.imgur.com/Xj5KlWb.png', // demons souls
    'https://i.redd.it/2eh041rhsuhz.jpg', // demons souls
    'https://gamepod.vg/wp-content/uploads/2016/09/G2KuQ8.png', // demons souls twin fang
    'https://blog-001.west.edge.storage-yahoo.jp/res/blog-3f-0f/anno_yuki/folder/1299352/39/40173339/img_5_m?1538068336',//demons souls
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeByTZNhjR09C_2vSzeBjM6N-Pt_cOnAZw1SZ0DUaqdcQq8iU', // demons souls
    'https://i.ytimg.com/vi/1YmUZTGuMXc/maxresdefault.jpg', // demons souls
    'https://i.ytimg.com/vi/rAe85H5Yfok/maxresdefault.jpg', // demons souls
    'https://pbs.twimg.com/media/CBSxs_pUYAAjvE4.jpg', // dark souls
    'https://thumbs.gfycat.com/DigitalReliableIndianabat-size_restricted.gif',//dark souls 1
    'https://attach.setn.com/newsimages/2017/12/24/1188085-XXL.jpg', // 1000ntd
    'https://vision.org.au/radio/wp-content/uploads/sites/6/2017/10/ten-dollar-note.jpg', // aus 10 dollar
    'https://www.therightnote.com.au/wp-content/uploads/2019/06/50-dollar-fraser-evans-1995-general-issue-obverse-hh95777452.jpg',// aus 50 dollar
    'https://tshop.r10s.jp/yamabun-r/cabinet/03293397/03293402/imgrc0062578401.jpg',// 1000yen
    'https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg', // 1 usd
    'https://compote.slate.com/images/d315bc41-2074-4adf-86f1-4d108c5e4bce.jpg',// zimbabwe dollar
    'https://pm1.narvii.com/6831/70cce349e46df61de46644d7c0f047c4c30eba5dv2_hq.jpg',// sky crawler
    'https://66.media.tumblr.com/9eee0625d1be61f25edcfb73aa19f64a/tumblr_o50x8z2VpS1v1l4cbo1_400.gif', // macross 7
    'https://tn.smilevideo.jp/smile?i=25732255.L',// macross 7
    'https://vthumb.ykimg.com/0541040852E2C8556A0A4F51F58E97FB',// macross 7
    'https://www.geek.com/wp-content/uploads/2016/06/Metal-Gear-Solid-3-pachinko-625x350.jpg',//mgs3
    'https://www.mobygames.com/images/shots/l/409030-metal-gear-solid-3-subsistence-playstation-2-screenshot-second.jpg',//mgs3
    'https://usercontent2.hubstatic.com/14349365_f520.jpg',//mgs3
    'https://i.kinja-img.com/gawker-media/image/upload/s--seURE_48--/c_scale,f_auto,fl_progressive,q_80,w_800/qserud2kvahhygfcm0vd.jpg',//mgs3
    'https://renote.jp/uploads/image/file/80853/tVGG_20200.jpg',// bio3
    'http://game.snkplaymore.co.jp/official/online/orochi/img/main_kof96.jpg',//kof96
    'https://cdn.vox-cdn.com/thumbor/W6VwTbTzWB1CYHy3zJKYdc_Y0AU=/0x0:1920x1080/1200x800/filters:focal(810x243:1116x549)/cdn.vox-cdn.com/uploads/chorus_image/image/61924135/sotn.0.jpg',//sotn
    'https://images-na.ssl-images-amazon.com/images/I/51C2ZS19ZWL.jpg', //aria of sorrow
    'https://server.emulator.games/images/gameboy-advance/akumajou-dracula-circle-of-the-moon-capital.jpg',//circle of the moon
    'https://cdn.base.geonet.jp/img/prod/600/001/07/0010795-01-01.jpg',// castlevania ps2
    'https://thumbs.gfycat.com/MajesticDazzlingElectriceel-size_restricted.gif',// persona2
    'http://1.bp.blogspot.com/-exYVu6fkKbM/UZbvpMrX_yI/AAAAAAAADDE/e_8HtbGLeos/s1600/Logo.png',// siren
    'https://cdn.vox-cdn.com/thumbor/q0C4V0V6fFkxmkgLLfXSvWsFwCo=/0x2:960x542/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/32988959/hr_giger.0.jpg', // darkseed
    'https://i.ytimg.com/vi/egzutCUFaOw/maxresdefault.jpg',// megaten 3
    'https://pbs.twimg.com/media/DGHUd1jU0AAoHCB.jpg',// gundam f91
    'https://i.ytimg.com/vi/-OEqBGUYT3M/maxresdefault.jpg',// gundam 0083
    'https://i.pinimg.com/originals/1a/20/15/1a20157c9231a9d84597d7936646e8b7.jpg',// gundam zeta
    'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Folliebarder%2Ffiles%2F2017%2F09%2Fzeta_gundam_movies.jpg',// gundam zeta
    'https://cdn6.bigcommerce.com/s-se76uaubob/products/326/images/1349/0__50289.1464731759.1280.1280.jpg?c=2',//nu gundam

    'https://66.media.tumblr.com/ed242effc5540ec75a97d97c070f2f38/tumblr_ncxp4jAtHY1rjxyrgo1_400.gif',//getter robo
    'https://thumbs.gfycat.com/TalkativeHarmfulArcticseal-size_restricted.gif',//getter robo
    'https://66.media.tumblr.com/473e9f219365732e8debc8af8bdd8db0/tumblr_n551o9hW5W1tzixowo1_500.gif',// getter robo
    'https://media.giphy.com/media/13faAT3a5hkVyg/giphy.gif',// getter robo
    'https://i.imgur.com/Ebf1g6F.gif',//getter robo
    'https://r.mprd.se/MAME/select/samsho2.png',//samurai spirits
    'https://pbs.twimg.com/media/D-RU8_4UcAAL50p.jpg',// sidonia no kishi
    'https://i.imgur.com/GnSP7S2.gif', // samurai champloo
    'https://thefindmag.com/wp-content/uploads/Samurai-Champloo-Logo.png',// samurai champloo
    'https://media.giphy.com/media/Avg9lmfzRZm7K/giphy.gif',// samurai champloo 
    'https://pm1.narvii.com/5687/79b4c111bad12098e9c699d56317caa935bce05e_hq.jpg',// samurai champloo
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9891a9e1-f831-4681-9d4d-a14df8569e02/dd6lfdn-6a94621c-d51e-4644-b1c2-358dfeac0101.png',//samurai champloo
    'http://photos1.blogger.com/blogger2/1778/2338/1600/Champloo3.jpg',// samurai champloo
    'https://i2.wp.com/www.dorkaholics.com/wp-content/uploads/2016/09/samurai-champloo-2.jpg?fit=1024%2C634&ssl=1',//samurai champloo
    'https://i.ytimg.com/vi/jGb9Da_WQyo/maxresdefault.jpg',// berserk
    'https://i.ytimg.com/vi/-Sa36VU5db4/maxresdefault.jpg',// berserk
    'https://sumikai.com/wp-content/uploads/2016/02/rage-of-bahamud.jpg',// bahamut genesis
    'https://pbs.twimg.com/media/B9HyolECAAEVOJJ.jpg',// bahamut genesis
    'https://media.archonia.com/images/samples/67/47/336747_s2.jpg',// neptunia
    'https://i.pinimg.com/originals/a7/f7/f6/a7f7f6e912eb4278dd3612da2a2ea375.gif',// dtb
    'https://66.media.tumblr.com/ac206983a4484be394f98e8e49bc5937/tumblr_n9yt2iYR8F1qc5rbmo5_250.gif',//cowboy bebop  movie
    'https://66.media.tumblr.com/7e6d90ade128242844c420a6cc395def/tumblr_n9yt2iYR8F1qc5rbmo8_r1_250.gif',// cowboy bebop movie    
    'https://i.ytimg.com/vi/5L6bHNYyh6I/maxresdefault.jpg',//monster 
    'http://freakengine.com/wp-content/uploads/2012/04/monster4.jpg',//monster
    'https://thumbs.gfycat.com/CapitalAccomplishedDog-size_restricted.gif',//monster
    'https://i.pinimg.com/originals/2b/78/d5/2b78d577fefae8bb6df8f673ceef21ba.png',//film moon
    'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fgames%2Ffiles%2F2018%2F02%2Fsotc_ps4_1-1200x675.jpg', // shadow of collosus
    'https://s3.bukalapak.com/img/325051537/w-1000/tamiya_4wd_beat_magnum_trf_victorys.jpg',//bakuso kyodai
    'https://forum.tomshw.it/attachments/tam19406-jpg.20550/',// bakuso kyodai
    'https://www.multitoysgame.com/image/data/TAMIYA/BUSTER%20SONIC%20AR%20CHASSIS.jpg',//bakuso kyodai buster sonic
    'https://media.karousell.com/media/photos/products/2019/01/16/new_tamiya_hurricane_sonic_premium_1547597525_092c5351.jpg',//bakuso kyodai
    'https://lesblablasdetachan.files.wordpress.com/2017/08/cover.jpg?w=549&h=242',// master keaton
    'http://watchplayread.com/wp-content/themes/_patterns/timthumb.php?src=http%3A%2F%2Fwatchplayread.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2015%2F06%2FMaster-Keaton-Volume-3.jpg&q=90&w=650&h=300&zc=1',//master keaton
    'https://www.suruga-ya.jp/database/pics/game/122003107.jpg',//master keaton
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/The_Hunt_for_Red_October_movie_poster.png/220px-The_Hunt_for_Red_October_movie_poster.png',//red octobor
    'https://data.whicdn.com/images/245349793/original.gif',//suzumiya haruhi
    'https://i.redd.it/mdf0cwgchbu21.gif',// suzumiya haruhi intro
    'https://media1.tenor.com/images/093b967de4114d379d5860ff0c335c2a/tenor.gif?itemid=7506285',//suzumiya haruhi nagato
    'https://steamuserimages-a.akamaihd.net/ugc/946215117286785210/5DEE8EC4290CF2091F83061954A0F8D91A6C30B1/',//steins gate
    'https://thumbs.gfycat.com/KindlyCautiousAnnelida-size_restricted.gif',// steins gate
    'https://66.media.tumblr.com/b8fcbc85373eed3569e565114805fe76/tumblr_ni12e6766T1u6wzsso1_400.gif',//steins gate
    'https://img.gifmagazine.net/gifmagazine/images/815069/original.gif',//steins gate
    'https://vignette.wikia.nocookie.net/steins-gate/images/d/df/Steins_Gate_-_06_-_Large_16.jpg/revision/latest?cb=20130102025953',//steins gate
    'https://media2.giphy.com/media/3DeF8VvBBGLYs/source.gif',// steins gate
    'https://thumbs.gfycat.com/DapperSimpleIndianpangolin-size_restricted.gif',// hunter x hunter
    'https://s1.dmcdn.net/v/MkPXL1TABWyl-Kz56/x1080',

    chrome.extension.getURL("images/talk_default.gif")
    ];

    //21-$('iframe').length
    var imgcount = 38-$('iframe').length;

    function add_img(url){
        if(typeof url==='undefined'){
            url ='https://previews.123rf.com/images/gdolgikh/gdolgikh1207/gdolgikh120700169/14478724-raw-pine-planks-background.jpg';
        }

        $(`<div class="ume" style="
            width:${$('iframe').eq(0).width() }px; 
            height:${$('iframe').eq(0).height() }px; overflow:hidden ;border:1px solid #242424;border-radius:4px;
            display:inline-block; 
            background-image: url(${url});background-size: cover;
            opacity:0.6;
            " ><img style="height:100%;     margin:auto; display:block;"
            src="${url}"></div>`)
        .appendTo('#sheet')
    }
    //for(var i of img){
    for(var i=0;i<=imgcount +1 ;i++){
        let s = Math.floor(Math.random()*100) %img.length
        add_img(img[s])

        img.splice(s,1);
    }

    $('.closeit').click(function(){
        $( 'iframe').eq($(this).attr('id')).remove() 
        let s = Math.floor(Math.random()*100) %img.length
        add_img(img[s])

        img.splice(s,1);

    })


    $('[class="___program-card___375BS ___program-card___3Z6Vu"]').css('height','50%')
    
    $('[class="___anchor___F4gUZ ___anchor-base___3gkJT"]').off().click(function(){
        let lv = $(this).attr('id')
        $(this).removeAttr('href')
        
        $('.ume').last().remove()
        new_youtube(lv);
    })

    //------------------------------------------------
    grid = [
    chrome.extension.getURL("images/-11-.png"),
    chrome.extension.getURL("images/-22-.png"),
    chrome.extension.getURL("images/-33-.png"),
    ];
    gi = 2;

    $(`<div id="grid" style="position:fixed;cursor:pointer;
        top:1%; left:90%;zoom:10%;background-color:white;opacity:1;border-radius:10px">
        <img src="${grid[gi]}"></div>`)
    .prependTo('#sidebar')
    .hover(
        function(){
        $(this).css('background-color','rgba(255,255,255,1.0)');

    },function(){
        $(this).css('background-color','rgba(255,255,255,0.9)');
        
    }).click(function(){
        gi= (gi+1)%grid.length; 
        $(this).fadeOut(100).fadeIn(100)
        
        setTimeout(function(){
        $('#grid>img').attr('src',grid[gi]) },100)

        $('#sheet').fadeOut(100).fadeIn(100)
        
        setTimeout(function(){
        if(gi==0)     {    $('style').last().html('iframe,.ume{zoom:303%}')
                            $('#nextsc').show()}
        else if(gi==1){    $('style').last().html('iframe,.ume{zoom:150%}')
                            $('#nextsc').hide() }
        else if(gi==2){    $('style').last().html('iframe,.ume{zoom:100%}')
                            $('#nextsc').hide() }
        },100)       
        
    })


    $(`<img id="round" style="zoom:20%;cursor:pointer;opacity:0.8;position:absolute; top:-5%"
        src="${chrome.extension.getURL('images/round.png')}" oncontextmenu="return false"
        alt="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/214/clockwise-rightwards-and-leftwards-open-circle-arrows_1f501.png">`)
    .insertAfter('#grid')
    .click(function(){
        $('iframe').eq(-1).prependTo('#sheet')
        $('.closeit1').eq(-1).prependTo('#sheet')
    })
    .contextmenu(function(){
        $('iframe').eq(0).insertBefore($('.ume').eq(0))
        $('.closeit1').eq(0).insertBefore($('.ume').eq(0))
    })
    .hover(function(){
        $(this).css('opacity','1')
    },function(){ $(this).css('opacity','0.8') })
    
    document.onkeypress=function(e){
        //document.title= e.keyCode;
        if (e.keyCode === 91 ){
            $('#nextsc').trigger('click')
        }
        if (e.keyCode === 92 ){
            $('#nextsc').trigger('contextmenu')
        }
        if (e.keyCode === 96 || e.keyCode === 93 ) {
            $('#grid').trigger('click')
        }}

    
    $(`<img id="save" style="zoom:14%;cursor:pointer;opacity:0.8;position:absolute; top:-3%; left:-2% "
        src="https://img.icons8.com/cotton/2x/save.png" oncontextmenu="return false" 
        title="right click to load"
        alt="https://img.icons8.com/cotton/2x/save.png"
        >`).insertAfter('#grid')
    .hover(function(){
        $(this).css('opacity','1')
    },function(){ $(this).css('opacity','0.8') })
    .click(function(){
        $(this).fadeOut(150).fadeIn(150)
        savel=[];
        ifr = $('iframe')
        for(let i of ifr){
            savel.push( $(i).attr('id'))        }
        chrome.storage.sync.set({savel:savel});
        console.log(savel);
    })
    .contextmenu(function(){
        chrome.storage.sync.get(['savel'],function(result){
            savel = result.savel
            savel.reverse().splice(0,1)
            //savel = savel.reverse()
            $('.closeit1').trigger('click')
            setTimeout(function(){
            for(let i of savel){
                new_youtube(i);    
            }
            },500);
            
        });
    })



    scrollto = 0
    $(`<img id="nextsc" src="${chrome.extension.getURL('images/2screen.png')}"
        alt="https://cdn4.iconfinder.com/data/icons/business-2-retro-2/60/79_-Change_Screen_Mode-_design_graphic_tool-512.png"
        style="zoom:5%;position:fixed;top:2px;right:5%; display:none;opacity:0.7" >`)
        .prependTo('#sidebar').hover(
            function(){$(this).css('opacity','1')},function(){$(this).css('opacity','0.7')},)
        .click(function(){ 
            scrollto= (scrollto+1)%$('iframe').length;
            $('html,body').animate({scrollTop: $('iframe').height()*scrollto*2.555 }, 200); return false
        })
        .contextmenu(function(){
            scrollto= (scrollto+$('iframe').length-1)%$('iframe').length;
            $('html,body').animate({scrollTop: $('iframe').height()*scrollto*2.555 }, 200); return false  
        })

    $(`<img id="totop" src="${chrome.extension.getURL('images/totop.png')}"
        alt="https://cdn0.iconfinder.com/data/icons/simple-arrows-essentials-flat/48/Simple_Arrows-01-512.png"
        style="zoom:10%;display:none;position:fixed; bottom:30%;right:20px;opacity:0.6" >`)
        .prependTo('#sidebar').hover(
            function(){$(this).css('opacity','1')},function(){$(this).css('opacity','0.6')},)
        .click(function(){ $('html,body').animate({scrollTop:0}, 200); return false})

    $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#totop').fadeIn();
            } else {
                $('#totop').fadeOut();
            }
        });


    $('#sheet').css('zoom','83%')
    $('html, body').animate({ scrollTop: 0 }, 'fast');

    
     $('<div style="left:0px;background-color:blue;opacity:0;width:5px;height:100%;position:fixed;display:block"></div>')
    .prependTo('#sheet0')
    .click(function(){ window.open(" ", "_self","");window.close();})
    .hover(
            function(){$(this).css('opacity','0.7').fadeIn(300)},
            function(){$(this).css('opacity','0'); $(this).fadeOut(300);$(this).fadeIn(0)} )

    $('[rel="icon"]').attr('href',chrome.extension.getURL('images/Youtube-blue.png'))
    $('[rel="Shortcut Icon"]').attr('href',chrome.extension.getURL('images/Youtube-blue.png'))
}
`
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
`



}).call(this);

