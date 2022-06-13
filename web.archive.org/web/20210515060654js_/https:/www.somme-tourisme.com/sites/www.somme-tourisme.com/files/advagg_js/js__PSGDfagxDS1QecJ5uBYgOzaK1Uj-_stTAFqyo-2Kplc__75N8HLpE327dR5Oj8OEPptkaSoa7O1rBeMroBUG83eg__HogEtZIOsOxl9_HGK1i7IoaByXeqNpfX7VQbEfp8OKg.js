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

(function ($) {
  Drupal.behaviors.gssAutocomplete = {
    attach: function(context, settings) {
      if (settings.gss.key == undefined) {
        return;
      }

      $('.block-search .form-item-search-block-form input.form-text, .gss .form-item-keys input.form-text, .block-search .form-search input.form-text')
        .focus(function () {
          this.select();
        })
        .mouseup(function (e) {
          e.preventDefault();
        })
        .autocomplete({
          position: {
            my: "left top",
            at: "left bottom",
            offset: "0, 5",
            collision: "none"
          },
          source: function (request, response) {
            $.ajax({
              url: "https://web.archive.org/web/20210515084636/http://clients1.google.com/complete/search?q=" + request.term + "&hl=en&client=partner&source=gcsc&partnerid=" + settings.gss.key + "&ds=cse&nocache=" + Math.random().toString(),
              dataType: "jsonp",
              success: function (data) {
                response($.map(data[1], function (item) {
                  return {
                    label: item[0],
                    value: item[0]
                  };
                }));
              }
            });
          },
          autoFill: true,
          minChars: 0,
          select: function (event, ui) {
            $(this).closest('input').val(ui.item.value);
            $(this).closest('form').trigger('submit');
          }
        });
    }
  };
}(jQuery));

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Lazyloader JQuery plugin
 *
 * @author: Daniel Honrade http://drupal.org/user/351112
 *
 * Settings:
 * - distance = distance of the image to the viewable browser screen before it gets loaded
 * - icon     = animating image that appears before the actual image is loaded
 *
 */

