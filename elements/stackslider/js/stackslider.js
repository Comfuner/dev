/**
 * Created by elijahu.malka on 20/09/2016.
 */

var $images = $('.inter_input-range-stage > img');
for (var i = 0; i < $images.length; i++) {
    if (i !== 0) {
        $($images[i]).addClass('image-off');
    } else {
        //$($images[i]).css('opacity','1 !important');
    }
}
var $lastValue = 0;


function imageSwitcher(val) {
    console.log(val);
    $value = val;
    $($images[$lastValue]).addClass('image-off');
    //$($images[$lastValue]).removeClass('image-on');
    $($images[$value]).removeClass('image-off');
    //$($images[$value]).addClass('image-on');
    $lastValue = $value;
}
function imageChecker() {
    console.log(rangeVal);
    if (rangeVal > maxVal) {
        rangeVal = 0;
        $('#range1').val(rangeVal);
        $('.inter_info').html($('.inter_input-range-labels > span')[rangeVal].innerHTML);
        $('.inter_input-range-labels > span').removeClass('item_selected');
        $($('.inter_input-range-labels > span')[rangeVal]).addClass('item_selected');
        imageSwitcher(rangeVal);
    } else {
        rangeVal++;
        $('#range1').val(rangeVal) ;
        $('.inter_info').html($('.inter_input-range-labels > span')[rangeVal].innerHTML);
        $('.inter_input-range-labels > span').removeClass('item_selected');
        $($('.inter_input-range-labels > span')[rangeVal]).addClass('item_selected');
        imageSwitcher(rangeVal)
    }
}

var rangeVal = parseInt($('#range1').val());
var timer1;
var maxVal = parseInt($('#range1').attr('max')) - 1;

$(window).ready(function(){
    $('.inter_info').html($('.inter_input-range-labels > span')[0].innerHTML)
    if (isMobile.apple.device) {
        $('.inter_input-play-container > button').css("margin-left","-32px")
    }
});


$('#range1').on('change',function(){
    var manualVal = $(this).val();
    imageSwitcher(manualVal);
})
$('#range1play, .inter_input-range-stage').one('click',function(){
    $('.inter_input-vale-play').addClass('image-off');
    setTimeout(function(){

    },500)

})
$('#range1play, .inter_input-range-stage').on('click',function(e){
    if ($(this).attr('data-state') == "pause") {
        imageChecker();
        timer1 = setInterval(function () {
            imageChecker();
        },2000)
        $('#range1play, .inter_input-range-stage').attr('data-state','play');
        $('#range1play').text('l');
        $('.playState').text('P').addClass('animateToggle');
        setTimeout(function(){
            $('.playState').removeClass('animateToggle');
        },1000)
    } else if ($(this).attr('data-state') == "play") {
        clearInterval(timer1);
        $('#range1play, .inter_input-range-stage').attr('data-state', 'pause')
        $('#range1play').text('P');
        $('.playState').text('l').addClass('animateToggle');
        setTimeout(function(){
            $('.playState').removeClass('animateToggle');
        },1000)
    }
})

$('.inter_input-range-labels > span').on('click',function(e){
    var labelIndex= $(e.currentTarget).index();
    $('#range1').val(labelIndex);
    imageSwitcher(labelIndex);
    clearInterval(timer1);
    $('#range1play, .inter_input-range-stage').attr('data-state', 'pause')
    $('#range1play').text('P');
    // $('.playState').text('l').addClass('animateToggle');
    // setTimeout(function(){
    //     $('.playState').removeClass('animateToggle');
    // },1000)
})

$('.inter_input-vale-play').on('click',function(){
    $('.inter_input-play-container').css("opacity","1");
})