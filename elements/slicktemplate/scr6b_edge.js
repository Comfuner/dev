
(function(compId){var _=null,y=true,n=false,x4='rgba(39,39,39,1.00)',x30='-558px',x7='303px',x2='5.0.0',x11='rgba(0,0,0,0)',x18='235px',g='image',x29='87px',x32='true',x14='antiY',x15='7px',m='rect',x5='0px',i='none',x16='-10px',x3='6.0.0.400',x17='285px',x9='mountains2',lf='left',x26='antiaircraft2',x27='54px',rt='right',e34='${antiaircraft2}',e33='${newAnti}',x28='343px',x25='225',x8='auto',x20='225px',e21='${antiY}',e13='${mountains2}',x1='6.0.0',w='width',tp='top',x6='1380px',x23='485px',x10='0.17073170186543',x22='newAnti',h='height',x24='285';var g19='antiY.png',g31='antiaircraft2.png',g12='mountains1.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:i,rI:n,cn:{dom:[{id:'mountain',symbolName:'mountain',t:m,r:['-690px','165px','1380','303','auto','auto']},{id:'anticars',symbolName:'anticars',t:m,r:['177','243','285','225','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','640px','460px','auto','auto'],overflow:'hidden',f:[x4]}}},tt:{d:4000,a:y,data:[]}},"mountain":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x5,x5,x6,x7,x8,x8],id:x9,o:x10,t:g,f:[x11,im+g12,x5,x5]}],style:{'${symbolSelector}':{r:[_,_,x6,x7]}}},tt:{d:3000,a:y,data:[["eid7",lf,0,3000,"linear",e13,'0px','690px']]}},"newAnti":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:g,id:x14,r:[x15,x16,x17,x18,x8,x8],f:[x11,im+g19,x5,x5]}],style:{'${symbolSelector}':{r:[_,_,x17,x20]}}},tt:{d:500,a:y,data:[["eid10",tp,0,139,"swing",e21,'0px','-10px'],["eid19",tp,312,80,"swing",e21,'-10px','18px'],["eid20",tp,392,108,"swing",e21,'18px','0px'],["eid14",h,0,139,"swing",e21,'225px','235px'],["eid15",h,139,64,"swing",e21,'235px','225px'],["eid16",h,204,108,"swing",e21,'225px','235px'],["eid18",h,312,80,"swing",e21,'235px','207px'],["eid21",h,392,108,"swing",e21,'207px','225px']]}},"anticars":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x22,sN:x22,r:[x23,x5,x24,x25,x8,x8],t:m},{id:x26,t:g,r:[x8,x27,x28,x29,x30,x8],f:[x11,im+g31,x5,x5]}],style:{'${symbolSelector}':{isStage:x32,r:[undefined,undefined,x17,x20]}}},tt:{d:4000,a:y,l:{"2006":0,"2016":2000,"end":4000},data:[["eid25",lf,2000,640,"swing",e33,'485px','0px'],["eid30",rt,0,750,"linear",e34,'-558px','-37px'],["eid32",rt,2000,750,"linear",e34,'-37px','484px'],["eid26","tr",0,function(e,d){this.eSA(e,d);},['stop','${newAnti}',[]]],["eid27","tr",2000,function(e,d){this.eSA(e,d);},['play','${newAnti}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("scr6");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'mountain'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.play(0);});
//Edge binding end
})("mountain");
//Edge symbol end:'mountain'

//=========================================================

//Edge symbol: 'newAnti'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play(0);});
//Edge binding end
})("newAnti");
//Edge symbol end:'newAnti'

//=========================================================

//Edge symbol: 'anticars'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
})("anticars");
//Edge symbol end:'anticars'
})})(AdobeEdge.$,AdobeEdge,"scr6");