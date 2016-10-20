function derivImgs(itemsArr,deriv){
    for (var i = 0; i <  itemsArr.length ; i++) {
        //console.log(itemsArr[i])
        lastPart = itemsArr[i].imgsrc.match(/\/(?:.(?!\/))+$/igm)
        itemsArr[i].imgsrc = itemsArr[i].imgsrc + "_gen/derivatives/size_" + deriv + "xAuto" + lastPart;
    }
}
function buildCarousel($items) {
    var mainItemsStr = "";
    for (var i = 0; i < $items.length; i++) {
        var tempItemsStr = "" +
            "<div class='inter_caro_item'>" +
            "<a href='"+$items[i].link+"'> " +
            "<img class='inter_caro_item_img' src='http://" + document.domain  + "/st/c/static/resources/img/thumb.gif' data-lazy='"+ $items[i].imgsrc +"'>" +
            "<div class='inter_caro_desc'>" +
            "<span>" + $items[i].text + "</span>" +
            "</div>" +
            "</a>" +
            "</div>";
        mainItemsStr += tempItemsStr;
    }
    return mainItemsStr;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).ready(function(){
xl('http://'+document.domain+'/st/inter/DB/slick/tm/caroDB.xlsx',dataReady);
});
function dataReady(data){
    for (var caroArr in data)  {
        //console.log(data[caroArr])
        var tempCaroId = "caro-" + caroArr;
        derivImgs(data[caroArr],468);
        caroDiv = document.createElement('div');
        caroHead = document.createElement('h1');
        caroHead.innerHTML = tempCaroId
        caroDiv.setAttribute('id',tempCaroId);
        caroDiv.setAttribute('class','slick fullwidth');
        var tempCaroStr = buildCarousel(data[caroArr]);

        console.log(caroHead);
        console.log(tempCaroStr);
        caroDiv.innerHTML = tempCaroStr;

        $('body').append(caroHead);
        $('body').append(caroDiv);
    }
    $('.slick').slick({
        lazyLoad: 'ondemand',
        initialSlide: 0,
        slidesToShow: 5,
        rtl: false,
        //infinite: true,
        //mobilefirst: true,
        //variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

}