(function welcome(){
    var styles = [
        'background: rgb(6, 113, 148)'
        , 'color: white'
        , 'direction: ltr'
        , 'display: inline'
        , 'text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5)'
        , 'font-size: 18px'
        , 'line-height: 36px'
        , 'padding: 12px'
        , 'text-align: left'
        , 'font-weight: bold'
    ].join(';');
    var styles1 = [
        'background: #222'
        , 'color: white'
        , 'direction: ltr'
        , 'display: inline'
        , 'text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5)'
        , 'font-size: 16px'
        , 'line-height: 32px'
        , 'padding: 6px 12px'
        , 'text-align: left'
        , 'font-weight: bold'
    ].join(';');

    console.log('%cHaaretz Interactive', styles);
    console.log('%cWe are hiring: haaretz.interactive@gmail.com', styles1);
})();

function lift() {
    $('.inter_vale').remove();
    $('body').removeClass('vale');
}