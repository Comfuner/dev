/**
 * Created by elijahu.malka on 20/09/2016.
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var stackSlider =  function() {
    var that = this;

};

$.fn.extend({
    stackSlider: function() {
        var that = this;
        this.init = function() {
            newId = "interStackSlider" + getRandomIntInclusive(100,100000)
        }
    }
});


// var $images = $('.inter_input-range-stage > img');
// for (var i = 0; i < $images.length; i++) {
//     if (i !== 0) {
//         $($images[i]).addClass('image-off');
//     } else {
//         //$($images[i]).css('opacity','1 !important');
//     }
// }
// var $lastValue = 0;
//
// function imageSwitcher(val) {
//     console.log(val);
//     $value = val;
//     $($images[$lastValue]).addClass('image-off');
//     //$($images[$lastValue]).removeClass('image-on');
//     $($images[$value]).removeClass('image-off');
//     //$($images[$value]).addClass('image-on');
//     $lastValue = $value;
// }
// function imageChecker() {
//     console.log(rangeVal);
//     if (rangeVal > maxVal) {
//         rangeVal = 0;
//         $('#range1').val(rangeVal);
//         imageSwitcher(rangeVal);
//     } else {
//         rangeVal++;
//         $('#range1').val(rangeVal) ;
//         imageSwitcher(rangeVal)
//     }
// }
// var rangeVal = parseInt($('#range1').val());
// var timer1;
// var maxVal = parseInt($('#range1').attr('max')) - 1;
//
// $('#range1').on('change',function(){
//     var manualVal = $(this).val();
//     imageSwitcher(manualVal);
// })
// $('#range1play, .inter_input-range-stage').on('click',function(e){
//     if ($(this).attr('data-state') == "pause") {
//         imageChecker();
//         timer1 = setInterval(function () {
//             imageChecker();
//         },2000)
//         $('#range1play, .inter_input-range-stage').attr('data-state','play');
//         $('#range1play').text('pause');
//     } else if ($(this).attr('data-state') == "play") {
//         clearInterval(timer1);
//         $('#range1play, .inter_input-range-stage').attr('data-state', 'pause')
//         $('#range1play').text('play');
//     }
// })