(function($){

  // Window jQuery object global reference.
  var $window;

  // Process lazyloader
  $.fn.lazyloader = function(options){
    var settings = $.extend($.fn.lazyloader.defaults, options);
    var images = this;

    if (typeof($window) == 'undefined') {
      $window = $(window);
    }

    // add the loader icon
    if(settings['icon'] != '') $('img[data-src]').parent().css({ position: 'relative', display: 'block'}).prepend('<img class="lazyloader-icon" src="' + settings['icon'] + '" />');

    // Load on refresh
    loadActualImages(images, settings);

    // Load on scroll
    $window.bind('scroll', function(e) {
      loadActualImages(images, settings);
    });

    // Load on resize
    $window.resize(function(e) {
      loadActualImages(images, settings);
    });

    return this;
  };

  // Defaults
  $.fn.lazyloader.defaults = {
    distance: 0, // the distance (in pixels) of image when loading of the actual image will happen
    icon: ''    // display animating icon
  };


  // Loading actual images
  function loadActualImages(images, settings){
    clearTimeout($.fn.lazyloader.timeout);

    $.fn.lazyloader.timeout = setTimeout(function(){
      images.each(function(){
        var $image = $(this);
        var imageHeight = $image.height(), imageWidth = $image.width();
        var iconTop = Math.round(imageHeight/2), iconLeft = Math.round(imageWidth/2), iconFactor = Math.round($image.siblings('img.lazyloader-icon').height()/2);
        $image.siblings('img.lazyloader-icon').css({ top: iconTop - iconFactor, left: iconLeft - iconFactor });

        if (windowView(this, settings) && ($image.attr('data-src'))) {
          loadImage(this);
          $image.fadeIn('slow');
        }
      });
    }, 50);
  };


  // Check if the images are within the window view (top, bottom, left and right)
  function windowView(image, settings){
    var $image = $(image);
    // window variables
    var windowHeight = $window.height(),
        windowWidth  = $window.width(),

        windowBottom = windowHeight + $window.scrollTop(),
        windowTop    = windowBottom - windowHeight,
        windowRight  = windowWidth + $window.scrollLeft(),
        windowLeft   = windowRight - windowWidth,

        // image variables
        imageHeight  = $image.height(),
        imageWidth   = $image.width(),

        imageTop     = $image.offset().top - settings['distance'],
        imageBottom  = imageTop + imageHeight + settings['distance'],
        imageLeft    = $image.offset().left - settings['distance'],
        imageRight   = imageLeft + imageWidth + settings['distance'];

           // This will return true if any corner of the image is within the screen
    return (((windowBottom >= imageTop) && (windowTop <= imageTop)) || ((windowBottom >= imageBottom) && (windowTop <= imageBottom))) &&
           (((windowRight >= imageLeft) && (windowLeft <= imageLeft)) || ((windowRight >= imageRight) && (windowLeft <= imageRight)));
  };


  // Load the image
  function loadImage(image){
    var $image = $(image);
    $image.hide().attr('src', $image.data('src')).removeAttr('data-src');
    $image.load(function() {
      $image.siblings('img.lazyloader-icon').remove();
    });
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {

Drupal.extlink = Drupal.extlink || {};

Drupal.extlink.attach = function (context, settings) {
  if (!settings.hasOwnProperty('extlink')) {
    return;
  }

  // Strip the host name down, removing ports, subdomains, or www.
  var pattern = /^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;
  var host = window.location.host.replace(pattern, '$3$4');
  var subdomain = window.location.host.replace(pattern, '$1');

  // Determine what subdomains are considered internal.
  var subdomains;
  if (settings.extlink.extSubdomains) {
    subdomains = "([^/]*\\.)?";
  }
  else if (subdomain == 'www.' || subdomain == '') {
    subdomains = "(www\\.)?";
  }
  else {
    subdomains = subdomain.replace(".", "\\.");
  }

  // Build regular expressions that define an internal link.
  var internal_link = new RegExp("^https?://" + subdomains + host, "i");

  // Extra internal link matching.
  var extInclude = false;
  if (settings.extlink.extInclude) {
    extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), "i");
  }

  // Extra external link matching.
  var extExclude = false;
  if (settings.extlink.extExclude) {
    extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), "i");
  }

  // Extra external link CSS selector exclusion.
  var extCssExclude = false;
  if (settings.extlink.extCssExclude) {
    extCssExclude = settings.extlink.extCssExclude;
  }

  // Extra external link CSS selector explicit.
  var extCssExplicit = false;
  if (settings.extlink.extCssExplicit) {
    extCssExplicit = settings.extlink.extCssExplicit;
  }

  // Find all links which are NOT internal and begin with http as opposed
  // to ftp://, javascript:, etc. other kinds of links.
  // When operating on the 'this' variable, the host has been appended to
  // all links by the browser, even local ones.
  // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
  // available in jQuery 1.0 (Drupal 5 default).
  var external_links = new Array();
  var mailto_links = new Array();
  $("a:not(." + settings.extlink.extClass + ", ." + settings.extlink.mailtoClass + "), area:not(." + settings.extlink.extClass + ", ." + settings.extlink.mailtoClass + ")", context).each(function(el) {
    try {
      var url = this.href.toLowerCase();
      if (url.indexOf('http') == 0
        && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude)))
        && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
        && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
        external_links.push(this);
      }
      // Do not include area tags with begin with mailto: (this prohibits
      // icons from being added to image-maps).
      else if (this.tagName != 'AREA' 
        && url.indexOf('mailto:') == 0 
        && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
        && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
        mailto_links.push(this);
      }
    }
    // IE7 throws errors often when dealing with irregular links, such as:
    // <a href="node/10"></a> Empty tags.
    // <a href="https://web.archive.org/web/20210515084636/http://user:pass@example.com">example</a> User:pass syntax.
    catch (error) {
      return false;
    }
  });

  if (settings.extlink.extClass) {
    Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass);
  }

  if (settings.extlink.mailtoClass) {
    Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass);
  }

  if (settings.extlink.extTarget) {
    // Apply the target attribute to all links.
    $(external_links).attr('target', settings.extlink.extTarget);
  }

  Drupal.extlink = Drupal.extlink || {};

  // Set up default click function for the external links popup. This should be
  // overridden by modules wanting to alter the popup.
  Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function() {
    if (settings.extlink.extAlert) {
      return confirm(settings.extlink.extAlertText);
    }
   }

  $(external_links).click(function(e) {
    return Drupal.extlink.popupClickHandler(e);
  });
};

