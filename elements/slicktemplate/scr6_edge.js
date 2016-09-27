
(function(compId){var _=null,y=true,n=false,x4='rgba(39,39,39,1.00)',x9='303px',x2='5.0.0',x11='rgba(0,0,0,0)',x17='235px',g='image',x18='antiY',x14='7px',m='rect',x7='0px',x8='1380px',i='none',x15='-10px',x3='6.0.0.400',x16='285px',x5='mountains2',lf='left',e26='${newAnti}',x25='newAnti',x10='auto',x20='225px',e21='${antiY}',e13='${mountains2}',x1='6.0.0',w='width',tp='top',x24='225',x6='0.17073170186543',x22='485px',h='height',x23='285';var g19='antiY.png',g12='mountains1.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:i,rI:n,cn:{dom:[{id:'mountain',symbolName:'mountain',t:m,r:['-690px','165px','1380','303','auto','auto']},{id:'anticars',symbolName:'anticars',t:m,r:['177','243','285','225','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','640px','460px','auto','auto'],overflow:'hidden',f:[x4]}}},tt:{d:4000,a:y,data:[]}},"mountain":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:g,id:x5,o:x6,r:[x7,x7,x8,x9,x10,x10],f:[x11,im+g12,x7,x7]}],style:{'${symbolSelector}':{r:[_,_,x8,x9]}}},tt:{d:3000,a:y,data:[["eid7",lf,0,3000,"linear",e13,'0px','690px']]}},"newAnti":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x14,x15,x16,x17,x10,x10],id:x18,t:g,f:[x11,im+g19,x7,x7]}],style:{'${symbolSelector}':{r:[_,_,x16,x20]}}},tt:{d:500,a:y,data:[["eid10",tp,0,139,"swing",e21,'0px','-10px'],["eid19",tp,312,80,"swing",e21,'-10px','18px'],["eid20",tp,392,108,"swing",e21,'18px','0px'],["eid14",h,0,139,"swing",e21,'225px','235px'],["eid15",h,139,64,"swing",e21,'235px','225px'],["eid16",h,204,108,"swing",e21,'225px','235px'],["eid18",h,312,80,"swing",e21,'235px','207px'],["eid21",h,392,108,"swing",e21,'207px','225px']]}},"anticars":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x22,x7,x23,x24,x10,x10],id:x25,sN:x25,t:m}],style:{'${symbolSelector}':{r:[_,_,x16,x20]}}},tt:{d:4000,a:y,l:{"2006":0,"2016":2000,"end":4000},data:[["eid25",lf,2000,640,"swing",e26,'485px','0px'],["eid26","tr",0,function(e,d){this.eSA(e,d);},['stop','${newAnti}',[]]],["eid27","tr",2000,function(e,d){this.eSA(e,d);},['play','${newAnti}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("scr6");
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