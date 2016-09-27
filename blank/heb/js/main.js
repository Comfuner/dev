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

        ////// your code here /////

        // --- Initiators --- //

        //inter.build.bar();
        //inter.init.video();
        //inter.init.dfp();
        //inter.build.street();
        inter.defFunc.register.clickEvents();

        // --- Start Functions --- //

        //inter.func.check.width($('.inter-mc').width());
        inter.func.check.width($('.inter-mc').innerwidth);
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

    //$(window).smartresize(function () {
    //    inter.func.check.width($('.inter-mc').width());
    //    inter.func.check.dfp();
    //});

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

}); // end of document ready