/**
 * Apply a class and a trailing <span> to all links not containing images.
 *
 * @param links
 *   An array of DOM elements representing the links.
 * @param class_name
 *   The class to apply to the links.
 */
Drupal.extlink.applyClassAndSpan = function (links, class_name) {
  var $links_to_process;
  if (Drupal.settings.extlink.extImgClass){
    $links_to_process = $(links);
  }
  else {
    var links_with_images = $(links).find('img').parents('a');
    $links_to_process = $(links).not(links_with_images);
  }
  $links_to_process.addClass(class_name);
  var i;
  var length = $links_to_process.length;
  for (i = 0; i < length; i++) {
    var $link = $($links_to_process[i]);
    if ($link.css('display') == 'inline' || $link.css('display') == 'inline-block') {
      if (class_name == Drupal.settings.extlink.mailtoClass) {
        $link.append('<span class="' + class_name + '"><span class="element-invisible"> ' + Drupal.settings.extlink.mailtoLabel + '</span></span>');
      }
      else {
        $link.append('<span class="' + class_name + '"><span class="element-invisible"> ' + Drupal.settings.extlink.extLabel + '</span></span>');
      }
    }
  }
};

Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
Drupal.behaviors.extlink.attach = function (context, settings) {
  // Backwards compatibility, for the benefit of modules overriding extlink
  // functionality by defining an "extlinkAttach" global function.
  if (typeof extlinkAttach === 'function') {
    extlinkAttach(context);
  }
  else {
    Drupal.extlink.attach(context, settings);
  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/
Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n>1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Une erreur HTTP AJAX s\u0027est produite.","HTTP Result Code: !status":"Code de statut HTTP : !status","An AJAX HTTP request terminated abnormally.":"Une requ\u00eate HTTP AJAX s\u0027est termin\u00e9e anormalement.","Debugging information follows.":"Informations de d\u00e9bogage ci-dessous.","Path: !uri":"Chemin : !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText : !responseText","ReadyState: !readyState":"ReadyState : !readyState","Translate Text":"Traduire le texte","Please wait...":"Veuillez patienter...","An HTTP error @status occured.":"Une erreur HTTP @status s\u0027est produite.","No results":"Aucun r\u00e9sultat","All":"Tout","New":"Nouveau","Recent":"R\u00e9cent","Show shortcuts":"Afficher les raccourcis","Hide shortcuts":"Cacher les raccourcis","Submit":"Soumettre","Select all rows in this table":"S\u00e9lectionner toutes les lignes du tableau","Deselect all rows in this table":"D\u00e9s\u00e9lectionner toutes les lignes du tableau","Re-order rows by numerical weight instead of dragging.":"R\u00e9-ordonner les lignes avec des poids num\u00e9riques plut\u00f4t qu\u0027en les d\u00e9pla\u00e7ant.","Show row weights":"Afficher le poids des lignes","Hide row weights":"Cacher le poids des lignes","Drag to re-order":"Cliquer-d\u00e9poser pour r\u00e9-organiser","Changes made in this table will not be saved until the form is submitted.":"Les changements effectu\u00e9s dans ce tableau ne seront pris en compte que lorsque la configuration aura \u00e9t\u00e9 enregistr\u00e9e.","Hide":"Masquer","Show":"Afficher","Search":"Rechercher","Menu":"Menu","Also allow !name role to !permission?":"Autoriser \u00e9galement le r\u00f4le !name \u00e0 !permission ?","Disabled":"D\u00e9sactiv\u00e9","0 sec":"0\u00a0s","Select None":"Aucun","Select All":"Tout s\u00e9lectionner","Enabled":"Activ\u00e9","Content can only be inserted into CKEditor in the WYSIWYG mode.":"Le contenu peut seulement \u00eatre ins\u00e9r\u00e9 dans CKEditor en mode WYSIWYG.","Next":"Suivant","Colorbox":"Colorbox","Remove":"Retirer","Edit":"Modifier","Add":"Ajouter","Done":"Termin\u00e9","View":"Voir","Configure":"Configurer","Operation":"Op\u00e9ration","Exportables selected":"Exportables s\u00e9lectionn\u00e9s","Other":"Autre","Link":"Lien","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi","Prev":"Pr\u00e9c.","Mon":"lun","Tue":"mar","Wed":"mer","Thu":"jeu","Fri":"ven","Sat":"sam","Sun":"dim","January":"janvier","February":"F\u00e9vrier","March":"mars","April":"avril","May":"mai","June":"juin","July":"juillet","August":"ao\u00fbt","September":"septembre","October":"octobre","November":"novembre","December":"d\u00e9cembre","Today":"Aujourd\u0027hui","Jan":"jan","Feb":"f\u00e9v","Apr":"avr","Jun":"juin","Jul":"juil","Aug":"ao\u00fb","Sep":"sep","Oct":"oct","Nov":"nov","Dec":"d\u00e9c","Su":"Di","Mo":"Lu","Tu":"Ma","We":"Me","Th":"Je","Fr":"Ve","Sa":"Sa","Not published":"Non publi\u00e9","mm\/dd\/yy":"dd\/mm\/yy","By @name on @date":"Par @name le @date","By @name":"Par @name","Not in menu":"Pas dans le menu","Alias: @alias":"Alias : @alias","No alias":"Aucun alias","New revision":"Nouvelle r\u00e9vision","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"N\u0027oubliez pas de cliquer sur \u003Cem\u003EEnregistrer les blocs\u003C\/em\u003E pour confirmer les modifications apport\u00e9es ici.","This permission is inherited from the authenticated user role.":"Ce droit est h\u00e9rit\u00e9e du r\u00f4le de l\u0027utilisateur authentifi\u00e9.","No revision":"Aucune r\u00e9vision","Requires a title":"Titre obligatoire","Not restricted":"Non restreint","(active tab)":"(onglet actif)","Not customizable":"Non personnalisable","Restricted to certain pages":"R\u00e9serv\u00e9 \u00e0 certaines pages","The block cannot be placed in this region.":"Le bloc ne peut pas \u00eatre plac\u00e9 dans cette r\u00e9gion.","Hide summary":"Masquer le r\u00e9sum\u00e9","Edit summary":"Modifier le r\u00e9sum\u00e9","Don\u0027t display post information":"Ne pas afficher les informations de la contribution","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Le fichier s\u00e9lectionn\u00e9 %filename ne peut pas \u00eatre transf\u00e9r\u00e9. Seulement les fichiers avec les extensions suivantes sont permis : %extensions.","Autocomplete popup":"Popup d\u0027auto-compl\u00e9tion","Searching for matches...":"Recherche de correspondances...","Click update to save the configuration":"Cliquer sur \u0022Mettre \u00e0 jour\u0022 pour enregistrer la configuration","Show description":"Afficher la description","Hide description":"Masquer la description","@label: @value":"@label: @value","Using defaults":"Utiliser les param\u00e8tres par d\u00e9faut.","Ignored from settings":"Ignor\u00e9 volontairement","Automatic alias":"Alias automatique","Available tokens":"Jetons (tokens) disponibles","Insert this token into your form":"Ins\u00e9rer ce jeton (\u003Cem\u003Etoken\u003C\/em\u003E) dans votre formulaire","First click a text field to insert your tokens into.":"Cliquez d\u0027abord sur un champ de texte pour ins\u00e9rer vos jetons (\u003Cem\u003Etokens\u003C\/em\u003E) dans celui -ci.","Loading token browser...":"Chargement de l\u0027explorateur de jetons...","Remove group":"Supprimer le groupe","Apply (all displays)":"Appliquer (tous les affichages)","Apply (this display)":"Appliquer (cet affichage)","Revert to default":"R\u00e9tablir par d\u00e9faut","1 day":"1 jour","Inclusion: @value":"Inclusion : @value","Priority: @value":"Priorit\u00e9 : @value","1 week":"1 semaine","Translatable":"Traduisible","Not translatable":"Intraduisible","Restricted to certain languages":"Restreint \u00e0 certaines langues","No flags":"Aucun flag","List additional actions":"Lister les actions suppl\u00e9mentaires","-Close all-":"-Tout fermer-","-Open all-":"-Tout ouvrir-","No redirects":"Aucune redirection","Plus de filtre":"Plus de filtres","Moins de filtre":"Moins de filtres","1 hour":"@count heure","@count months":"@count mois","@count days":"@count jours","@count hours":"@count heures","@count min":"@count min","@count sec":"@count sec","@count years":"@count ann\u00e9es","1 sec":"@count sec","1 min":"@count min","The response failed verification so will not be processed.":"La v\u00e9rification de la r\u00e9ponse \u00e0 \u00e9chou\u00e9e, elle ne sera pas trait\u00e9e.","The callback URL is not local and not trusted: !url":"L\u0027URL de retour n\u0027est pas locale et n\u0027est pas de confiance : !url","CustomMessage: !customMessage":"Message personalis\u00e9 : !customMessage","Downloads":"T\u00e9l\u00e9chargements","Site search":"Recherche du site","On by default with opt out":"Activ\u00e9 par d\u00e9faut avec le refus du suivi","Off by default with opt in":"D\u00e9sactiv\u00e9 par d\u00e9faut avec l\u0027acceptation du suivi","Not tracked":"Non suivi","One domain with multiple subdomains":"Un domaine avec plusieurs sous-domaines","Multiple top-level domains":"Plusieurs domaines de premier niveau","All pages with exceptions":"Toutes les pages avec exceptions","Excepted: @roles":"Except\u00e9 : @roles","A single domain":"Un seul domaine","Universal web tracking opt-out":"Refus global du suivi sur le web","No privacy":"Pas de confidentialit\u00e9","@items enabled":"@items activ\u00e9(s)","Outbound links":"Liens sortants","Mailto links":"Liens mailto","AdSense ads":"Annonces AdSense","Anonymize IP":"Rendre l\u0027IP anonyme","You can\u0027t drop a resource of type %type in this field":"Vous ne pouvez pas d\u00e9poser une ressource du type %type dans ce champ","@count weeks":"@count semaines","1 unmapped":"1 non-mapp\u00e9","@count unmapped":"@count non-mapp\u00e9s","1 year":"@count ann\u00e9e","1 month":"@count mois","@count year from now":"@count ann\u00e9e \u00e0 partir de maintenant","@count years from now":"@count ann\u00e9es \u00e0 partir de maintenant","resultats":"r\u00e9sultats"}} };
;/*})'"*/
;/*})'"*/


}
/*
     FILE ARCHIVED ON 08:46:36 May 15, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:15:58 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 502.703
  exclusion.robots: 0.206
  exclusion.robots.policy: 0.191
  cdx.remote: 0.128
  esindex: 0.014
  LoadShardBlock: 70.303 (3)
  PetaboxLoader3.datanode: 118.681 (5)
  CDXLines.iter: 28.594 (3)
  PetaboxLoader3.resolve: 68.67 (3)
  load_resource: 156.165 (2)
*/