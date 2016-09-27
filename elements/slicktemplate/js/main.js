!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});

var defaults = {
    domain: "heb"
},
    settings = {},
    switches = {};

var inter = new Engine(defaults,settings,switches);


/*--------------------------------------------------------------*/
//  Document Ready
/*--------------------------------------------------------------*/
$(document).on('click','button.playPause',function(){
    console.log(playFlag);
    if (playFlag == false) {
        playFlag = true;
        $('.playPause').html('q');
        startAsironShow()
    } else if (playFlag == true) {
        playflag = false;
        $('.playPause').html('Q');
        stopAsironShow()
    }

})


$(document).ready(function(){
        var options = {
            useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''
        };
        
        
        $('.side').on('click',function(e){
           var $parentClass = $(e.currentTarget).parent();
           $parentClass.addClass('selected');
           $parentClass.children().removeClass('selected');
           $(e.currentTarget).toggleClass('selected');
           $parentClass.removeClass('selected');
        });
        
        // --- Initiators --- //

        //inter.build.bar();
        //inter.init.video();
        //inter.init.dfp();
        //inter.build.street();
        inter.defFunc.register.clickEvents();

        // --- Start Functions --- //

        //inter.func.check.width($('.inter-mc').width());
        inter.func.check.width($('.inter-mc').width());
        inter.defFunc.register.shareEvents();

        // --- Show main container --- //
        $('.inter-mc').show();


    // --- Events --- //
    if(window.location.hash) {
        console.log(window.location.hash)
        window.location = window.location.hash;
    } else {
        // do nothing!
    }

    $(window).smartresize(function () {
       inter.func.check.width($('.inter-mc').width());
       // inter.func.check.dfp();
    });

    /*--------------------------------------------------------------*/
    //  scr 0
    /*--------------------------------------------------------------*/
    
    var numScr0 = new CountUp("scr0_count",0,20000,0,2.5,options);
    
    $('#scr0_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition('scr0').getStage().play(0);
            numScr0.start();
            $('#scr0_pin').off('inview');
        }
        else {
            //
        }
    });
    
    $('.side[data-value="scr0Button1"]').on('click',function(){
        AdobeEdge.getComposition('scr0').getStage().play('2016');
        numScr0.update(45000);
        $('#scr0_note').html('(21 אלף בסדיר)')
    });
    $('.side[data-value="scr0Button0"]').on('click',function(){
        AdobeEdge.getComposition('scr0').getStage().play('2006');
        numScr0.update(20000);
        $('#scr0_note').html('(רוב מכריע בסדיר)')
    });

    /*--------------------------------------------------------------*/
    //  scr 1
    /*--------------------------------------------------------------*/

    

    $('#scr1_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition('scr1a').getStage().play(0);
            AdobeEdge.getComposition('scr1b').getStage().play(0);
            AdobeEdge.getComposition('scr1c').getStage().play(0);
            $('#scr1_pin').off('inview');
        }
        else {
            //
        }
    });

    $('.side[data-value="scr1Button1"]').on('click',function(){
        AdobeEdge.getComposition('scr1a').getStage().play('2016');
        AdobeEdge.getComposition('scr1b').getStage().play('2016');
        AdobeEdge.getComposition('scr1c').getStage().play('2016');
        $('#shortRangeValue').html('עשרות אלפים');
        $('#mediumRangeValue').html('אלפים');
        $('#highRangeValue').html('מאות');

        
    });
    $('.side[data-value="scr1Button0"]').on('click',function(){
        AdobeEdge.getComposition('scr1a').getStage().play('2006');
        AdobeEdge.getComposition('scr1b').getStage().play('2006');
        AdobeEdge.getComposition('scr1c').getStage().play('2006');
        $('#shortRangeValue').html('כ-12 אלף');
        $('#mediumRangeValue').html('עשרות');
        $('#highRangeValue').html('עשרות');
        
    });

    /*--------------------------------------------------------------*/
    //  scr 2
    /*--------------------------------------------------------------*/

    var numScr2 = new CountUp("scr2_count",0,100,0,4,options);

    $('#scr2_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition('scr2').getStage().play(0);
            numScr2.start();
            $('#scr2_pin').off('inview');
        }
        else {
            //
        }
    });

    $('.side[data-value="scr2Button1"]').on('click',function(){
        AdobeEdge.getComposition('scr2').getStage().play('2016');
        numScr2.update(400);
        $('#scr2_note').html('(עד אילת)')
    });
    $('.side[data-value="scr2Button0"]').on('click',function(){
        AdobeEdge.getComposition('scr2').getStage().play('2006');
        numScr2.update(100);
        $('#scr2_note').html('(עד חיפה)')
    });

    /*--------------------------------------------------------------*/
    //  scr 3
    /*--------------------------------------------------------------*/

    var numScr3a = new CountUp("scr3_count0",0,14000,0,2.5,options);
    var numScr3b = new CountUp("scr3_count1",0,12000,0,2.5,options);

    $('#scr3_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition('scr3').getStage().play(0);
            numScr3a.start();
            numScr3b.start();
            $('#scr3_pin').off('inview');
        }
        else {
            //
        }
    });

    $('.side[data-value="scr3Button1"]').on('click',function(){
        AdobeEdge.getComposition('scr3').getStage().play('2016');
        numScr3a.update(130000);
        numScr3b.update(120000);
    });
    $('.side[data-value="scr3Button0"]').on('click',function(){
        AdobeEdge.getComposition('scr3').getStage().play('2006');
        numScr3a.update(14000);
        numScr3b.update(12000);
    });

    /*--------------------------------------------------------------*/
    //  scr 4
    /*--------------------------------------------------------------*/

    $('#scr4_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition("scr4").getStage().getSymbol("newmissle3").play(0);
            $('#scr4_pin').off('inview');
        }
        else {
            //
        }
    });

    $('.side[data-value="scr4Button1"]').on('click',function(){
        AdobeEdge.getComposition("scr4").getStage().getSymbol("newmissle3").play('2016');
        $('#scr4_line').html('טילי יאחונט מתקדמים');
        //$('#scr4_note').html('** הערה חשובה כפליים');
    });
    $('.side[data-value="scr4Button0"]').on('click',function(){
        AdobeEdge.getComposition("scr4").getStage().getSymbol("newmissle3").play('2006');
        $('#scr4_line').html('C802 מתוצרת סין');
        //$('#scr4_note').html('** לפי נאום ראש הממשלה באו"ם, אוקטובר 2015');
    });

    /*--------------------------------------------------------------*/
    //  scr 5
    /*--------------------------------------------------------------*/

    $('#scr5_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition("scr8").getStage().play(0);
            $('#scr5_pin').off('inview');
        }
        else {
            //
        }
    });

    $('.side[data-value="scr5Button1"]').on('click',function(){
        AdobeEdge.getComposition("scr8").getStage().play('2016');
        $('#scr5_line').html('מאות כלי טיס');
        // $('#scr4_note').html('** הערה חשובה כפליים');
    });
    $('.side[data-value="scr5Button0"]').on('click',function(){
        AdobeEdge.getComposition("scr8").getStage().play('2006');
        $('#scr5_line').html('כלי טיס בודדים');
        // $('#scr4_note').html('** לפי נאום ראש הממשלה באו"ם, אוקטובר 2015');
    });

    /*--------------------------------------------------------------*/
    //  scr 6
    /*--------------------------------------------------------------*/

    $('#scr6_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition("scr6").getStage().getSymbol("anticars").play(0);
            $('#scr6_pin').off('inview');
        }
        else {
            //
        }
    });
    $('.side').one('click',function(){$('.tooltipCont').hide()});
    $('.side[data-value="scr6Button1"]').on('click',function(){
        AdobeEdge.getComposition("scr6").getStage().getSymbol("anticars").play('2016');
        $('#scr6_line').html('טילי SA22');
        //$('#scr6_note').html('** הערה חשובה כפליים');
    });
    $('.side[data-value="scr6Button0"]').on('click',function(){
        AdobeEdge.getComposition("scr6").getStage().getSymbol("anticars").play('2006');
        $('#scr6_line').html('מערכות מיושנות');
        //$('#scr6_note').html('** לפי נאום ראש הממשלה באו"ם, אוקטובר 2015');
    });

    /*--------------------------------------------------------------*/
    //  scr 7
    /*--------------------------------------------------------------*/

    $('#scr7_pin').on('inview',function(event, isInView){
        if (isInView) {
            AdobeEdge.getComposition("scr7n").getStage().play(0);
            $('#scr7_pin').off('inview');
        }
        else {
            //
        }
    });

    $('.side[data-value="scr7Button1"]').on('click',function(){
        AdobeEdge.getComposition("scr7n").getStage().play('2016');
        $('#scr7_line').html('אלפים');
        // $('#scr4_note').html('** הערה חשובה כפליים');
    });
    $('.side[data-value="scr7Button0"]').on('click',function(){
        AdobeEdge.getComposition("scr7n").getStage().play('2006');
        $('#scr7_line').html('מאות');
        // $('#scr4_note').html('** לפי נאום ראש הממשלה באו"ם, אוקטובר 2015');
    });

    /*--------------------------------------------------------------*/
    // end of animations click events
    /*--------------------------------------------------------------*/


    //$(window).scroll(function () {
    //    var st = $(this).scrollTop();
    //    if (st > lastST){
    //        dir = 'up'
    //    } else {
    //        dir = 'down'
    //    }
    //    lastST = st;
    //    //console.log(dir);
    //    mobChk = inter.vars.isMobile.any();
    //    if (mobChk == null) {
    //        //console.log(mobChk);
    //        //console.log(inter);
    //        inter.func.inView.vid(dir);
    //    }
    //});


    xl('http://'+document.domain+'/st/inter/DB/heb/07/lebanon2/caro1.xlsx',dataReady);
    function dataReady(data){
        var mainItemsStr = "";
        $items = data.carousel;
        for (var i = 0; i < $items.length; i++) {
            var tempItemsStr = "" +
                "<div class='inter_caro_item'>" +
                "<a href='"+$items[i].link+"'> " +
                "<img class='inter_caro_item_img' data-lazy='"+ $items[i].imgsrc +"'>" +
                "<div class='inter_caro_desc'>" +
                "<span>" + $items[i].text + "</span>" +
                "</div>" +
                "</a>" +
                "</div>";
            mainItemsStr += tempItemsStr;
        }
        $('.slick').append(mainItemsStr);
        $('.slick').slick({
            lazyLoad: 'progressive',
            initialSlide: 9,
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
}); // end of document ready

/*--------------------------------------------------------------*/
//  Document Ready
/*--------------------------------------------------------------*/

