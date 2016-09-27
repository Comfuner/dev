$(document).ready(function(){

    $('.hamburger').on('click',function(){
        $(this).toggleClass('is-active');
        $(".inter_topbar-menu").toggleClass("active"),
        $(".inter_topbar-menu > li").toggleClass("active_menu")
    });
    if (isMobile.apple.device) {
        $(".inter_row-open--image").css("background-size","unset").css("background-size","auto auto");
    }

});

$(window).smartresize(function(){
    assignMediaSize('.inter_watch');
});

window.onload = function(){
    lift();
    assignMediaSize('.inter_watch');
}


$(".inter-menu_button").on("click", function() {

})