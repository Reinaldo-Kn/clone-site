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

/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/MEDIA/scald_file/scald_file.js. */

(function($){Drupal.behaviors.scaldFile={attach:function(context,settings){$('body').once('scald-file',function(){if(typeof CKEDITOR!=='undefined'){CKEDITOR.on('instanceReady',function(ev){CKEDITOR.instances[ev.editor.name].document.appendStyleSheet(Drupal.settings.basePath+settings.scaldFile.path);});}});}};})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/MEDIA/scald_file/scald_file.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/MEDIA/scald/modules/providers/scald_image/scald_image.js. */

(function($){Drupal.behaviors.scaldImage={attach:function(context,settings){if(typeof Drupal.dndck4!=='undefined'){Drupal.dndck4.addOption('txtLink','image','atom','scald_image',function(infoTab,dialogDefinition){infoTab.add({id:'txtLink',type:'text',label:Drupal.t('Link'),setup:function(widget){var options=JSON.parse(widget.data.options);if(options.link){this.setValue(decodeURIComponent(options.link));}},commit:function(widget){var options=JSON.parse(widget.data.options);var value=this.getValue();if(value!=''){options.link=encodeURIComponent(value);}
else{delete options.link;}
widget.setData('options',JSON.stringify(options));}});});}}};})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/MEDIA/scald/modules/providers/scald_image/scald_image.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.somme-tourisme.com/sites/all/modules/UX/better_exposed_filters/better_exposed_filters.js. */

