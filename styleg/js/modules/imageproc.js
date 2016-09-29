// require lazysizes
var imgProcess = function(){
    var that = this;
    this.single = function(imgsrc,deriv){
        lastPart = imgsrc.match(/\/(?:.(?!\/))+$/igm)
        itemsArr[i].imgsrc = itemsArr[i].imgsrc + "_gen/derivatives/size_" + deriv + "xAuto" + lastPart;
    }
    this.srcset = function(){

    }
}