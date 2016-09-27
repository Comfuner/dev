
// todo: rewrite to n number of breakpoints

function assignMediaSize($containerWidth){
    var media = [600,768,1280,1440],
        ww = parseInt($($containerWidth).width());
    if (ww < media[0])
    {   $($containerWidth).attr('mq','t');
    } else if ((ww > media[0]) && (ww < media[1]))
    {
        $($containerWidth).attr('mq','s');
    } else if ((ww > media[1]) && (ww < media[2]))
    {
        $($containerWidth).attr('mq','m');
    } else if ((ww > media[2]) && (ww < media[3]))
    {
        $($containerWidth).attr('mq','l');
    } else if (ww > media[3]) {
        $($containerWidth).attr('mq','x');

    }
}