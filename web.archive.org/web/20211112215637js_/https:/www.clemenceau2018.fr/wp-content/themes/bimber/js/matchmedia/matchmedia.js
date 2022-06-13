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

/*!matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license*/window.matchMedia||(window.matchMedia=function(){"use strict";var styleMedia=(window.styleMedia||window.media);if(!styleMedia){var style=document.createElement('style'),script=document.getElementsByTagName('script')[0],info=null;style.type='text/css';style.id='matchmediajs-test';script.parentNode.insertBefore(style,script);info=('getComputedStyle'in window)&&window.getComputedStyle(style,null)||style.currentStyle;styleMedia={matchMedium:function(media){var text='@media '+media+'{ #matchmediajs-test { width: 1px; } }';if(style.styleSheet){style.styleSheet.cssText=text;}else{style.textContent=text;}
return info.width==='1px';}};}
return function(media){return{matches:styleMedia.matchMedium(media||'all'),media:media||'all'};};}());

}
/*
     FILE ARCHIVED ON 16:33:54 Oct 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:01:27 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 92.41
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.069
  RedisCDXSource: 0.527
  esindex: 0.006
  LoadShardBlock: 69.161 (3)
  PetaboxLoader3.datanode: 54.573 (5)
  CDXLines.iter: 20.736 (3)
  PetaboxLoader3.resolve: 54.699 (2)
  load_resource: 66.463
  loaddict: 23.462
*/