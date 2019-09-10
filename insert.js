(function() {



//var cont = document.getElementsByClassName("MyPageNicorepoApp");

//var cont = document.getElementById("MyPageNicorepoApp");



//var cont = document.getElementsByClassName("popout-for-youtube__button");
var cont = document.getElementById("owner-container");




var div=document.createElement("div"); 
var input=document.createElement("input"); 


input.innerText="adfsdf";
document.body.appendChild(input); 

div.innerText="test2133<bu";
document.body.appendChild(div); 

input.value="COME";
input.type ="button"
input.setAttribute('onmouseover','javascript:trigger(); void 0;');

cont.appendChild(div);    // crush when you trying to append empty child,  cont is NULL on NICONICO
cont.appendChild(input);
div.class = "video-stream html5-main-video"
div.style = "overflow: hidden; height: 315px; width: 100%; position: relative;"


//<input type="button"  onclick="trigger()" value="コメント" />


function trigger() {
  myVar = setInterval(addComment,2000);
}

function setPosition(id) {

    var top = $('.video-stream html5-main-video').offset();
    var itemHeight = $(id).height() ;
    var bottom = top.top + $('.video-stream html5-main-video').height() - itemHeight ;//
    if (bottom >= 50){ bottom -= 50}
    var length = bottom - top.top ;
    return bottom - length * Math.random();
}


var like = 1; // this bring idx error
var idx = 0;
var commentNum = 0;


function addComment() {
    var comment = $("#comment_text").val();
    commentNum++;
    var commentPos = $('.video-stream html5-main-video').offset();
    var nico_comment = $('<div id="item" style="font-size: 18px; color: white; font-weight: bold; text-shadow: black 1px 1px 1px; width: 100px; white-space: nowrap; position: absolute;">' + comment + '</li>').appendTo('.video-stream html5-main-video');

    if(idx==1){
        var nico_comment = $('<div id="item" style="font-size: 21px; color: #aacbff; font-weight: bold; text-shadow: black 1px 1px 1px; width: 100px; white-space: nowrap; position: absolute;">' + comment + '</li>').appendTo('.video-stream html5-main-video');
    }


    var x = document.getElementsByClassName("comment-renderer-text-content");
    var len = x.length;
    if(idx == len){
        idx=0;
    }

    var likes = document.getElementsByClassName("comment-renderer-like-count on")[idx].innerHTML - 1;
    



    if(like&&likes){
        $("#comment_text").val(document.getElementsByClassName("comment-renderer-text-content")[idx].innerHTML+' 👍'+likes);
                         }
    else{
        $("#comment_text").val(document.getElementsByClassName("comment-renderer-text-content")[idx].innerHTML);
    }

    idx++;

}


$(".video-stream html5-main-video").one(function(){
  //as noted in addendum, check for querystring exitence
  var symbol = $("#video1")[0].src.indexOf("?") > -1 ? "&" : "?";
  //modify source to autoplay and start video
  $("#video1")[0].src += symbol + "autoplay=1";
 });











}).call(this);