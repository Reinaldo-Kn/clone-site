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

(function($) {
  /**
   * Apply the "observe and react" through behavior.
   */
  Drupal.behaviors.search_api_ajax = {
    attach: function(context, settings) {
      var facetLocations = Drupal.settings.search_api_ajax.facet_locations ? Drupal.settings.search_api_ajax.facet_locations : 'body';
      Drupal.search_api_ajax.ajax(facetLocations);
    }
  };

  Drupal.search_api_ajax = {};

  /**
   * We use the following jQuery BBQ hash states:
   *
   * #path: the (facetapi_pretty) path
   * #query: search ?query=<query>
   * #sort: sort field name
   * #order: sort order
   * #items_per_page: Views items_per_page
   * #page: Views paging
   * #f: the regular facetapi f query
   */

  // Content settings
  var blocks = Drupal.settings.search_api_ajax.blocks;
  var content = Drupal.settings.search_api_ajax.content;
  var regions = Drupal.settings.search_api_ajax.regions;
  var facetLocations = Drupal.settings.search_api_ajax.facet_locations ? Drupal.settings.search_api_ajax.facet_locations : 'body';

  // Path setting
  var ajaxPath = Drupal.settings.search_api_ajax_path;

  // Visual settings
  var spinner = Drupal.settings.search_api_ajax.spinner;
  var target = Drupal.settings.search_api_ajax.scrolltarget;
  var fade = Drupal.settings.search_api_ajax.fade;
  var opacity = Drupal.settings.search_api_ajax.opacity;
  var speed = Drupal.settings.search_api_ajax.scrollspeed;

  // Drupal overlay.module trigger helper
  var overlay = false;

  // Read URL and remove Drupal base with RegExp
  Drupal.search_api_ajax.readUrl = function(url) {
    return url.replace(new RegExp('^.*' + Drupal.settings.basePath + ajaxPath + '/' + '?'), '');
  };

  // Translate clicked URL to BBQ state
  Drupal.search_api_ajax.urlToState = function(url) {
    
    path = $.bbq.getState('path');    
    if ($.isArray(url)) {
      if(path){
        var url_new =  path;
      }else{
        var url_new =  '/' + ajaxPath;     
      } 
      $.each(url, function(index,value){
        var split = value.split(':');
        url =  url_new + '/' + split[0] + '/' + split[1];
      });
    }
    
    // Path is a special case
    state = Drupal.search_api_ajax.getUrlState(url);
    urlPath = url.split('?');
    path = Drupal.search_api_ajax.readUrl(urlPath[0]);
    if ( typeof path !== 'undefined' && path != '') {
      // jQuery BBQ adds extra double encoding: we need to undo that once
      state['path'] = decodeURIComponent(path);
    }
    
    // Use merge_mode: 2 to completely replace state (removing empty fragments)
    $.bbq.pushState(state, 2);
  };

  // Get URL state
  Drupal.search_api_ajax.getUrlState = function(url) {
    var state = {};

    hashes = url.slice(url.indexOf('?') + 1).split('&');
    for ( i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      if ( typeof hash[1] !== 'undefined' && hash[1] != '') {
		hash[0] = hash[0].replace(/%5B/g, '[');
		hash[0] = hash[0].replace(/%5D/g, ']');
        state[hash[0]] = decodeURIComponent(hash[1]);
      }
    }
    return state;
  };

  // Post request to /search_api_ajax/path?query=
  Drupal.search_api_ajax.requestCallback = function(data) {

    // Avoid trigger on Drupal's #overlay
    if ($.bbq.getState('overlay')) {
      overlay = true;
      return;
    }

    // Avoid trigger after closing overlay
    if (overlay === true) {
      overlay = false;
      return;
    }

    // Visual effect: prepare for new data arrival
    if (content) {
      if (fade) {
        $(content + ':first').fadeTo('fast', opacity);
      }
      if (spinner) {
        $('#zone-content').append('<div id="search-api-ajax-spinner"><img class="spinner" src="' + Drupal.settings.basePath + spinner + '" /></div>');
      }
    }
    // Scroll back to top, when top is out of view
    // Code taken from Views module
    if (target) {
      var offset = $(target).offset();
      
      var scrollTarget = target;
      while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
        scrollTarget = $(scrollTarget).parent();
      }
      if (offset.top - 10 < $(scrollTarget).scrollTop()) {
        $(scrollTarget).animate({
          scrollTop: (offset.top - 10)
        }, speed);
      }
    }

    path = '';
    if ( typeof data['path'] !== 'undefined' && data['path'] != '') {
      path = '/' + data['path'];
    }

    // Properly double re-encode all instances of forward/backward slashes, e.g.
    // #path=category/Audio%252FVideo (versus #path=category/Audio%2FVideo)
    // http://www.jampmark.com/web-scripting/5-solutions-to-url-encoded-slashes-problem-in-apache.html
    path = path.replace(/%2F/g, '%252F');
    path = path.replace(/%5C/g, '%255C');
    if (data['query']) {
      data['query'] = data['query'].replace(/%2F/g, '%252F');
      data['query'] = data['query'].replace(/%5C/g, '%255C');
    }
    query_param = {};
    $.each(data, function (key, value) {
        if (value != '' && key !== 'path') {
            query_param[key] = value;
        }
    });
    // Get AJAX, callback for returned JSON data
   $.get(Drupal.settings.basePath + 'search_api_ajax/' + ajaxPath + path, query_param, Drupal.search_api_ajax.responseCallback, 'json');
   /* $.get(Drupal.settings.basePath + 'search_api_ajax/' + ajaxPath + path, {
      query: data['query'],
      sort: data['sort'],
      order: data['order'],
      items_per_page: data['items_per_page'],
      page: data['page'],
      f: data['f'],
    }, Drupal.search_api_ajax.responseCallback, 'json');*/
  };

  // Process received JSON data
  Drupal.search_api_ajax.responseCallback = function(data) {

    // Visual effect: accept data arrival
    if (content) {
      if (fade) {
        $(content + ':first').fadeTo('fast', 1);
      }
      if (spinner) {
        $('#search-api-ajax-spinner').remove();
      }
    }

    for (var setting in data.settings) {
      Drupal.settings[setting] = data.settings[setting];
    }

    var list = [];

    // Add new blocks that have come into existence
    // @see search_api_ajax.pages.inc where we add this blocks variable
    if (data.blocks) {
      for (var new_block in data.blocks) {
        blocks[new_block] = data.blocks[new_block];
      }
    }

    // Schedule items for removal to avoid page jumpiness
    if (blocks) {
      for (var block in blocks) {
        list.push($(blocks[block]));
      }
    }

    // Output/append new data to frontend
    for (var region in data.regions) {
      if (region == 'search_api_ajax') {
        if (content) {
          $(content + ':first').html(data.regions[region]);
        }
      }
      else {
        $(regions[region]).html('');
        for (var block in data.regions[region]) {
          if (regions[region] && blocks[block]) {
            $(regions[region]).append(data.regions[region][block]);
          }
        }
      }
    }

    // Remove blocks that were scheduled for removal
    for (var i = 0, l = list.length; i < l; i++) {
      list[i].remove();
    }

    // Re-fire Drupal attachment behaviors
    Drupal.attachBehaviors('body');


      // Manage custom facet for distance
      data = $.bbq.getState();
      path = $.bbq.getState('path');
      if (path) {
    var res1 = path.match(/0 TO/g);
    var res2 = path.match(/1 TO/g);
    if (res1 !== null) {
        $('#facetapi-link--87').addClass('facetapi-active');
    }
    if (res2 !== null) {
        $('#facetapi-link--88').addClass('facetapi-active');
    }
      }
    // Support Google Analytics tracking for ajax requests
    if ( typeof ga !== 'undefined' && $.isFunction(ga)) {
      data = $.bbq.getState();
      if ( typeof data !== 'undefined' && !$.isEmptyObject(data)) {
        path = $.bbq.getState('path');
        if (path != '') {
          ga('send', 'pageview', {
            'page': Drupal.settings.basePath + ajaxPath + '/' + path,
            'title': $(document).find("title").text()
          });
        }
      }
    }
  };

  // Helper function to navigate on user actions
  Drupal.search_api_ajax.navigateUrlSelect = function(url) {
    if ( typeof url !== undefined) {
      Drupal.search_api_ajax.urlToState(url);
    }
    return false;
  };

  // Helper function to navigate on user actions
  Drupal.search_api_ajax.navigateUrl = function(url) {
    if ( typeof url !== undefined) {
      Drupal.search_api_ajax.urlToState(url);
    }
    return false;
  };

  // Helper function to navigate on new query
  Drupal.search_api_ajax.navigateQuery = function(query) {
    if ( typeof query !== undefined) {
      var state = {};
      // Bug on edit button
      //state['query'] = query;

      // merge_mode 2 clears everything else
      
      //$.bbq.pushState(state, 2);
      return false;
    }

    // If nothing was updated, continue the default action
    return true;
  };

  // Helper function to navigate on new range
  // Create Pretty Facet Path like: <field>/<from>/<to>
  Drupal.search_api_ajax.navigateRanges = function(path, field, from, to) {
    var state = {};

    // Get current state, check if state exists
    var exists = false;
    if ($.bbq.getState('path')) {
      path = $.bbq.getState('path');
    }
    if ( typeof path !== 'undefined' && path != '') {
      var splitStates = path.split('/');
      $.each(splitStates, function(index, value) {
        if (!(index % 2) && value == field) {
          exists = splitStates[index + 1];
        }
      });
    }

    // Decision: replace existing range or add new
    newRange = '[' + from + ' TO ' + to + ']';
    if (exists) {
      state['path'] = path.replace(exists, newRange);
    }
    else if ( typeof path !== 'undefined' && path != '') {
      state['path'] = path + '/' + field + '/' + newRange;
    }
    else {
      state['path'] = field + '/' + newRange;
    }

    $.bbq.pushState(state);
    return false;
  };

  // Observe and react to user behavior
  // @see http://api.jquery.com/category/selectors/attribute-selectors/
  Drupal.search_api_ajax.ajax = function(selector) {

    if ($('[id^=facetapi]').length) {
    // Observe facet and sorts links ^ starts with * contains
    // Check two paths: ^basePath/ajaxPath OR ^search_api_ajax/basePath/ajaxPath
    $(selector + ' a[href="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + ajaxPath + '"], ' + selector + ' a[href^="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + ajaxPath + '?"], ' + selector + ' a[href^="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + ajaxPath + '#"], ' + selector + ' a[href^="' + Drupal.settings.basePath + Drupal.settings.pathPrefix + ajaxPath + '/"], ' + selector + ' a[href^="' + Drupal.settings.basePath + 'search_api_ajax/' + Drupal.settings.pathPrefix + ajaxPath + '"], [id*="facetapi-link"]a[href*="'+window.location.origin + Drupal.settings.basePath + '"], [class^="sort-item"]a[href*="'+window.location.origin + Drupal.settings.basePath + '"]' ).not('.pager li a').not('.resa a').on('click', function() {
      return Drupal.search_api_ajax.navigateUrl($(this).attr('href'));
    });

    // Desactivate normal event on sort select.
    $('.region-facettessorts > div.form-type-select > select').attr('onchange', '');
    $('.region-facettessorts > div.form-type-select > select').attr('class', 'form-select');
    $('.region-facettessorts > div.form-type-select > select').unbind('onchange');

		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
				|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 && isMobile) {
			if (!$('select.facetapi-multiselect').find(':selected').length) {
				$('select.facetapi-multiselect').once('first-option_once').prepend('<option value="" disabled selected>Nom</option>');
			}
			$('select.facetapi-multiselect').once('multiselect_once').on('blur', function() {
				if ($(this).find(":selected:enabled").text() != '') {
					data = $.bbq.getState();
					if (typeof data['path'] !== 'undefined') {
						val = $(this).find(":selected:enabled").val();
						data['path'] = data['path']+'/'+val.replace(':', '/');
					}
					else {
						val = $(this).find(":selected:enabled").val();
						data['path'] = val.replace(':', '/');
					}
					$.bbq.pushState(data);
				}
			});
		}
		else{
			$('.default').each(function(index, val) {
				val = $(this).val(); $(this).val('');
				$(this).attr('placeholder', Drupal.t(val));
			});
			$('.facetapi-multiselect').once('multiselect_once').on('change', function(e) {
				if ($(this).find(":selected").val() != null) {
					value = $(this).val();
					data = $.bbq.getState();
					if (typeof data['path'] !== 'undefined') {
						data['path'] = data['path']+'/'+value[0].replace(':', '/');
					}
					else {
						data['path'] = value[0].replace(':', '/');
					}
					$.bbq.pushState(data);
				}
			});
		}


    

    //$('.search-choice-close').unbind('click');
    $('.search-choice-close').on('click', function() {
      var field = $(this).parent().find('span').text();
      field = field.replace(/\s/g,"+");
      var current_url = decodeURIComponent(window.location.href);
	  if (current_url.indexOf('&') > -1) {
		current_url = current_url.split('&');
	  }
	  else {
		current_url = current_url.split('#');
	  }
	  exposed = current_url[0];
      current_url = current_url[1].split('=');
	  current_url = current_url.splice(1, current_url.length);
      $.each(current_url, function(index, value){
        if (value.indexOf(field) > -1) {
          delete current_url[index];
          //delete current_url[index-1];
          return false;
        }
      });
      current_url = current_url.join('/');
	  data = $.bbq.getState();
	  if (typeof data['path'] !== 'undefined' && current_url != '') {
		  data['path'] = data['path']+'/'+current_url;
	  }
	  else if (current_url == '') {
		  data['path'] =  current_url;
	  }
	  $.bbq.pushState(data);
    });
    // Add support for facetapi checkboxes widget.
    // Unbind facetapi click event.
    $(selector + ' .facetapi-checkbox').unbind('click');
    $(selector + ' .facetapi-checkbox').on('click', function(event) {
      if ($(this).is('input')) {
          return Drupal.search_api_ajax.navigateUrl($(this).parent().find('a').attr('href'));
      }
      else {
          return Drupal.search_api_ajax.navigateUrl($(this).attr('href'));
      }
    });

    // Observe facet range select widgets
    $(selector + ' select[id^="facetapi_select"]').on('change', function() {
      return Drupal.search_api_ajax.navigateUrlSelect($(this).val());
    });
     $(selector + " .ui-state-default").on('click', function() {
      return Drupal.search_api_ajax.navigateUrl($(this).val());
    });
    // Observe search keys forms (or views input forms, must be custom set)
    $(selector + ' form[action*="' + ajaxPath + '"], ' + selector + ' form[action*="search_api_ajax/' + ajaxPath + '"]').not('.block-somme-resa form').on('submit', function() {
      return Drupal.search_api_ajax.navigateQuery($(this).find('input[name*="keys"]').val());
    });

    // Observe facet range sliders
    $(selector + ' .search-api-ranges-widget form[action^="' + Drupal.settings.basePath + ajaxPath + '"], ' + selector + ' .search-api-ranges-widget form[action^="' + Drupal.settings.basePath + 'search_api_ajax/' + ajaxPath + '"]').on('submit', function() {
      rangeTarget = Drupal.search_api_ajax.readUrl('/' + $(this).find('input[name="path"]').val());
      rangeField = $(this).find('input[name="range-field"]').val();
      rangeFrom = $(this).find('input[name="range-from"]').val();
      rangeTo = $(this).find('input[name="range-to"]').val();
      return Drupal.search_api_ajax.navigateRanges(rangeTarget, rangeField, rangeFrom, rangeTo);
    });
  }
  };
  if ($('[id^=facetapi]').length) {
    // Initialize on() listeners on first page load
    if ( typeof searchApiAjaxInit === 'undefined') {
      Drupal.search_api_ajax.ajax(facetLocations);
      searchApiAjaxInit = true;
    }

    // If hash directly entered on page load (e.g. external link)
    data = $.bbq.getState();
    if ( typeof data !== 'undefined' && !$.isEmptyObject(data)) {
      Drupal.search_api_ajax.requestCallback(data);
    }

    // If hash changed through click
    $(window).bind('hashchange', function(e) {
      data = e.getState();
      Drupal.search_api_ajax.requestCallback(data);
    });
  }
})(jQuery);

;/*})'"*/
;/*})'"*/


}
/*
     FILE ARCHIVED ON 20:46:16 May 15, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:16:06 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 91.719
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.07
  RedisCDXSource: 7.1
  esindex: 0.006
  LoadShardBlock: 60.585 (3)
  PetaboxLoader3.datanode: 129.326 (5)
  CDXLines.iter: 21.137 (3)
  load_resource: 170.054 (2)
  PetaboxLoader3.resolve: 83.705 (2)
*/