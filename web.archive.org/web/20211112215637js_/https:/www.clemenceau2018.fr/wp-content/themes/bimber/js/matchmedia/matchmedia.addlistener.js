var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*!matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license*/(function(){if(window.matchMedia&&window.matchMedia('all').addListener){return false;}
var localMatchMedia=window.matchMedia,hasMediaQueries=localMatchMedia('only all').matches,isListening=false,timeoutID=0,queries=[],handleChange=function(evt){clearTimeout(timeoutID);timeoutID=setTimeout(function(){for(var i=0,il=queries.length;i<il;i++){var mql=queries[i].mql,listeners=queries[i].listeners||[],matches=localMatchMedia(mql.media).matches;if(matches!==mql.matches){mql.matches=matches;for(var j=0,jl=listeners.length;j<jl;j++){listeners[j].call(window,mql);}}}},30);};window.matchMedia=function(media){var mql=localMatchMedia(media),listeners=[],index=0;mql.addListener=function(listener){if(!hasMediaQueries){return;}
if(!isListening){isListening=true;window.addEventListener('resize',handleChange,true);}
if(index===0){index=queries.push({mql:mql,listeners:listeners});}
listeners.push(listener);};mql.removeListener=function(listener){for(var i=0,il=listeners.length;i<il;i++){if(listeners[i]===listener){listeners.splice(i,1);}}};return mql;};}());

}
/*
     FILE ARCHIVED ON 15:56:18 Oct 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:01:29 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 87.843
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.087
  RedisCDXSource: 15.068
  esindex: 0.007
  LoadShardBlock: 49.638 (3)
  PetaboxLoader3.datanode: 81.453 (5)
  CDXLines.iter: 20.973 (3)
  load_resource: 71.395
  PetaboxLoader3.resolve: 31.381
  loaddict: 29.537
*/