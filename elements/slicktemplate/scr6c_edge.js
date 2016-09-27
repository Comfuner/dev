
(function(compId){var _=null,y=true,n=false,x4='rgba(39,39,39,1.00)',x31='-558px',x7='303px',x2='5.0.0',x11='rgba(0,0,0,0)',x18='235px',g='image',x30='87px',x20='true',x14='antiY',x15='7px',m='rect',x5='0px',i='none',x16='-10px',x3='6.0.0.400',x17='285px',x9='mountains2',lf='left',x27='antiaircraft2',x28='54px',rt='right',e34='${antiaircraft2}',e33='${newAnti}',x29='343px',x26='225',x8='auto',x21='225px',e22='${antiY}',e13='${mountains2}',x6='1380px',w='width',tp='top',x1='6.0.0',x24='485px',x23='newAnti',x10='0.17073170186543',h='height',x25='285';var g19='antiY.png',g32='antiaircraft2.png',g12='mountains1.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:i,rI:n,cn:{dom:[{id:'mountain',symbolName:'mountain',t:m,r:['-690px','165px','1380','303','auto','auto']},{id:'anticars',symbolName:'anticars',t:m,r:['177','243','285','225','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','640px','460px','auto','auto'],overflow:'hidden',f:[x4]}}},tt:{d:4000,a:y,data:[]}},"mountain":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x5,x5,x6,x7,x8,x8],id:x9,o:x10,t:g,f:[x11,im+g12,x5,x5]}],style:{'${symbolSelector}':{r:[_,_,x6,x7]}}},tt:{d:3000,a:y,data:[["eid7",lf,0,3000,"linear",e13,'0px','690px']]}},"newAnti":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x14,t:g,r:[x15,x16,x17,x18,x8,x8],f:[x11,im+g19,x5,x5]}],style:{'${symbolSelector}':{isStage:x20,r:[undefined,undefined,x17,x21]}}},tt:{d:500,a:y,data:[["eid10",tp,0,139,"swing",e22,'0px','-10px'],["eid19",tp,312,80,"swing",e22,'-10px','18px'],["eid20",tp,392,108,"swing",e22,'18px','0px'],["eid14",h,0,139,"swing",e22,'225px','235px'],["eid15",h,139,64,"swing",e22,'235px','225px'],["eid16",h,204,108,"swing",e22,'225px','235px'],["eid18",h,312,80,"swing",e22,'235px','207px'],["eid21",h,392,108,"swing",e22,'207px','225px']]}},"anticars":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x23,sN:x23,r:[x24,x5,x25,x26,x8,x8],t:m},{id:x27,t:g,r:[x8,x28,x29,x30,x31,x8],f:[x11,im+g32,x5,x5]}],style:{'${symbolSelector}':{isStage:x20,r:[undefined,undefined,x17,x21]}}},tt:{d:4000,a:y,l:{"2006":0,"2016":2011,"end":4000},data:[["eid25",lf,2011,640,"swing",e33,'485px','0px'],["eid30",rt,0,750,"linear",e34,'-558px','-37px'],["eid32",rt,2011,750,"linear",e34,'-37px','484px'],["eid26","tr",0,function(e,d){this.eSA(e,d);},['stop','${newAnti}',[]]],["eid27","tr",2011,function(e,d){this.eSA(e,d);},['play','${newAnti}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("scr6");
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