(function($){Drupal.behaviors.betterExposedFilters={attach:function(context){$('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]').change(function(){_bef_highlight(this,context);}).filter(':checked').closest('.form-item',context).addClass('highlight');}};Drupal.behaviors.betterExposedFiltersSelectAllNone={attach:function(context){var selected=$('.form-checkboxes.bef-select-all-none:not(.bef-processed)');if(selected.length){var selAll=Drupal.t('Select All');var selNone=Drupal.t('Select None');var link=$('<a class="bef-toggle" href="#">'+selAll+'</a>')
link.click(function(event){event.preventDefault();event.stopPropagation();if(selAll==$(this).text()){$(this).html(selNone).siblings('.bef-checkboxes, .bef-tree').find('.form-item input:checkbox').each(function(){$(this).attr('checked',true);_bef_highlight(this,context);}).end().find('input[type=checkbox]:first').change();}
else{$(this).html(selAll).siblings('.bef-checkboxes, .bef-tree').find('.form-item input:checkbox').each(function(){$(this).attr('checked',false);_bef_highlight(this,context);}).end().find('input[type=checkbox]:first').change();}});selected.addClass('bef-processed').each(function(index){var newLink=link.clone(true);newLink.insertBefore($('.bef-checkboxes, .bef-tree',this));if($('input:checkbox:checked',this).length==$('input:checkbox',this).length){newLink.click();}});}
var befSettings=Drupal.settings.better_exposed_filters;if(befSettings&&befSettings.datepicker&&befSettings.datepicker_options&&$.fn.datepicker){var opt=[];$.each(befSettings.datepicker_options,function(key,val){if(key&&val){opt[key]=JSON.parse(val);}});$('.bef-datepicker').datepicker(opt);}}};Drupal.behaviors.betterExposedFiltersAllNoneNested={attach:function(context,settings){$('.form-checkboxes.bef-select-all-none-nested li').has('ul').once('bef-all-none-nested',function(){$(this).find('input.form-checkboxes:first').click(function(){var checkedParent=$(this).attr('checked');if(!checkedParent){$(this).parents('li:first').find('ul input.form-checkboxes').removeAttr('checked');}
else{$(this).parents('li:first').find('ul input.form-checkboxes').attr('checked',$(this).attr('checked'));}}).end().find('ul input.form-checkboxes').click(function(){var checked=$(this).attr('checked');var ct=$(this).parents('ul:first').find('input.form-checkboxes:not(:checked)').size();if(!checked){$(this).parents('li:first').parents('li:first').find('input.form-checkboxes:first').removeAttr('checked');}
if(!ct){$(this).parents('li:first').parents('li:first').find('input.form-checkboxes:first').attr('checked',checked);}});});}};Drupal.behaviors.better_exposed_filters_slider={attach:function(context,settings){var befSettings=settings.better_exposed_filters;if(befSettings&&befSettings.slider&&befSettings.slider_options){$.each(befSettings.slider_options,function(i,sliderOptions){var containing_parent="#"+sliderOptions.viewId+" #edit-"+sliderOptions.id+"-wrapper .views-widget";var $filter=$(containing_parent);if(!$filter.length){containing_parent="#"+sliderOptions.viewId+" .bef-slider-wrapper";$filter=$(containing_parent);}
$filter.once('slider-filter',function(){var $input=$(this).find('input[type=text]');if($input.length==2){var $min=$input.parent().find('input#edit-'+sliderOptions.id+'-min'),$max=$input.parent().find('input#edit-'+sliderOptions.id+'-max'),default_min,default_max;if(!$min.length||!$max.length){return;}
default_min=parseFloat(($min.val()=='')?sliderOptions.min:$min.val(),10);default_max=parseFloat(($max.val()=='')?sliderOptions.max:$max.val(),10);$min.val(default_min);$max.val(default_max);$min.parents(containing_parent).after($('<div class="bef-slider"></div>').slider({range:true,min:parseFloat(sliderOptions.min,10),max:parseFloat(sliderOptions.max,10),step:parseFloat(sliderOptions.step,10),animate:sliderOptions.animate?sliderOptions.animate:false,orientation:sliderOptions.orientation,values:[default_min,default_max],slide:function(event,ui){$min.val(ui.values[0]);$max.val(ui.values[1]);},change:function(event,ui){$min.val(ui.values[0]);$max.val(ui.values[1]);},stop:function(event,ui){$(this).parents('form').find('.ctools-auto-submit-click').click();}}));$min.blur(function(){befUpdateSlider($(this),0,sliderOptions);});$max.blur(function(){befUpdateSlider($(this),1,sliderOptions);});}
else if($input.length==1){if($input.attr('id')!='edit-'+sliderOptions.id){return;}
var default_value=parseFloat(($input.val()=='')?sliderOptions.min:$input.val(),10);$input.val(default_value);$input.parents(containing_parent).after($('<div class="bef-slider"></div>').slider({min:parseFloat(sliderOptions.min,10),max:parseFloat(sliderOptions.max,10),step:parseFloat(sliderOptions.step,10),animate:sliderOptions.animate?sliderOptions.animate:false,orientation:sliderOptions.orientation,value:default_value,slide:function(event,ui){$input.val(ui.value);},change:function(event,ui){$input.val(ui.value);},stop:function(event,ui){$(this).parents('form').find('.ctools-auto-submit-click').click();}}));$input.blur(function(){befUpdateSlider($(this),null,sliderOptions);});}
else{return;}})});}}};Drupal.behaviors.better_exposed_filters_select_as_links={attach:function(context,settings){$('.bef-select-as-links',context).once(function(){var $element=$(this);if(typeof settings.views=='undefined'||typeof settings.views.ajaxViews=='undefined'){return;}
var $uses_ajax=false;$.each(settings.views.ajaxViews,function(i,item){var $view_name=item.view_name.replace(/_/g,'-');var $view_display_id=item.view_display_id.replace(/_/g,'-');var $id='views-exposed-form-'+$view_name+'-'+$view_display_id;var $form_id=$element.parents('form').attr('id');if($form_id==$id){$uses_ajax=true;return;}});if(!$uses_ajax){return;}
$(this).find('a').click(function(event){var $wrapper=$(this).parents('.bef-select-as-links');var $options=$wrapper.find('select option');event.preventDefault();event.stopPropagation();$wrapper.find('select option').removeAttr('selected');var link_text=$(this).text();$selected=$options.filter(function(){return $(this).text()==link_text;});$selected.attr('selected','selected');$wrapper.find('.bef-new-value').val($selected.val());$wrapper.find('a').removeClass('active');$(this).addClass('active');$wrapper.parents('form').find('.views-submit-button *[type=submit]').click();});});}};Drupal.behaviors.betterExposedFiltersRequiredFilter={attach:function(context,settings){$('.bef-select-as-checkboxes',context).once('bef-required-filter').ajaxComplete(function(e,xhr,s){var $element=$(this);if(typeof settings.views=='undefined'||typeof settings.views.ajaxViews=='undefined'){return;}
var $view_name;var $view_display_id;var $uses_ajax=false;$.each(settings.views.ajaxViews,function(i,item){$view_name=item.view_name;$view_display_id=item.view_display_id;var $id='views-exposed-form-'+$view_name.replace(/_/g,'-')+'-'+$view_display_id.replace(/_/g,'-');var $form_id=$element.parents('form').attr('id');if($form_id==$id){$uses_ajax=true;return false;}});if($('input',this).length>0){var $filter_name=$('input',this).attr('name').slice(0,-2);if(Drupal.settings.better_exposed_filters.views[$view_name].displays[$view_display_id].filters[$filter_name].required&&$('input:checked',this).length==0){$('input',this).prop('checked',true);}}});}}
function _bef_highlight(elem,context){$elem=$(elem,context);$elem.attr('checked')?$elem.closest('.form-item',context).addClass('highlight'):$elem.closest('.form-item',context).removeClass('highlight');}
function befUpdateSlider($el,valIndex,sliderOptions){var val=parseFloat($el.val(),10),currentMin=$el.parents('div.views-widget').next('.bef-slider').slider('values',0),currentMax=$el.parents('div.views-widget').next('.bef-slider').slider('values',1);if(valIndex!=null){if(valIndex==0&&val>currentMax){val=currentMax;}
if(valIndex==1&&val<currentMin){val=currentMin;}
if(isNaN(val)){val=$el.parents('div.views-widget').next('.bef-slider').slider('values',valIndex);}}
else{if(isNaN(val)){val=$el.parents('div.views-widget').next('.bef-slider').slider('value');}}
val=parseFloat(val,10);if(valIndex!=null){$el.parents('div.views-widget').next('.bef-slider').slider('values',valIndex,val);}
else{$el.parents('div.views-widget').next('.bef-slider').slider('value',val);}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.somme-tourisme.com/sites/all/modules/UX/better_exposed_filters/better_exposed_filters.js. */
;/*})'"*/
(function ($) {

/**
 * Attaches the autocomplete behavior to all required fields.
 */
Drupal.behaviors.autocomplete = {
  attach: function (context, settings) {
    var acdb = [];
    $('input.autocomplete', context).once('autocomplete', function () {
      var uri = this.value;
      if (!acdb[uri]) {
        acdb[uri] = new Drupal.ACDB(uri);
      }
      var $input = $('#' + this.id.substr(0, this.id.length - 13))
        .attr('autocomplete', 'OFF')
        .attr('aria-autocomplete', 'list');
      $($input[0].form).submit(Drupal.autocompleteSubmit);
      $input.parent()
        .attr('role', 'application')
        .append($('<span class="element-invisible" aria-live="assertive"></span>')
          .attr('id', $input.attr('id') + '-autocomplete-aria-live')
        );
      new Drupal.jsAC($input, acdb[uri]);
    });
  }
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).length == 0;
};

/**
 * An AutoComplete object.
 */
Drupal.jsAC = function ($input, db) {
  var ac = this;
  this.input = $input[0];
  this.ariaLive = $('#' + this.input.id + '-autocomplete-aria-live');
  this.db = db;

  $input
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event.
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow.
      this.selectDown();
      return false;
    case 38: // up arrow.
      this.selectUp();
      return false;
    default: // All other keys.
      return true;
  }
};

/**
 * Handler for the "keyup" event.
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // Shift.
    case 17: // Ctrl.
    case 18: // Alt.
    case 20: // Caps lock.
    case 33: // Page up.
    case 34: // Page down.
    case 35: // End.
    case 36: // Home.
    case 37: // Left arrow.
    case 38: // Up arrow.
    case 39: // Right arrow.
    case 40: // Down arrow.
      return true;

    case 9:  // Tab.
    case 13: // Enter.
    case 27: // Esc.
      this.hidePopup(e.keyCode);
      return true;

    default: // All other keys.
      if (input.value.length > 0 && !input.readOnly) {
        this.populatePopup();
      }
      else {
        this.hidePopup(e.keyCode);
      }
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field.
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = $(node).data('autocompleteValue');
  $(this.input).trigger('autocompleteSelect', [node]);
};

/**
 * Highlights the next suggestion.
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else if (this.popup) {
    var lis = $('li', this.popup);
    if (lis.length > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion.
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion.
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
  $(this.ariaLive).html($(this.selected).html());
};

/**
 * Unhighlights a suggestion.
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Hides the autocomplete suggestions.
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed.
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.select(this.selected);
  }
  // Hide popup.
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function () { $(popup).remove(); });
  }
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Positions the suggestions popup and starts a search.
 */
Drupal.jsAC.prototype.populatePopup = function () {
  var $input = $(this.input);
  var position = $input.position();
  // Show popup.
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = $('<div id="autocomplete"></div>')[0];
  this.popup.owner = this;
  $(this.popup).css({
    top: parseInt(position.top + this.input.offsetHeight, 10) + 'px',
    left: parseInt(position.left, 10) + 'px',
    width: $input.innerWidth() + 'px',
    display: 'none'
  });
  $input.before(this.popup);

  // Do search.
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received.
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches.
  var ul = $('<ul></ul>');
  var ac = this;
  for (key in matches) {
    $('<li></li>')
      .html($('<div></div>').html(matches[key]))
      .mousedown(function () { ac.hidePopup(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); })
      .data('autocompleteValue', key)
      .appendTo(ul);
  }

  // Show popup with matches, if any.
  if (this.popup) {
    if (ul.children().length) {
      $(this.popup).empty().append(ul).show();
      $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
    }
    else {
      $(this.popup).css({ visibility: 'hidden' });
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      $(this.ariaLive).html(Drupal.t('Searching for matches...'));
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object.
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search.
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this string needs to be searched for anyway. The pattern ../ is
  // stripped since it may be misinterpreted by the browser.
  searchString = searchString.replace(/^\s+|\.{2,}\/|\s+$/g, '');
  // Skip empty search strings, or search strings ending with a comma, since
  // that is the separator between search terms.
  if (searchString.length <= 0 ||
    searchString.charAt(searchString.length - 1) == ',') {
    return;
  }

  // See if this key has been searched for before.
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search.
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function () {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
    // encodeURIComponent to allow autocomplete search terms to contain slashes.
    $.ajax({
      type: 'GET',
      url: Drupal.sanitizeAjaxUrl(db.uri + '/' + Drupal.encodePath(searchString)),
      dataType: 'json',
      jsonp: false,
      success: function (matches) {
        if (typeof matches.status == 'undefined' || matches.status != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see.
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        Drupal.displayAjaxError(Drupal.ajaxError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request.
 */
Drupal.ACDB.prototype.cancel = function () {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};

})(jQuery);

;/*})'"*/
;/*})'"*/
(function($){
    
  /**
   * Attaches the autocomplete behavior to all required fields.
   */
  Drupal.behaviors.liveResults = {
    attach: function (context, settings) {
      var acdb = [];
      $('input.live-result-autocomplete', context).once('autocomplete', function () {
        var uri = this.value;
        if (!acdb[uri]) {
          acdb[uri] = new Drupal.ACDB(uri);
        }
        var $input = $('#' + this.id.substr(0, this.id.length - 13))
        .attr('autocomplete', 'OFF')
        .attr('aria-autocomplete', 'list');
        if ( Drupal.settings.search_api_live_results ) {
          $input.data('min-length', Drupal.settings.search_api_live_results.min_length);
          $input.data('auto-hide', Drupal.settings.search_api_live_results.auto_hide);
        }
        $($input[0].form).submit(Drupal.autocompleteSubmitLiveResults);
        $input.parent()
        .attr('role', 'application')
        .append($('<span class="element-invisible" aria-live="assertive"></span>')
          .attr('id', $input.attr('id') + '-autocomplete-aria-live')
          );
        new Drupal.jsACLiveResult($input, acdb[uri]);
      });
    }
  };

  /**
   * Prevents the form from submitting if the suggestions popup is open
   * and closes the suggestions popup when doing so.
   */
  Drupal.autocompleteSubmitLiveResults = function () {
    return $('#autocomplete').each(function () {
      this.owner.hidePopup();
    }).size() == 0;
  };

  /**
   * An AutoComplete object.
   */
  Drupal.jsACLiveResult = function ($input, db) {
    var ac = this;
    this.input = $input[0];
    this.ariaLive = $('#' + $input.attr('id') + '-autocomplete-aria-live');
    this.db = db;
    $input
    .keydown(function (event) {
      return ac.onkeydown(this, event);
    })
    .keyup(function (event) {
      ac.onkeyup(this, event);
    });
    $(document).bind('click', function(event) {
      var $target = $(event.target);
      if (!$target.is('#autocomplete') && !$target.closest('#autocomplete').length) {
        ac.hidePopup();
      }      
    })
  };
  
  /**
   * Handler for the "keydown" event.
   */
  Drupal.jsACLiveResult.prototype.onkeydown = function (input, e) {
    if (!e) {
      e = window.event;
    }
    switch (e.keyCode) {
      case 40: // down arrow.
        this.selectDown();
        return false;
      case 38: // up arrow.
        this.selectUp();
        return false;
      default: // All other keys.
        return true;
    }
  };

  /**
   * Handler for the "keyup" event.
   */
  Drupal.jsACLiveResult.prototype.onkeyup = function (input, e) {
    if (!e) {
      e = window.event;
    }
    switch (e.keyCode) {
      case 16: // Shift.
      case 17: // Ctrl.
      case 18: // Alt.
      case 20: // Caps lock.
      case 33: // Page up.
      case 34: // Page down.
      case 35: // End.
      case 36: // Home.
      case 37: // Left arrow.
      case 38: // Up arrow.
      case 39: // Right arrow.
      case 40: // Down arrow.
        return true;

      case 9:  // Tab.
      case 27: // Esc.
        this.hidePopup(e.keyCode);
        return true;

      case 13: // Enter.
        // For some reason, this.selected is false, and this.popup is null. Use
        // a workaround to find the currently selected item.
        var $selectedItem = $(this.input).parent().find('#autocomplete li.selected');
        if ($selectedItem.size() == 0) {
          // If user does not selected a result and hit Enter: submit form.
          this.input.form.submit();
        }
        else {
          // Otherwise: click the first link inside item.
          var $firstLink = $selectedItem.find('a:first');
          if ($firstLink.size() > 0) {
            $firstLink[0].click();
          }
        }
        this.hidePopup(e.keyCode);
        return true;

      default: // All other keys.
        if (input.value.length > 0)
          this.populatePopup();
        else
          this.hidePopup(e.keyCode);
        return true;
    }
  };
  
  /**
   * Puts the currently highlighted suggestion into the autocomplete field.
   */
  Drupal.jsACLiveResult.prototype.select = function (node) {
  //this.input.value = $(node).data('autocompleteValue');
  };

  /**
   * Highlights the next suggestion.
   */
  Drupal.jsACLiveResult.prototype.selectDown = function () {
    if (this.selected && this.selected.nextSibling) {
      this.highlight(this.selected.nextSibling);
    }
    else if (this.popup) {
      var lis = $('li', this.popup);
      if (lis.size() > 0) {
        this.highlight(lis.get(0));
      }
    }
  };
  
  /**
 * Highlights the previous suggestion.
 */
  Drupal.jsACLiveResult.prototype.selectUp = function () {
    if (this.selected && this.selected.previousSibling) {
      this.highlight(this.selected.previousSibling);
    }
  };

  /**
 * Highlights a suggestion.
 */
  Drupal.jsACLiveResult.prototype.highlight = function (node) {
    if (this.selected) {
      $(this.selected).removeClass('selected');
    }
    $(node).addClass('selected');
    this.selected = node;
    $(this.ariaLive).html($(this.selected).html());
  };

  /**
   * Unhighlights a suggestion.
   */
  Drupal.jsACLiveResult.prototype.unhighlight = function (node) {
    $(node).removeClass('selected');
    this.selected = false;
    $(this.ariaLive).empty();
  };

  /**
   * Hides the autocomplete suggestions.
   */
  Drupal.jsACLiveResult.prototype.hidePopup = function (keycode, event) {
    //  if we have settings for this then check if we should be hiding or not
    if (!Drupal.settings.search_api_live_results.auto_hide) {
      return;
    }

    // Hide popup.
    var popup = this.popup;
    if (popup) {
      this.popup = null;
      $(popup).fadeOut('fast', function () {
        $(popup).remove();
      });
    }
    this.selected = false;
    $(this.ariaLive).empty();
  };
  
  /**
   * Positions the suggestions popup and starts a search.
   */
  Drupal.jsACLiveResult.prototype.populatePopup = function () {
    var $input = $(this.input);
    var position = $input.position();
    // Show popup.
    if (this.popup) {
      $(this.popup).remove();
    }
    this.selected = false;
    this.popup = $('<div id="autocomplete"></div>')[0];
    this.popup.owner = this;
    $(this.popup).css({
      top: parseInt(position.top + this.input.offsetHeight, 10) + 'px',
      left: parseInt(position.left, 10) + 'px',
      width: $input.innerWidth() + 'px',
      display: 'none'
    });
    $input.before(this.popup);

    // Do search.
    this.db.owner = this;  
    this.db.searchLiveResult(this.input.value);
   
  };
  
  /**
   * Fills the suggestion popup with any matches received.
   */
  Drupal.jsACLiveResult.prototype.found = function (matches) {
    // If no value in the textfield, do not show the popup.
    if (!this.input.value.length) {
      return false;
    }
    // Prepare matches.
    var ul = $('<ul></ul>');
    var ac = this;
    for (key in matches) {
      $('<li class="live-result-search-item-wrapper"></li>')
      .html($('<div class="live-result-search-item"></div>').html(matches[key]))
      .mouseover(function () {
        ac.highlight(this);
      })
      .mouseout(function () {
        ac.unhighlight(this);
      })
      .appendTo(ul);
    }

    // Show popup with matches, if any.
    if (this.popup) {
      if (ul.children().size()) {
        $(this.popup).empty().append(ul).show();
        $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
      }
      else {
        $(this.popup).css({
          visibility: 'hidden'
        });
        this.hidePopup();
      }
    }
  };
  
  Drupal.jsACLiveResult.prototype.setStatus = function (status) {
    switch (status) {
      case 'begin':
        $(this.input).addClass('throbbing');
        $(this.ariaLive).html(Drupal.t('Searching for matches...'));
        break;
      case 'cancel':
      case 'error':
      case 'found':
        $(this.input).removeClass('throbbing');
        break;
    }
  };
   
  /**
   * Performs a cached and delayed search.
   */
  if (Drupal.hasOwnProperty('ACDB')){
	  Drupal.ACDB.prototype.searchLiveResult = function (searchString) {
	    var db = this;
	    var min_length = 3;
	
	    if (Drupal.settings.search_api_live_results) {
	      min_length = Drupal.settings.search_api_live_results.min_length;
	    }
	    this.searchString = searchString;
	
	    // Strip double, leading and trailing whitespaces
	    searchString = searchString.replace(/(^\s*)|(\s*$)/gi,"");
	    searchString = searchString.replace(/[ ]{2,}/gi," ");
	    searchString = searchString.replace(/\n /,"\n");
	  
	    // Minimum 3 characters should be provided
	    if (searchString.length < min_length ||
	      searchString.charAt(searchString.length - 1) == ',') {
	      return;
	    }
	
	    // See if this key has been searched for before.
	    if (this.cache[searchString]) {
	      return this.owner.found(this.cache[searchString]);
	    }
	
	    // Initiate delayed search.
	    if (this.timer) {
	      clearTimeout(this.timer);
	    }
	    this.timer = setTimeout(function () {
	      db.owner.setStatus('begin');
	
	      ajax_properties = {
	        'type': 'GET',
	        'success': function (matches) {
	          if (typeof matches.status == 'undefined' || matches.status != 0) {
	            db.cache[searchString] = matches;
	            // Verify if these are still the matches the user wants to see.
	            if (db.searchString == searchString) {
	              db.owner.found(matches);
	            }
	            db.owner.setStatus('found');
	          }
	        },
	        'error': function (xmlhttp) {
	        //
	        }
	      }
	
	      if($(db.owner.input).hasClass('caching-method-enabled')) {
	        ajax_properties.url =  db.uri;
	        ajax_properties.data = {
	          'keys': encodeURIComponent(searchString)
	        }
	      }
	      else {
	        ajax_properties.url = db.uri + '/' + Drupal.encodePath(searchString);
	      }
	
	      $.ajax(ajax_properties);
	
	    }, this.delay);
	  };
	}
})(jQuery);

;/*})'"*/
;/*})'"*/


}
/*
     FILE ARCHIVED ON 08:45:26 May 15, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:16:02 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 616.345
  exclusion.robots: 0.19
  exclusion.robots.policy: 0.18
  RedisCDXSource: 1.604
  esindex: 0.01
  LoadShardBlock: 586.414 (3)
  PetaboxLoader3.resolve: 486.076 (5)
  PetaboxLoader3.datanode: 207.368 (5)
  CDXLines.iter: 24.939 (3)
  load_resource: 150.675 (2)
*/