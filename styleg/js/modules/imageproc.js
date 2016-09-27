var processImg = function(){
    var imgval = $('#imgval').val(),
        imgsrc = $('#selector').val(),
        polopath = [];
    if (imgval == "") { $("#warn1").show()} else {$("#warn1").hide()}
    var result = $.getJSON( imgsrc + "/json/cmlink/" + imgval, function(data){
        xData = data;
        var getT = [
            {"deriv":"original","resp":""},
            {"deriv":"size_468xAuto","resp":"468w"},
            {"deriv":"size_640xAuto","resp":"600w"},
            {"deriv":"size_748xAuto","resp":"768w"},
            {"deriv":"size_936xAuto","resp":"1024w"},
            {"deriv":"size_1496xAuto","resp":"1280w"}
        ];

        function parseSourceSet(){
            var str = "";
            getT.forEach(function(set){
                console.log(xData.path);
                console.log(set.deriv);
                var tempStr = xData.path;
                if (set.deriv == "original") {
                    //
                } else {
                    tempStr = xData.path.replace("landscape_102", set.deriv);
                    str += imgsrc + tempStr + " " + set.resp + ", ";
                }
                console.log(xData.path);
            });
            return str;
        }

        var codeStr = '' +
            '<img class="inter-img-w lazyload"' +
            ' data-sizes="auto"'+
            ' data-src="' + imgsrc + xData.path.substr(0,xData.path.indexOf("_gen")) + '"' +
            ' src="' + imgsrc + '/st/c/static/resources/img/thumb.gif"' +
            ' data-srcset="'+
            parseSourceSet() +
            '"/>' +
            '';

        $("#textplace").html(codeStr);

    });
}