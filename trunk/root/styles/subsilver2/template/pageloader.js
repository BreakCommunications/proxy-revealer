var LoaderInstance=function(){objHTML=document.getElementsByTagName("html")[0];document.body.style.overflow='hidden';objHTML.style.overflow='hidden';document.getElementById('loading-mask').style.display='block';document.getElementById('loading').style.display='block';var rtnObj={},timer=100;function _addEvent(obj,evt,fnt,args){if(obj.addEventListener){obj.addEventListener(evt,function(){fnt.call(this,args);},false);}else if(window.attachEvent){obj.attachEvent('on'+evt,function(){fnt.call(this,args);});}else{obj['on'+evt]=function(){fnt.call(this,args);};}};function _closeLoader(elemName){var elem,elemArr=[],op=100,opF=1,stl,ua=navigator.userAgent.toLowerCase(),isIE=(ua.indexOf('opera')==-1&&ua.indexOf('msie')>-1);function _setStyle(elem,stl,key,val){for(var i=0;i<key.length;i++){if(isIE){stl[key[i]]=val[i];}else{stl=(stl)?stl+key[i]+':'+val[i]+';':key[i]+':'+val[i]+';';}}return stl;};function _transform(){var stl,elemBody;for(var i=0;i<elemArr.length;i++){stl=_setStyle(elemArr[i].elemObj,elemArr[i].elemStl,['filter','opacity','-moz-opacity'],['alpha(opacity='+op+')',opF,opF]);elemArr[i].elemObj.setAttribute('style',stl,true);}if(op>0){op-=10;opF='.'+(op/10)%100;setTimeout(function(){_transform();},timer);}else{for(var i=0;i<elemArr.length;i++){elemArr[i].elemObj.parentNode.removeChild(elemArr[i].elemObj);}}};for(var i=0;i<elemName.length;i++){elem=document.getElementById(elemName[i]);if(elem){stl=elem.getAttribute('style',true);elemArr=elemArr.concat({elemObj:elem,elemStl:stl});}}if(elemArr.length>0){_transform();}};rtnObj.closeLoader=_closeLoader;function closeNow(){rtnObj.closeLoader(['loading-mask','loading']);document.body.style.overflow='';objHTML.style.overflow='';};function causeTimeout(){setTimeout(closeNow,3000);};_addEvent(window,'load',causeTimeout);return rtnObj;}();