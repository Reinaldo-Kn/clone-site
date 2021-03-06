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

(function( $ ){
    var currentlyPlaying = false;
    $(document).ready(function(){
        
        // Audio Player call
        $('.gumm-audio-player').bboxSoundPlayer();
        
        // Background Player call
		$('.bluebox-bg-player').bboxBgPlayer();
		
        // Countdown Timer
		$('.bbox-countdown-timer').bboxCountdownTimer();
		
		// Videos with poster image
		$('.video-wrap img, .video-container img').on('click', function(e){
		    if ($(this).data('video') === undefined) {
		        return;
		    }
		    var wrapper = $('<div class="embeddedVideoWrapper">');
		    var iFrame  = $('<iframe width="100%" height="100%" src="'+ $(this).attr('data-video') +'" frameborder="0"></iframe>');
		    
		    wrapper.css({
		        paddingBottom: 100/($(this).width()/$(this).height()) + '%'
		    });
		    wrapper.append(iFrame);
            $(this).replaceWith(wrapper);
		});


        // FORMULAITES PHOTOS BLEUETS
        $('#formulaire_bleuetsphotos form').on('submit', function() {

            var check = true;
            var checkText = "";

            // champs a verifier
            if(!$('#bleuets_nom').val()){
                check = false;
                checkText += "Merci de saisir votre nom.\n";
            }
            if(!$('#bleuets_prenom').val()){
                check = false;
                checkText += "Merci de saisir votre pr??nom.\n";
            }
            if($('#bleuets_mail').val() == "" || !isEmail($('#bleuets_mail').val())){
                check = false;
                checkText += "Merci de v??rfier votre email.\n";
            }


            var photo1 = $('#bleuets_photo1_fichier').val();
            if(
                photo1 != ""
                && photo1.lastIndexOf(".jpg")==-1
                && photo1.lastIndexOf(".JPG")==-1
                && photo1.lastIndexOf(".jpeg")==-1
                && photo1.lastIndexOf(".JPEG")==-1
                ) {
                check = false;
                checkText += "Photo #1 : merci d'envoyer un fichier JPG.\n";
            }
            if(photo1 != "" && $('#bleuets_photo1_titre').val() == ""){
                check = false;
                checkText += "Photo #1 : merci de donner un titre ?? votre photo.\n";
            }

            var photo2 = $('#bleuets_photo2_fichier').val();
            if(
                photo2 != ""
                && photo2.lastIndexOf(".jpg")==-1
                && photo2.lastIndexOf(".JPG")==-1
                && photo2.lastIndexOf(".jpeg")==-1
                && photo2.lastIndexOf(".JPEG")==-1
                ) {
                check = false;
                checkText += "Photo #2 : merci d'envoyer un fichier JPG.\n";
            }
            if(photo2 != "" && $('#bleuets_photo2_titre').val() == ""){
                check = false;
                checkText += "Photo #2 : merci de donner un titre ?? votre photo.\n";
            }

            var photo3 = $('#bleuets_photo3_fichier').val();
            if(
                photo3 != ""
                && photo3.lastIndexOf(".jpg")==-1
                && photo3.lastIndexOf(".JPG")==-1
                && photo3.lastIndexOf(".jpeg")==-1
                && photo3.lastIndexOf(".JPEG")==-1
                ) {
                check = false;
                checkText += "Photo #3 : merci d'envoyer un fichier JPG.\n";
            }
            if(photo3 != "" && $('#bleuets_photo3_titre').val() == ""){
                check = false;
                checkText += "Photo #3 : merci de donner un titre ?? votre photo.\n";
            }

            var photo4 = $('#bleuets_photo4_fichier').val();
            if(
                photo4 != ""
                && photo4.lastIndexOf(".jpg")==-1
                && photo4.lastIndexOf(".JPG")==-1
                && photo4.lastIndexOf(".jpeg")==-1
                && photo4.lastIndexOf(".JPEG")==-1
                ) {
                check = false;
                checkText += "Photo #4 : merci d'envoyer un fichier JPG.\n";
            }
            if(photo4 != "" && $('#bleuets_photo4_titre').val() == ""){
                check = false;
                checkText += "Photo #4 : merci de donner un titre ?? votre photo.\n";
            }

            var photo5 = $('#bleuets_photo5_fichier').val();
            if(
                photo5 != ""
                && photo5.lastIndexOf(".jpg")==-1
                && photo5.lastIndexOf(".JPG")==-1
                && photo5.lastIndexOf(".jpeg")==-1
                && photo5.lastIndexOf(".JPEG")==-1
                ) {
                check = false;
                checkText += "Photo #5 : merci d'envoyer un fichier JPG.\n";
            }
            if(photo5 != "" && $('#bleuets_photo5_titre').val() == ""){
                check = false;
                checkText += "Photo #5 : merci de donner un titre ?? votre photo.\n";
            }
        
            if(!photo1 && !photo2 && !photo3 && !photo4 && !photo5){
                check = false;
                checkText += "Merci d'envoyer au moins une photo.\n";
            }

            if(!check){
                alert(checkText);
                return false;
            }else{
                $('#formulaire_bleuetsphotos form .submit').hide('400', function() { 
                    $('#formulaire_bleuetsphotos form .encours').show();
                });
                return true;
            }

        });
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
        
        // ========= //
        // BBOX SLIDER //
        // ========= //
        
        $('.bluebox-slider').each(function(i, ele) {
            var sliderContainer = $(ele).children('.swiper-container');
            sliderContainer.css({
                height: $(ele).height(),
                width: $(ele).width(),
                overflow: 'hidden'
            });

            sliderContainer.children('.swiper-wrapper').children('.swiper-slide').children().css('display', '');
            sliderContainer.swiper({
                speed: 500,
                loop: $(ele).data('loop'),
                autoplay: $(ele).data('autoplay'),
                slideshowSpeed: $(ele).data('slideshowSpeed'),
                onInit: function(swiper) {
                    var sliderWrapper = $(swiper.container).parent();
                    $(swiper.container).css({
                        height: '',
                        width: '',
                        overflow: ''
                    });

                    swiper.bbxPagination  = false;
                    swiper.bbxCaptions    = false;
                    if ($(ele).data('controlNav') !== undefined) {
                        swiper.bbxPagination = $(ele).find($(ele).data('controlNav'));

                        swiper.bbxPagination.children().on('click', function(e){
                            e.preventDefault();
                            swiper.swipeTo($(this).index());
                        });
                    }
                    if ($(ele).data('directionNav') !== undefined) {
                        swiper.bbxDirectionNav = $(ele).find($(ele).data('directionNav'));
                        swiper.bbxDirectionNav.children().on('click', function(e) {
                            e.preventDefault();
                            if ($(this).hasClass('prev')) {
                                swiper.swipePrev();
                            } else {
                                swiper.swipeNext();
                            }
                        });
                    }
                    if ($(ele).data('captionContainer') !== undefined) {
                        swiper.bbxCaptions = $(ele).find($(ele).data('captionContainer'));
                    }
                },
                onSlideChangeEnd: function(swiper) {
                    if (swiper.bbxCaptions !== false) {
                        swiper.bbxCaptions.children().removeClass('current-slide-caption').eq(swiper.activeLoopIndex).addClass('current-slide-caption');
                    }
                    if (swiper.bbxPagination !== false) {
                        swiper.bbxPagination.children().removeClass('current').eq(swiper.activeLoopIndex).addClass('current');
                    }
                },
                onTouchStart: function(swiper) {
                    if (swiper.bbxCaptions !== false) {
                        swiper.bbxCaptions.children().eq(swiper.activeLoopIndex).addClass('fadingaway-slide-caption');
                    }
                },
                onTouchEnd: function(swiper) {
                    if (swiper.bbxCaptions !== false) {
                        swiper.bbxCaptions.children('.fadingaway-slide-caption').removeClass('fadingaway-slide-caption');
                    }
                }
            });

        });




        //AM
        // Change title type, overlay closing speed
        $(".fancybox").fancybox({
            helpers: {
                title : {
                    type : 'outside'
                },
                overlay : {
                    speedOut : 0
                }
            },
            beforeLoad: function() {
                 caption = $(this.element).attr('caption');
                 if(caption)
                    this.title = caption;
            },
            beforeShow: function () {
                if (this.title) {
                    this.title += '<br />';
                }

                // pin it button
                this.title = '<a href="//web.archive.org/web/20190108003220/http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&media=' + encodeURIComponent(this.href) + '&description=' + encodeURIComponent('Aisne 14-18 Le centenaire - '+this.title.substr(0, this.title.indexOf('<'))) + '" data-pin-do="buttonPin" data-pin-config="none" data-pin-color="white" target="_blank"><img src="//web.archive.org/web/20190108003220/http://assets.pinterest.com/images/pidgets/pinit_fg_en_rect_white_20.png" style="float:right" /></a>' + this.title;

            }
        });


        //AM
        // seule facon trouvee pour allumer l'item principal du menu dont un membre est actif... :(
        $('nav .item.on').parents('.subnav').addClass('on');



        //AM font size +
        $('a.increasefontsize').click(function() 
        {
            var max=24;
            $(".blog-post-single p, h2.post-heading").each(function() {
                curSize = parseInt( $( this ).css('font-size'));
                if(curSize<=max) {
                    newSize = curSize + 2;
                     $( this ).css('font-size', newSize);
                }
            });
            return false;
        });
        
        //AM font size -
        $('a.decreasefontsize').click(function() 
        {
            var min=8;
            $(".blog-post-single p, h2.post-heading").each(function() {
                curSize = parseInt( $( this ).css('font-size'));
                if(curSize>=min) {
                    newSize = curSize - 2;
                     $( this ).css('font-size', newSize);
                }
            });
            return false;
        });

        //AM liens ouvrants :(
        $('a.spip_out,a.spip_url,a.spip_documents').attr("target", "_blank");

        //AM manifestations
        $('.bloc-gris img').each(function(index, el) {
            $(el).after('<span class="title-clair">'+$(el).attr('title')+'</span>');
        });
        
        
        //royalslider
        $('#gallery-rs').royalSlider({
            fullscreen: {
                enabled: true,
                nativeFS: true
            },
            controlNavigation: 'thumbnails',
            autoScaleSlider: true, 
            autoScaleSliderWidth: 600,     
            autoScaleSliderHeight: 500,
            loop: false,
            imageScaleMode: 'fit-if-smaller',
            navigateByClick: true,
            numImagesToPreload:2,
            arrowsNav:true,
            arrowsNavAutoHide: true,
            arrowsNavHideOnTouch: true,
            keyboardNavEnabled: true,
            fadeinLoadedSlide: true,
            globalCaption: false,
            globalCaptionInside: false,
            thumbs: {
                appendSpan: true,
                firstMargin: true,
                paddingBottom: 4
            }
        });

    });
    
	// ================= //
	// BBOX SOUND PLAYER //
	// ================= //
    
    $.bboxSoundPlayer = function(options, callback, element) {
        this.element = $(element);
        this.__construct(options, callback);
    }

    $.bboxSoundPlayer.settings = {
        
    }

    $.bboxSoundPlayer.prototype = {
        playlist: [],
        currentPlaylistIndex: 0,
        __construct:function(options, callback) {
            this.options = $.extend(true, {}, $.bboxSoundPlayer.settings, this.element.data(), options);
            
            this.player         = this.element;
            this.playerId       = uniqid('bboxaup_');
            this.playerElement  = $('<div class="gumm-audio-player" id="' + this.playerId + '">');
            this.descriptionEle = this.element.find('.description');
            this.imageEle       = this.element.find('.track-image');
            
            this.setupThePlaylist();
            
            this.player.attr('id', this.playerId + '_controls');

            this.buttonPlay  = this.player.find('a.button-play');
            this.buttonPause = this.player.find('a.button-pause');
            this.playBar     = this.player.find('.track-progress').children('span');
            this.buttonNext  = this.player.find('a.player-button.forward');
            this.buttonPrev  = this.player.find('a.player-button.backward');

            if (this.player.data('playPauseButtonMode') === 'toggle') {
                this.buttonPause = this.buttonPlay.clone();
                this.buttonPause.addClass('button-pause').removeClass('button-play');
                this.buttonPause.find('i').removeClass('icon-play').addClass('icon-pause');
                this.buttonPause.css('display', 'none');
                this.buttonPlay.after(this.buttonPause);

            }

            this.playerElement.data('gummAudioPlayerControls', {
                buttonPause: this.buttonPause,
                buttonPlay: this.buttonPlay,
                container: this.player
            });

            var _self = this;
            this.playerElement.jPlayer({
                ready: function (event) {
                    $(this).jPlayer("setMedia", {
                        mp3: _self.player.data('src')
                    });
                },
                swfPath: './jplayer',
                // supplied: "mp3",
                wmode: "transparent",
                smoothPlayBar: true,
                keyEnabled: true,
                cssSelectorAncestor: '#' + this.playerId + '_controls',
                cssSelector: {
                    seekBar: '.track-progress',
                    mute: '.button-mute',
                    unmute: '.button-unmute',
                    volumeBar: '.volume-bar',
                    volumeBarValue: '.volume-bar > span',
                },
            });
            
            this.bindListeners();
        },
        setupThePlaylist: function() {
            var _self = this;
            var playlistContainer = $(this.element).data('playlistContainer');
            if (playlistContainer !== undefined) {
                playlistContainer = this.element.find(playlistContainer);
                playlistContainer.children().each(function(i, ele) {
                    var _img = $('<img src="' + $(ele).data('imgSrc') +'">');
                    _img.load(function(e){});
                    
                    _self.playlist.push({
                        src: $(ele).data('src'),
                        desc: $(ele).html(),
                        img: _img
                    });
                });
            }
        },
        playNext: function() {
            var nextIndex = this.currentPlaylistIndex + 1;
            
            if (nextIndex >= this.playlist.length) {
                nextIndex = 0;
            }
            
            this.playForPlaylistIndex(nextIndex);
        },
        playPrev: function() {
            var nextIndex = this.currentPlaylistIndex - 1;
            
            if (nextIndex < 0) {
                nextIndex = this.playlist.length - 1;
            }
            
            this.playForPlaylistIndex(nextIndex);
        },
        playForPlaylistIndex: function(index) {
            var playlistItem = this.playlist[index];
            
            this.descriptionEle.html(playlistItem.desc);
            this.imageEle.html(playlistItem.img);
            
            this.currentPlaylistIndex = index;
            
            this.playerElement.jPlayer('clearMedia');
            this.playerElement.jPlayer('setMedia', {
                mp3: playlistItem.src
            });
            
            this.play();
        },
        play: function() {
            if (currentlyPlaying !== false) {
                currentlyPlaying.jPlayer('pause');
                currentlyPlaying.data('gummAudioPlayerControls').buttonPause.hide();
                currentlyPlaying.data('gummAudioPlayerControls').buttonPlay.show();
                currentlyPlaying.data('gummAudioPlayerControls').container.removeClass('current');
            }
            currentlyPlaying = this.playerElement;
            currentlyPlaying.jPlayer('play');

            this.player.addClass('current');
            this.buttonPlay.hide();
            this.buttonPause.show();
        },
        pause: function() {
            currentlyPlaying.jPlayer('pause');

            this.buttonPlay.show();
            this.buttonPause.hide();
        },
        bindListeners: function() {
            var _self = this;
            this.buttonPlay.on('click', function(e){
                e.preventDefault();
                
                _self.play();
            });
            this.buttonPause.on('click', function(e){
                e.preventDefault();

                _self.pause();
            });

            this.playerElement.on($.jPlayer.event.timeupdate, function(e){
                _self.playBar.css({
                    width: e.jPlayer.status.currentPercentAbsolute + '%'
                });
            });

            this.buttonNext.on('click', function(e){
                e.preventDefault();
                
                _self.playNext();
            });
            this.buttonPrev.on('click', function(e){
                e.preventDefault();
                
                _self.playPrev();
            });
        }
    }
    
    $.fn.bboxSoundPlayer = function bboxSoundPlayerFn(options, callback) {
        this.each(function () {
            var instance = $.data(this, 'bboxSoundPlayer');
            if (instance) {
                // update options of current instance
                // instance.update(options);
            } else {
                $.data(this, 'bboxSoundPlayer', new $.bboxSoundPlayer(options, callback, this));
            }

        });
        return this;
    }
    
    // ============== //
    // BBOX BG PLAYER //
    // ============== //
    
    $.bboxBgPlayer = function(options, callback, element) {
        this.element = $(element);
        this.__construct(options, callback);
    }
    
    $.bboxBgPlayer.settings = {
        loop: true,
        autoplay: true,
        mute: true,
        slideshowSpeed: 5000
    }
    
    $.bboxBgPlayer.prototype = {
        currentIndex: 0,
        current : '',
        volumeIconClasses: ['icon-volume-off', 'icon-volume-down', 'icon-volume-up'],
        currentVolume: 0,
        hasImages: false,
        hasVideo: false,
        imagesContainer: $('<div id="bbox-bg-player-images-wrap">'),
        mediaTypesMap:{},
        slideshowTimeout: null,
        slideshowTimeoutInnerTimeout: null,
        inSlideshow: false,
        __construct: function(options, callback) {
            if (this.isTouch) {
                return;
            }
            this.options = $.extend(true, {}, $.bboxBgPlayer.settings, this.element.data(), options);
            
            this.isTouch = Modernizr.touch; 
            
            this.bigVideo = new $.BigVideo({
                forceAutoplay: this.isTouch,
                controls: false,
                autoplay: this.options.autoplay
    		});
    		this.bigVideo.init();
    		
    		this.player = this.bigVideo.getPlayer();
    		this.playlist = $(this.element).data('playlist').split(',');
    		
            this.current = this.playlist[this.currentIndex];
            
            this.buttonBack    = $(this.element).find('.player-button.backward');
            this.buttonPlay    = $(this.element).find('.player-button.play');
            this.buttonPause   = this.buttonPlay.clone();
            this.buttonFrwrd   = $(this.element).find('.player-button.forward');
            this.buttonVolume  = $(this.element).find('.player-button.volume');
            
            this.buttonPause.removeClass('play').addClass('pause').hide().find('i').removeClass('icon-play').addClass('icon-pause');
            this.buttonPlay.after(this.buttonPause);
            

                
            this.setupImagesForPlaylist();
            if (this.isImage(this.currentIndex)) {
                this.imagesContainer.children('.index-' + this.currentIndex).addClass('current');
                if (this.options.autoplay) {
                    this.slideshowStart();
                }
            } else {
                this.bigVideo.show(this.current, {
                    ambient: false,
                    doLoop: this.options.loop
                });
            }
            
            if (!this.options.mute) {
                this.currentVolume = 0.8;
            }
            
            this.bindListeners();
        },
        slideshowStart: function() {
            var _self = this;
            this.inSlideshow = true;alert("aa");
            this.slideshowTimeout = setTimeout(function(){
                _self.playNext();
                _self.slideshowTimeoutInnerTimeout = _self.slideshowStart();
            }, this.options.slideshowSpeed);
        },
        slideshowEnd: function() {
            this.inSlideshow = false;
            clearTimeout(this.slideshowTimeout);
            clearTimeout(this.slideshowTimeoutInnerTimeout);
        },
        play: function() {
            
            this.buttonPlay.hide();
            this.buttonPause.show();
            
            if (!this.isImage(this.currentIndex) && this.player.paused() ) {
                this.player.play();
            } else if (this.isImage(this.currentIndex) && !this.inSlideshow) {
                this.slideshowStart();
            }
        },
        pause: function() {
            this.buttonPlay.show();
            this.buttonPause.hide();
            
            if (!this.isImage(this.currentIndex) && !this.player.paused()) {
                this.player.pause();
            } else if (this.isImage(this.currentIndex) && this.inSlideshow) {
                this.slideshowEnd();
            }
        },
        mute: function() {
            if (this.currentVolume > 0) {
                this.changeVolume(0);
            } else {
                this.changeVolume(0.8);
            }
        },
        changeVolume: function(val) {
            var volIconClassIndex = 0;
            if (val <= 0.4 && val > 0) {
                volIconClassIndex = 1;
            } else if (val > 0.4 ) {
                volIconClassIndex = 2;
            }
            
            this.currentVolume = val;
            this.buttonVolume.find('i').removeClass('icon-volume-off icon-volume-down icon-volume-up').addClass(this.volumeIconClasses[volIconClassIndex]);
            
            this.player.volume(val);
        },
        playNext: function() {
            var nextIndex = this.currentIndex + 1;
            if ((nextIndex+1) > this.playlist.length) {
                nextIndex = 0;
            }
            
            this.playForIndex(nextIndex);
        },
        playPrev: function() {
            var nextIndex = this.currentIndex - 1;
            if (nextIndex < 0) {
                nextIndex = this.playlist.length - 1;
            }
            
            this.playForIndex(nextIndex);
        },
        playForIndex: function(index, options) {
            this.currentIndex = index;
            this.current = this.playlist[this.currentIndex];

            if (this.isImage(index)) {
                this.imagesContainer.children().removeClass('current');
                this.imagesContainer.children('.index-' + index).addClass('current');
            } else {
                this.player.options({
                    autoplay: true
                });
                this.bigVideo.show(this.current, {
                    ambient: false,
                    doLoop: this.options.loop
                });
                this.play();
            }
        },
        isImage: function(index) {
            return this.mediaTypesMap[index] === 'image';
        },
        setupImagesForPlaylist: function() {
            var _self = this;
            $.each(this.playlist, function(i, url) {
                var ext = url.substring(url.lastIndexOf('.') + 1);
                if (ext === 'jpg' || ext === 'gif' || ext === 'png') {
                    var _img = $('<img src="' + url +'">');
                    _img.load(function(e){
                        
                        
                    });
                    
                    _self.mediaTypesMap[i] = 'image';
                    _self.hasImages = true;
                    var theImageItem = $('<div class="bbox-bg-player-image index-' + i +'">');
                    theImageItem.css({
                        backgroundImage: "url('" + url + "')"
                    });
                    
                    _self.imagesContainer.append(theImageItem);
                } else {
                    _self.hasVideo = true;
                    _self.mediaTypesMap[i] = 'video';
                }
            });
            
            if (this.hasImages) {
                $('#big-video-wrap').append(this.imagesContainer);
            }
            if (!this.hasVideo) {
                this.buttonVolume.hide();
            }
        },
        bindListeners: function() {
            var _self = this;
            this.buttonPlay.on('click', function(e){
                e.preventDefault();
                
                _self.play();
            });
            this.buttonPause.on('click', function(e){
                e.preventDefault();
                
                _self.pause();
            });
            this.buttonVolume.on('click', function(e){
                e.preventDefault();
                
                _self.mute();
            });
            this.buttonFrwrd.on('click', function(e){
                e.preventDefault();
                
                _self.playNext();
            });
            this.buttonBack.on('click', function(e){
                e.preventDefault();
                
                _self.playPrev();
            });
            
            this.player.ready(function(){
                $('#big-video-vid').css('visibility', 'visible');
                if (_self.options.autoplay) {
                    _self.play();
                } else {
                    _self.pause();
                }

                if (_self.options.mute) {
                    _self.changeVolume(0);
                } else {
                    _self.cangeVolume(0.8);
                }
            });
        },
    }
    
    $.fn.bboxBgPlayer = function bboxBgPlayerFn(options, callback) {
        this.each(function () {
            var instance = $.data(this, 'bboxBgPlayer');
            if (instance) {
                // update options of current instance
                // instance.update(options);
            } else {
                $.data(this, 'bboxBgPlayer', new $.bboxBgPlayer(options, callback, this));
            }
            
        });
        return this;
    }
    
    // BBOX COUNTDOWN TIMER
    $.bboxCountdownTimer = function(options, callback, element) {
        this.element = $(element);
        this.__construct(options, callback);
    }
    
    $.bboxCountdownTimer.settings = {
        // loop: true,
        // autoplay: true,
        // mute: true,
        // slideshowSpeed: 5000
    }
    
    $.bboxCountdownTimer.prototype = {
        // data: {
        //     day: {
        //         label: '',
        //         value: 0
        //     },
        //     hour: {
        //         label: '',
        //         value: 0
        //     },
        //     minute: {
        //         label: '',
        //         value: 0
        //     },
        //     second: {
        //         label: '',
        //         value: 0
        //     }
        // },
        intervalHolder: null,
        __construct: function(options, callback) {
            var _self = this;
            this.options = $.extend(true, {}, $.bboxCountdownTimer.settings, this.element.data(), options);
            
            this.cellsContainer = this.element.find('.countdown');
            
            this.dayCell        = this.element.find('.cell.counter-days-wrapper');
            this.hourCell       = this.element.find('.cell.counter-hours-wrapper');
            this.minuteCell     = this.element.find('.cell.counter-minutes-wrapper');
            this.secondCell     = this.element.find('.cell.counter-seconds-wrapper');
            
            if (this.totalSecondsLeft() > 0) {
                this.intervalHolder = setInterval(function() {
                    _self.count();
                    if (_self.totalSecondsLeft() <= 0) {
                        clearTimeout(_self.intervalHolder);
                    }
                }, 1000);
            }
            
        },
        count: function() {
            var seconds = this.value('second');
            if (seconds === 0) {
                seconds = 59;
                this.decreaseMinute();
            } else {
                --seconds;
                if (seconds < 0) {
                    seconds = 0;
                }
            }

            this.value('second', seconds);
        },
        decreaseMinute: function() {
            var minutes = this.value('minute');
            if (minutes === 0) {
                minutes = 59;
                this.decreaseHour();
            } else {
                --minutes;
                if (minutes < 0) {
                    minutes = 0;
                }
            }

            this.value('minute', minutes);
        },
        decreaseHour: function() {
            var hours = this.value('hour');
            if (hours === 0 && this.value('day') > 0) {
                hours = 23;
                this.decreaseDay();
            } else {
                --hours;
                if (hours < 0) {
                    hours = 0;
                }
            }

            this.value('hour', hours);
        },
        decreaseDay: function() {
            var days = this.value('day');
            --days;
            if (days < 0) {
                days = 0;
            }
            
            this.value('day', days);
        },
        value: function(type, val) {
            switch (type) {
             case 'day':
                if (val !== undefined) {
                    this.dayCell.children('strong').eq(0).text(val);
                    this.label('day', val);
                } else {
                    return parseInt(this.dayCell.children('strong').eq(0).text());
                }
                break;
             case 'hour':
                if (val !== undefined) {
                    this.hourCell.children('strong').eq(0).text(val);
                    this.label('hour', val);
                } else {
                    return parseInt(this.hourCell.children('strong').eq(0).text());
                }
                break;
             case 'minute':
                if (val !== undefined) {
                    this.minuteCell.children('strong').eq(0).text(val);
                    this.label('minute', val);
                } else {
                    return parseInt(this.minuteCell.children('strong').eq(0).text());
                }
                break;
             case 'second':
                if (val !== undefined) {
                    this.secondCell.children('strong').eq(0).text(val);
                    this.label('second', val);
                } else {
                    return parseInt(this.secondCell.children('strong').eq(0).text());
                }
                break;
            }
        },
        label: function(type, val) {
            switch (type) {
             case 'day':
                if (val !== undefined) {
                    var theEle = this.hourCell.children('span').eq(0);
                    if (val !== undefined) {
                        var theLabel = this.hourCell.data('plural');
                        if (val == 1) {
                            theLabel = this.hourCell.data('singular');
                        }
                        this.hourCell.children('span').eq(0).text(theLabel);
                    }
                } else {
                    return this.dayCell.children('span').eq(1).text();
                }
                break;
             case 'hour':
                if (val !== undefined) {
                    var theEle = this.hourCell.children('span').eq(0);
                    if (val !== undefined) {
                        var theLabel = this.hourCell.data('plural');
                        if (val == 1) {
                            theLabel = this.hourCell.data('singular');
                        }
                        this.hourCell.children('span').eq(0).text(theLabel);
                    } else {
                        return this.hourCell.children('span').eq(0).text();
                    }
                } else {
                    return this.hourCell.children('span').eq(1).text();
                }
                break;
             case 'minute':
                if (val !== undefined) {
                    var theEle = this.minuteCell.children('span').eq(0);
                    if (val !== undefined) {
                        var theLabel = this.minuteCell.data('plural');
                        if (val == 1) {
                            theLabel = this.minuteCell.data('singular');
                        }
                        this.minuteCell.children('span').eq(0).text(theLabel);
                    } else {
                        return this.minuteCell.children('span').eq(0).text();
                    }
                } else {
                    return this.minuteCell.children('span').eq(0).text();
                }
                break;
             case 'second':
                var theEle = this.secondCell.children('span').eq(0);
                if (val !== undefined) {
                    var theLabel = this.secondCell.data('plural');
                    if (val == 1) {
                        theLabel = this.secondCell.data('singular');
                    }
                    this.secondCell.children('span').eq(0).text(theLabel);
                } else {
                    return this.secondCell.children('span').eq(0).text();
                }
                break;
            }
        },
        totalSecondsLeft: function() {
            return this.value('second') + this.value('minute')*60 + this.value('hour')*60*60 + this.value('day')*60*60*24;
        }
    }
    
    $.fn.bboxCountdownTimer = function bboxCountdownTimerFn(options, callback) {
        this.each(function () {
            var instance = $.data(this, 'bboxCountdownTimer');
            if (instance) {
                // update options of current instance
                // instance.update(options);
            } else {
                $.data(this, 'bboxCountdownTimer', new $.bboxCountdownTimer(options, callback, this));
            }
            
        });
        return this;
    }



    
})( jQuery );




