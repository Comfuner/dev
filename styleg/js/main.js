$.fn.displayFont = function(fontFamily) {
    var str = '<ul>';
    for (var i = 33; i <= 126; i++) {
        var temp_char = String.fromCharCode(i);
        str += '<li class="fontspace"><span class="fontface" style="font-family:' + fontFamily + '">' + temp_char + '</span><span class="textface">' + temp_char + '</span></li>';
    }
    str += '</ul>';
    $(this).append(str);
};

var temparray,responseStr;

$.fn.displayColors = function() {
    var str = '<ul>', that = this;
    $.when($.get("stylesheets/styles.css"))
        .done(function(response) {
           responseStr = response;
           temparray = responseStr.match(/(color-.*?)(?=\s\{)/g);
           temparray.forEach(function(colorClass){
               str += '<li class="colorspace"><span class="' + colorClass +' colorTest"></span><span class="colorTestName">'+ colorClass +'</span>'
           })
           str += '</ul>'
           $(that).append(str);
        });
};


$(document).ready(function(){

    $rtlFlag = ($('body').css("direction")=='rtl') ? true : false;

    $('#htzicons').displayFont('htzIcons');
    $('#availColors').displayColors();
    $('.slick').slick({
        rtl: true,
        lazyLoad: 'progressive',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    var ggs = document.querySelectorAll(".gg");
    ggArr = Array.prototype.slice.call(ggs);
    ggArr.forEach(function(gg) {
        modulesManager.get("grid.manager").create(gg);
    });

    // cssClassValidation.init();
};