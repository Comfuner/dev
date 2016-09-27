var $appIds = {
    'www.haaretz.co.il': '110687712359084',
    'www.haaretz.com': '287530407927859',
    'www.themarker.com': '52929925921'
}

window.fbAsyncInit = function () {
    FB.init({
        appId: $appIds[document.domain],
        xfbml: true,
        status: false,
        version: 'v2.7'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var twitt = function (message,url,hashtags,via) {
    message = message || null;
    if (message) {message = "?text="+message }
    url = url || window.location.href;
    if (url) {url = "&url="+url }
    hashtags = hashtags || null;
    if (hashtags) {hashtags = "&hashtags="+hashtags }
    via = via || "";
    if (via) {via = "&via ="+via }

    if (message.length > 140) {
        console.warn("twitt wasn't  is longer then 140 chars");
        return;
    } else {
        window.open('https://twitter.com/intent/tweet'+message+url+hashtags+via)
    }
}

var facebook = function () {
    this.getUrlInfo = function ($url) {
        $.getJSON('http://graph.facebook.com/?id=' + $url, function (fbdata) {
            return fbdata.shares;
        })
    };
    this.share = function (hashtag, quote, href) {
        hashtag = hashtag || null;
        quote = quote || null;
        href = href || window.location.href;

        FB.ui({
            method: 'share',
            mobile_iframe: true,
            display: 'iframe',
            href: href,
            hashtag: hashtag,
            quote: quote
        }, function (response) {
        });
    };
    this.feed = function (name, description, caption, picture, link) {
        name = name || "";
        description = description || "";
        caption = caption || "";
        picture = picture || "";
        link = link || "";

        FB.ui({
            method: 'feed',
            mobile_iframe: true,
            display: 'iframe',
            link: link,
            caption: caption,
            picture: picture,
            name: name,
            description: description
        }, function (response) {
            console.log(response)
        });
    }
}

var inter_fb = new facebook();

