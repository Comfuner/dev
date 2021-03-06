var defaults = {
    domain: "heb"
},
    settings = {},
    switches = {};

var inter = new Engine(defaults,settings,switches);

/*--------------------------------------------------------------*/
//  Document Ready
/*--------------------------------------------------------------*/

$(document).ready(function(){

    ////// your code here /////
    var dUrl = "http://" + document.domain + "/st/inter/DB/projects/magz/2016/09/paralympics/mag.xlsx",
        dElem = ".inter-mc";
    
    mag1 = new magazine(dUrl,dElem,defaults.domain);
    
    mag1.func.magReady = function() {
    
        // --- Initiators --- //

        inter.build.bar();
        inter.init.video();
        inter.init.dfp();
        inter.build.street();
        //inter.defFunc.register.clickEvents();

        // --- Start Functions --- //

        inter.func.check.width($('.inter-mc').width());
        inter.defFunc.register.shareEvents();

        // --- Show main container --- //

        $('.inter-mc').show();

        if(window.location.hash) {
            console.log(window.location.hash)
            window.location = window.location.hash;
        } else {
            // do nothing!
        }
    };

    // --- Events --- //

    $(window).smartresize(function () {
        inter.func.check.width($('.inter-mc').width());
        inter.func.check.dfp();
    });

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > lastST){
            dir = 'up'
        } else {
            dir = 'down'
        }
        lastST = st;
        //console.log(dir);
        mobChk = inter.vars.isMobile.any();
        if (mobChk == null) {
            inter.func.inView.vid(dir);
        }
    });

}); // end of document ready

