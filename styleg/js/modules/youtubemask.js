

$(document).ready(function(){
    $('.inter-video-mask').each(function(){

        var currentID = $(this).attr('id');

        $('#'+currentID).parent().addClass('fakeyoutubebg').css("background-image","url('http://img.youtube.com/vi/" + currentID + "/0.jpg')")


        var youtubelogo = document.createElement("img");
        youtubelogo.src = 'http://www.haaretz.co.il/st/c/static/resources/img/items/youtube.png';
        youtubelogo.setAttribute('class','youtubeLogo');
        $(this).append(youtubelogo);

        var tempButton = document.createElement("img");
        tempButton.src = 'http://www.haaretz.co.il/st/c/static/resources/img/items/youtubeplay.png';
        tempButton.setAttribute('class','youtubeplayButton');
        tempButton.id = 'butt' + currentID;
        $(this).append(tempButton);

        var $youtubeLink = "https://www.youtube.com/embed/" + currentID;
        var $mobileYoutubeLink = "http://m.youtube.com/watch?v=" + currentID;
        //var tempEmbedStr = '<iframe src="https://www.youtube.com/embed/' + currentID +'?playlist=' + currentID +'&controls=0&autoplay=0&wmode=transparent&loop=0&modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>'
        var tempEmbedStr = '<iframe src="' + $youtubeLink + '" frameborder="0"></iframe>'

        $('#'+tempButton.id).on('click',function(){
            if (isMobile.android.device) {window.open($mobileYoutubeLink)}
            else {
                $('#' + currentID).html(tempEmbedStr);
                inter_players[currentID] = new YT.Player(currentID, {
                    videoId: currentID,
                    events: {
                        'onReady': onPlayerReady
                    }
                });
            }
        })
    })

    function onPlayerReady(e){
        if (!isMobile.apple.device) {
            e.target.playVideo();
        }
    }
});
