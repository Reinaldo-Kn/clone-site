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

$(document).ready(function() {

    // lorsque je soumets le formulaire
    $('#subscribeform').on('submit', function() {

    	var retourCheck = checksubscribeform();

    	if(retourCheck == true){
			var email = $('#subscribeemail').attr('value');  
	         // appel Ajax
	        $.ajax({
	            url: $(this).attr('action'), // le nom du fichier indiqué dans le formulaire
	            type: "POST", // la méthode indiquée dans le formulaire (get ou post)
	            data: $('#subscribeform').serialize(), // je sérialise les données (voir plus loin), ici les $_POST
	            dataType: "html",
	            success: function(data) { // je récupère la réponse du fichier PHP
	            	$('#subscribeformcontainer').hide();
	        		var response = $(data).filter('div.newsletter_iframe').find('p').html();
	        		//alert($(data).filter('div.newsletter_iframe').find('p').html());
	            	$('#subscriberesultcontainer').append(response); 
	                // j'affiche cette réponse
	                //$("#subscriberesultcontainer").$(data);
	            },
	            error: function(data) {
	            	alert("Désolé un problème est survenu lors de votre inscription, merci de contacter le webmaster.");
	            	$('#subscribeformcontainer').hide();
					// j'affiche cette réponse
	        		var response = $(data).filter('div.newsletter_iframe');
	            	$('#subscriberesultcontainer').append(response); 
	            }
	        });
    	}
	    return false; // j'empêche le navigateur de soumettre lui-même le formulaire
    });

	// verification des champs saisis
	function checksubscribeform() {

		var check = true;

		// champs a verifier
		if(!isEmail($('#subscribeemail').attr('value'))){
			check = false;
			alert("Merci de vérfier votre email.");
		}

		return check;

	}

	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

});

}
/*
     FILE ARCHIVED ON 10:20:52 May 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:38:35 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 61.499
  exclusion.robots: 0.085
  exclusion.robots.policy: 0.079
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 33.654 (3)
  PetaboxLoader3.datanode: 62.25 (5)
  CDXLines.iter: 14.884 (3)
  load_resource: 353.616 (2)
  PetaboxLoader3.resolve: 223.257 (2)
*/