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

/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/CUSTOM/fs_cookie/inc/fs_cookie.js. */

(function($){Drupal.behaviors.fs_cookie={attach:function(context,settings){$('body').once('fs_cookie').each(function(){if(typeof document.cookie.cookie_accepted==='undefined'){$('#block-fs-cookie-cookie-setup').once('affichage').toggle('800');$('#block-fs-cookie-cookie-setup').removeClass('hide_cookie');}
$('.bt-accept').click(function(){$.get('/cookie-accepted',null,null);$('#block-fs-cookie-cookie-config').hide();$('#block-fs-cookie-cookie-setup').once('desaffichage').toggle('800');});$('.bt-decline').click(function(){$('#fs-cookie-config-form input').prop("checked",false);$('#fs-cookie-config-form').submit();});$('.bt-param, .open-config-cookie').click(function(e){e.preventDefault();$('#block-fs-cookie-cookie-config').show();});$('.bt-cancel').click(function(){$('#block-fs-cookie-cookie-config').hide();});$('#block-fs-cookie-cookie-config .content input[type="checkbox"]:not(:checked').parent().find('span').removeClass('activated').text(Drupal.t('Désactivé'));$('.form-type-checkbox .option span').not('.btn-fixed').click(function(){if($(this).hasClass('activated')){$(this).text(('Désactivé'));$(this).removeClass('activated');}
else{$(this).addClass('activated');$(this).text(Drupal.t('Activé'));}});$('.close-cookie').click(function(){$('#block-fs-cookie-cookie-config').hide();});});}};}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/CUSTOM/fs_cookie/inc/fs_cookie.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/CUSTOM/fs_cookie/inc/fs_cookie_active_youtube.js. */

(function($){Drupal.behaviors.fs_cookie_active_youtube={attach:function(context,settings){$('.valid-youtube a').click(function(e){e.preventDefault();$.get('/cookie-youtube-accepted');if($('.player').length>0){affichageVideoIframe('player');}
if($('.player_custom_youtube').length>0){affichageVideoIframe('player_custom_youtube');}
$('.valid-youtube').remove();});$('.block-fs-cookie .bt-accept').click(function(e){$('.valid-youtube a').click();});function affichageVideoIframe(selector){$('.'+selector).each(function(index){id=$(this).attr('data-id');credits=$(this).attr('data-credits');param=$(this).attr('data-param');console.log(id);if(typeof(id)!=='undefined'){$(this).append('<iframe frameborder="0" allowfullscreen="1" src="//web.archive.org/web/20210515205044/https://www.youtube.com/embed/'+id+'?'+param+'"></iframe>');$(this).add(credits);}});}}};}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/CUSTOM/fs_cookie/inc/fs_cookie_active_youtube.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/DATA/field_group/field_group.js. */

(function($){Drupal.FieldGroup=Drupal.FieldGroup||{};Drupal.FieldGroup.Effects=Drupal.FieldGroup.Effects||{};Drupal.FieldGroup.groupWithfocus=null;Drupal.FieldGroup.setGroupWithfocus=function(element){element.css({display:'block'});Drupal.FieldGroup.groupWithfocus=element;}
Drupal.FieldGroup.Effects.processFieldset={execute:function(context,settings,type){if(type=='form'){$('fieldset.fieldset',context).once('fieldgroup-effects',function(i){if($(this).is('.required-fields')&&$(this).find('.form-required').length>0){$('legend span.fieldset-legend',$(this)).eq(0).append(' ').append($('.form-required').eq(0).clone());}
if($('.error',$(this)).length){$('legend span.fieldset-legend',$(this)).eq(0).addClass('error');Drupal.FieldGroup.setGroupWithfocus($(this));}});}}}
Drupal.FieldGroup.Effects.processAccordion={execute:function(context,settings,type){$('div.field-group-accordion-wrapper',context).once('fieldgroup-effects',function(){var wrapper=$(this);var active_index=false;wrapper.find('.accordion-item').each(function(i){if($(this).hasClass('field-group-accordion-active')){active_index=i;}});wrapper.accordion({heightStyle:"content",active:active_index,collapsible:true,changestart:function(event,ui){if($(this).hasClass('effect-none')){ui.options.animated=false;}
else{ui.options.animated='slide';}}});if(type=='form'){var $firstErrorItem=false;wrapper.find('div.field-group-accordion-item').each(function(i){if($(this).is('.required-fields')&&$(this).find('.form-required').length>0){$('h3.ui-accordion-header a').eq(i).append(' ').append($('.form-required').eq(0).clone());}
if($('.error',$(this)).length){if(!$firstErrorItem){$firstErrorItem=$(this).parent().accordion("activate",i);}
$('h3.ui-accordion-header').eq(i).addClass('error');}});if(!$firstErrorItem){$('.ui-accordion-content-active',$firstErrorItem).css({height:'auto',width:'auto',display:'block'});}}});}}
Drupal.FieldGroup.Effects.processHtabs={execute:function(context,settings,type){if(type=='form'){$('fieldset.horizontal-tabs-pane',context).once('fieldgroup-effects',function(i){if($(this).is('.required-fields')&&$(this).find('.form-required').length>0){$(this).data('horizontalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');}
if($('.error',$(this)).length){$(this).data('horizontalTab').link.parent().addClass('error');Drupal.FieldGroup.setGroupWithfocus($(this));$(this).data('horizontalTab').focus();}});}}}
Drupal.FieldGroup.Effects.processTabs={execute:function(context,settings,type){if(type=='form'){var errorFocussed=false;$('fieldset.vertical-tabs-pane',context).once('fieldgroup-effects',function(i){if($(this).is('.required-fields')&&$(this).find('.form-required').length>0){$(this).data('verticalTab').link.find('strong:first').after($('.form-required').eq(0).clone()).after(' ');}
if($('.error',$(this)).length){$(this).data('verticalTab').link.parent().addClass('error');if(!errorFocussed){Drupal.FieldGroup.setGroupWithfocus($(this));$(this).data('verticalTab').focus();errorFocussed=true;}}});}}}
Drupal.FieldGroup.Effects.processDiv={execute:function(context,settings,type){$('div.collapsible',context).once('fieldgroup-effects',function(){var $wrapper=$(this);var $toggler=$('span.field-group-format-toggler:first',$wrapper);var $link=$('<a class="field-group-format-title" href="#"></a>');$link.prepend($toggler.contents());if($(this).is('.required-fields')&&$(this).find('.form-required').length>0){$link.append(' ').append($('.form-required').eq(0).clone());}
$link.appendTo($toggler);$link.click(function(){var wrapper=$wrapper.get(0);if(!wrapper.animating){wrapper.animating=true;var speed=$wrapper.hasClass('speed-fast')?300:1000;if($wrapper.hasClass('effect-none')&&$wrapper.hasClass('speed-none')){$('> .field-group-format-wrapper',wrapper).toggle();}
else if($wrapper.hasClass('effect-blind')){$('> .field-group-format-wrapper',wrapper).toggle('blind',{},speed);}
else{$('> .field-group-format-wrapper',wrapper).toggle(speed);}
wrapper.animating=false;}
$wrapper.toggleClass('collapsed');return false;});});}};Drupal.behaviors.fieldGroup={attach:function(context,settings){settings.field_group=settings.field_group||Drupal.settings.field_group;if(settings.field_group==undefined){return;}
$.each(Drupal.FieldGroup.Effects,function(func){var type=func.toLowerCase().replace("process","");if(settings.field_group[type]!=undefined&&$.isFunction(this.execute)){this.execute(context,settings,settings.field_group[type]);}});$('.fieldset-wrapper .fieldset > legend').css({display:'block'});$('.vertical-tabs fieldset.fieldset').addClass('default-fallback');$('.group-wrapper .horizontal-tabs-panes > fieldset',context).once('group-wrapper-panes-processed',function(){var fieldgroupID='field_group-'+$(this).attr('id');$(this).attr('id',fieldgroupID);});$('.group-wrapper ul li').once('group-wrapper-ul-processed',function(){var fieldGroupNavigationListIndex=$(this).index();$(this).children('a').click(function(){var fieldset=$('.group-wrapper fieldset').get(fieldGroupNavigationListIndex);var hashUrl=$(fieldset).attr('id').replace(/^field_group-/,'').split(' ')[0];window.location.hash=hashUrl;});});}};})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/DATA/field_group/field_group.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/NAV/responsive_dropdown_menus/theme/responsive-dropdown-menus.js. */

(function($){Drupal.behaviors.responsiveDropdownMenuToggle={attach:function(context,settings){var responsiveDropdownMenus=Drupal.settings.responsive_dropdown_menus;var menuToggleHelper=Drupal.t('Menu');$('.responsive-menu',context).each(function(index){var menuID=$(this).attr('id');$.each(responsiveDropdownMenus,function(delta,title){if(delta==menuID){menuToggleHelper=title;}});if(!$(this).prev().hasClass('menu-toggle')){var title=Drupal.t('Toggle Menu');$(this).before('<a class="menu-toggle" title="'+title+'"><span class="lines"><span class="line first-line first"></span><span class="line"></span><span class="line last-line last"></span></span><span class="toggle-help">'+menuToggleHelper+'</span></a>');}});$('.menu-toggle').click(function(){$(this).next().toggleClass('menu-toggled');});}};Drupal.behaviors.responsiveDropdownMenuDropDown={attach:function(context){$('.responsive-menu li.menu-parent').hover(function(){$(this).children('.sub-menu').addClass('active');},function(){$(this).children('.sub-menu').removeClass('active');});}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/NAV/responsive_dropdown_menus/theme/responsive-dropdown-menus.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/themes/omega/omega/js/jquery.formalize.js. */

var FORMALIZE=(function($,window,document,undefined){function IE(version){var b=document.createElement('b');b.innerHTML='<!--[if IE '+version+']><br><![endif]-->';return!!b.getElementsByTagName('br').length;}
var PLACEHOLDER_SUPPORTED='placeholder'in document.createElement('input');var AUTOFOCUS_SUPPORTED='autofocus'in document.createElement('input');var IE6=IE(6);var IE7=IE(7);return{go:function(){var i,j=this.init;for(i in j){j.hasOwnProperty(i)&&j[i]();}},init:{disable_link_button:function(){$(document.documentElement).on('click','a.button_disabled',function(){return false;});},full_input_size:function(){if(!IE7||!$('textarea, input.input_full').length){return;}
$('textarea, input.input_full').wrap('<span class="input_full_wrap"></span>');},ie6_skin_inputs:function(){if(!IE6||!$('input, select, textarea').length){return;}
var button_regex=/button|submit|reset/;var type_regex=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;$('input').each(function(){var el=$(this);if(this.getAttribute('type').match(button_regex)){el.addClass('ie6_button');if(this.disabled){el.addClass('ie6_button_disabled');}}
else if(this.getAttribute('type').match(type_regex)){el.addClass('ie6_input');if(this.disabled){el.addClass('ie6_input_disabled');}}});$('textarea, select').each(function(){if(this.disabled){$(this).addClass('ie6_input_disabled');}});},autofocus:function(){if(AUTOFOCUS_SUPPORTED||!$(':input[autofocus]').length){return;}
var el=$('[autofocus]')[0];if(!el.disabled){el.focus();}},placeholder:function(){if(PLACEHOLDER_SUPPORTED||!$(':input[placeholder]').length){return;}
FORMALIZE.misc.add_placeholder();$(':input[placeholder]').each(function(){if(this.type==='password'){return;}
var el=$(this);var text=el.attr('placeholder');el.focus(function(){if(el.val()===text){el.val('').removeClass('placeholder_text');}}).blur(function(){FORMALIZE.misc.add_placeholder();});el.closest('form').submit(function(){if(el.val()===text){el.val('').removeClass('placeholder_text');}}).on('reset',function(){setTimeout(FORMALIZE.misc.add_placeholder,50);});});}},misc:{add_placeholder:function(){if(PLACEHOLDER_SUPPORTED||!$(':input[placeholder]').length){return;}
$(':input[placeholder]').each(function(){if(this.type==='password'){return;}
var el=$(this);var text=el.attr('placeholder');if(!el.val()||el.val()===text){el.val(text).addClass('placeholder_text');}});}}};})(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go();});;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/themes/omega/omega/js/jquery.formalize.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/themes/omega/omega/js/omega-mediaqueries.js. */

Drupal.omega=Drupal.omega||{};(function($){var current;var previous;var setCurrentLayout=function(index){index=parseInt(index);previous=current;current=Drupal.settings.omega.layouts.order.hasOwnProperty(index)?Drupal.settings.omega.layouts.order[index]:'mobile';if(previous!=current){$('body').removeClass('responsive-layout-'+previous).addClass('responsive-layout-'+current);$.event.trigger('responsivelayout',{from:previous,to:current});}};Drupal.omega.getCurrentLayout=function(){return current;};Drupal.omega.getPreviousLayout=function(){return previous;};Drupal.omega.crappyBrowser=function(){return $.browser.msie&&parseInt($.browser.version,10)<9;};Drupal.omega.checkLayout=function(layout){if(Drupal.settings.omega.layouts.queries.hasOwnProperty(layout)&&Drupal.settings.omega.layouts.queries[layout]){var output=Drupal.omega.checkQuery(Drupal.settings.omega.layouts.queries[layout]);if(!output&&layout==Drupal.settings.omega.layouts.primary){var dummy=$('<div id="omega-check-query"></div>').prependTo('body');dummy.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');dummy.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-check-query { z-index: 100; }</style><![endif]-->');output=parseInt(dummy.css('z-index'))==100;dummy.remove();}
return output;}
return false;};Drupal.omega.checkQuery=function(query){var dummy=$('<div id="omega-check-query"></div>').prependTo('body');dummy.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');dummy.append('<style media="'+query+'">#omega-check-query { z-index: 100; }</style>');var output=parseInt(dummy.css('z-index'))==100;dummy.remove();return output;};Drupal.behaviors.omegaMediaQueries={attach:function(context){$('body',context).once('omega-mediaqueries',function(){var primary=$.inArray(Drupal.settings.omega.layouts.primary,Drupal.settings.omega.layouts.order);var dummy=$('<div id="omega-media-query-dummy"></div>').prependTo('body');dummy.append('<style media="all">#omega-media-query-dummy { position: relative; z-index: -1; }</style>');dummy.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-media-query-dummy { z-index: '+primary+'; }</style><![endif]-->');for(var i in Drupal.settings.omega.layouts.order){dummy.append('<style media="'+Drupal.settings.omega.layouts.queries[Drupal.settings.omega.layouts.order[i]]+'">#omega-media-query-dummy { z-index: '+i+'; }</style>');}
$(window).bind('resize.omegamediaqueries',function(){setCurrentLayout(dummy.css('z-index'));}).load(function(){$(this).trigger('resize.omegamediaqueries');});});}};})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/themes/omega/omega/js/omega-mediaqueries.js. */
;/*})'"*/


}
/*
     FILE ARCHIVED ON 20:50:44 May 15, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:16:04 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 160.493
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.088
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 117.939 (3)
  PetaboxLoader3.datanode: 69.061 (4)
  CDXLines.iter: 17.634 (3)
  load_resource: 104.485
  PetaboxLoader3.resolve: 60.346
*/