function uniqid (prefix, more_entropy) {
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +    revised by: Kankrelune (http://www.webfaktory.info/)
  // %        note 1: Uses an internal counter (in php_js global) to avoid collision
  // *     example 1: uniqid();
  // *     returns 1: 'a30285b160c14'
  // *     example 2: uniqid('foo');
  // *     returns 2: 'fooa30285b1cd361'
  // *     example 3: uniqid('bar', true);
  // *     returns 3: 'bara20285b23dfd1.31879087'
  if (typeof prefix === 'undefined') {
    prefix = "";
  }

  var retId;
  var formatSeed = function (seed, reqWidth) {
    seed = parseInt(seed, 10).toString(16); // to hex str
    if (reqWidth < seed.length) { // so long we split
      return seed.slice(seed.length - reqWidth);
    }
    if (reqWidth > seed.length) { // so short we pad
      return Array(1 + (reqWidth - seed.length)).join('0') + seed;
    }
    return seed;
  };

  // BEGIN REDUNDANT
  if (!this.php_js) {
    this.php_js = {};
  }
  // END REDUNDANT
  if (!this.php_js.uniqidSeed) { // init seed with big random int
    this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
  }
  this.php_js.uniqidSeed++;

  retId = prefix; // start with prefix, add current milliseconds hex string
  retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
  retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
  if (more_entropy) {
    // for more entropy we add a float lower to 10
    retId += (Math.random() * 10).toFixed(8).toString();
  }

  return retId;
}

}
/*
     FILE ARCHIVED ON 00:32:20 Jan 08, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:38:13 Jun 08, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 172.398
  exclusion.robots: 0.098
  exclusion.robots.policy: 0.089
  cdx.remote: 0.073
  esindex: 0.011
  LoadShardBlock: 136.323 (3)
  PetaboxLoader3.datanode: 153.005 (5)
  CDXLines.iter: 25.24 (3)
  PetaboxLoader3.resolve: 206.954 (3)
  load_resource: 272.52 (2)
*/