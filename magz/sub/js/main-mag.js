var defaults = {
    domain: "heb"
},
    settings = {},
    switches = {};
var vale = function() {
    this.drop = function(){
        $('body').css("overflow","hidden");
        $('.inter_vale').show();
    }
    this.lift = function() {
        $('body').css("overflow","visible");
        $('.inter_vale').hide();
    }
};
var valex = new vale();
var inter = new Engine(defaults,settings,switches);

/*--------------------------------------------------------------*/
//  Document Ready
/*--------------------------------------------------------------*/

$(document).ready(function(){
    valex.drop();


    ////// your code here /////

    var dUrl = "http://" + document.domain + "/st/inter/DB/projects/magz/2016/09/sub/mag_light.xlsx",
        dElem = ".inter-mc";
    
    mag1 = new magazine(dUrl,dElem,defaults.domain);
    
    mag1.func.magReady = function() {

        valex.lift();
        // --- Initiators --- //
        if (navigator.userAgent.match(/Haaretz/g)){
            $('.inter-bar').remove();
        } else {
            inter.build.bar();
        }
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

