
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x20='249px',e21='${RectangleCopy2}',x28='rgba(0,0,0,0)',x17='Rectangle',g='image',x35='63px',e23='${RectangleCopy}',x18='true',e40='${oldmissle}',x24='newmissle',x8='1px',x10='RectangleCopy',x5='1445px',m='rect',x16='0px',x7='164px',x14='RectangleCopy2',i='none',x11='rgba(192,192,192,1)',x34='oldmissle',x12='1795px',x36='305px',x4='rgba(96,96,96,1.00)',lf='left',x27='1518px',x26='179px',x3='6.0.0.400',rt='right',x37='54px',e42='${newmissle4}',x15='1343px',x13='38px',x31='60px',x33='525px',e22='${Rectangle}',x9='auto',x38='94px',x32='261px',x30='newmissle4',w='width',tp='top',x25='786px',x6='248px',e41='${newmissle}',xc='rgba(0,0,0,1)',x2='5.0.0',x19='616px';var g29='newmissle.png',g39='oldmissle.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:w,cg:i,rI:n,cn:{dom:[{id:'moving_bg',symbolName:'moving_bg',t:m,r:['-649','99','616','249','auto','auto']},{id:'moving_bg_1',symbolName:'moving_bg_1',t:m,r:['-1048px','106px','undefined','undefined','auto','auto'],tf:[[],[],[],['1.54618','1.54618']]},{id:'newmissle3',symbolName:'newmissle',t:m,r:['660','140','786','179','auto','auto']}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'640px','460px'],overflow:'hidden',f:[x4]}}},tt:{d:2000,a:y,data:[]}},"moving_bg":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x5,x6,x7,x8,x9,x9],id:x10,s:[0,xc,i],t:m,f:[x11]},{r:[x12,x13,x7,x8,x9,x9],id:x14,s:[0,xc,i],t:m,f:[x11]},{r:[x15,x16,x7,x8,x9,x9],id:x17,s:[0,xc,i],t:m,f:[x11]}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x19,x20]}}},tt:{d:750,a:y,data:[["eid20",lf,0,750,"linear",e21,'452px','1795px'],["eid19",lf,0,750,"linear",e22,'0px','1343px'],["eid21",lf,0,750,"linear",e23,'102px','1445px']]}},"moving_bg_1":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x5,x6,x7,x8,x9,x9],id:x10,s:[0,xc,i],t:m,f:[x11]},{r:[x12,x13,x7,x8,x9,x9],id:x14,s:[0,xc,i],t:m,f:[x11]},{r:[x15,x16,x7,x8,x9,x9],id:x17,s:[0,xc,i],t:m,f:[x11]}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x19,x20]}}},tt:{d:2000,a:y,data:[["eid20",lf,0,2000,"linear",e21,'452px','1795px'],["eid19",lf,0,2000,"linear",e22,'0px','1343px'],["eid21",lf,0,2000,"linear",e23,'102px','1445px']]}},"newmissle":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x24,t:g,r:[x9,x16,x25,x26,x27,x9],f:[x28,im+g29,x16,x16]},{id:x30,t:g,r:[x9,x31,x32,x31,x33,x9],f:[x28,im+g29,x16,x16]},{id:x34,t:g,r:[x9,x35,x36,x37,x38,x9],f:[x28,im+g39,x16,x16]}],style:{'${symbolSelector}':{isStage:x18,r:[undefined,undefined,x25,x26]}}},tt:{d:2630,a:y,l:{"2006":0,"2016":960},data:[["eid36",rt,0,500,"linear",e40,'94px','968px'],["eid42",rt,2070,560,"linear",e40,'968px','1468px'],["eid32",rt,960,500,"linear",e41,'0px','1518px'],["eid39",tp,0,0,"linear",e40,'63px','63px'],["eid40",tp,500,0,"linear",e40,'63px','63px'],["eid34",rt,1960,500,"linear",e42,'525px','1004px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("scr4");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'moving_bg'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.play(0);});
//Edge binding end
})("moving_bg");
//Edge symbol end:'moving_bg'

//=========================================================

//Edge symbol: 'moving_bg_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("moving_bg_1");
//Edge symbol end:'moving_bg_1'

//=========================================================

//Edge symbol: 'newmissle'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",960,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2630,function(sym,e){sym.stop();});
//Edge binding end
})("newmissle");
//Edge symbol end:'newmissle'
})})(AdobeEdge.$,AdobeEdge,"scr4");