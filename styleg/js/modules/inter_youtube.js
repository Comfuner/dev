var inter_players = {}, playersArr = [];
// --- load the youtube api script --- //

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
    console.info('%c YouTube Iframe Api Ready','font-size: 14px;font-weight-bold; color:blue');
    window.isYouTubeReady = true;
    //playersArr = document.querySelectorAll('.inter_youtube');
    $('.inter_youtube').each(function(){
        console.log($(this));
        var tempId = $(this)[0].id,
            tempAttr = JSON.parse($('#'+tempId).attr('data-YTparam'));
                inter_players[tempId] = new YT.Player (
                tempId, {
                videoId: tempId,
                playerVars: tempAttr
            })
    })
}



