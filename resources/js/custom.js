(function ($) {
    "use strict";

    var oneTradingCompany = {

        /* ============================================================ */
        /* Site Carousel Activation
        /* ============================================================ */
        siteCarousel: function(){
            var heroSlider = $('.hero-carousel');
            heroSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                nav: 1,
                autoplay: !1,
                autoplaySpeed: 800,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
            });
            var productSlider = $('.product-slider');
            productSlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                autoplay: 1,
                margin: 20,
                autoplaySpeed: 800,
                responsive : {
                    // breakpoint from 768 up
                    768 : {
                        items: 2,
                        dots: !1,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 3,
                        dots: !1,
                        nav: 1,
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 4,
                        dots: !1,
                        nav: 1,
                    }
                }
            });
            var productCategorySlider = $('.product-category-carousel');
            productCategorySlider.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                autoplay: 1,
                margin: 15,
                autoplaySpeed: 800,
                autoplayTimeout: 6000,
                responsive : {
                    // breakpoint from 768 up
                    768 : {
                        items: 2,
                        dots: 1,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 3,
                        dots: !1,
                        nav: 1,
                    }
                }
            });
            var $partnerSlider = $('.partner-carousel');
            $partnerSlider.owlCarousel({
                items: 2,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: !1,
                margin: 15,

                responsive : {
                    // breakpoint from 768 up
                    768 : {
                        items: 3,
                        nav: !1,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 4,
                        nav: 1,
                    },
                    // breakpoint from 1200 up
                    1200 : {
                        items: 5,
                        nav: 1,
                    }
                }
            });
            var storeFooterSlider = $('.footer-slider');
            storeFooterSlider.owlCarousel({
                items: 2,
                loop: !1,
                dots: !1,
                autoplay: !1,
                margin: 15,

                responsive : {
                    // breakpoint from 768 up
                    768 : {
                        items: 3,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 5,
                    },
                }
            });
           
            var $prodSingTthumbnail = $('.prod-sing-thumbnail');
            $prodSingTthumbnail.children().each( function( index ) {
                $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
            });
            $prodSingTthumbnail.owlCarousel({
                items: 3,
                autoplay: !1,
                loop: 1,
                nav: 1,
                margin: 20,
                mouseDrag: 1,
                dots: !1,
                center: true,

                responsive: {
                    // breakpoint from 768 up
                    768 : {
                        items: 4,
                    },
                }
	        })

            $('.prod-sing-thumbnail a').on('click', function(e) {
                e.preventDefault();
                var $href = $(this).attr('href');
                $('.prod-sing-thumbnail a').removeClass('active');
                $(this).addClass('active');
                $('.product-details-large .tab-pane').removeClass('active show');
                $('.product-details-large ' + $href).addClass('active show');
            })

            $(document).on('click', '.owl-item>div', function() {
                $prodSingTthumbnail.trigger('to.owl.carousel', $(this).data( 'position' ) );
            });


            $(".product-details-large").lightGallery({
                selector: '.lg-zoom',
                thumbnail: false,
            });

        },

        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.hamburger, .close-menu', '.mobile-menu');

            $('.mobile-menu ul li.item-has-submenu > a').on('click', function() {
                $('.mobile-menu ul li.item-has-submenu .submenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.submenu').length) {
                    if(!$(this).parent('li').children('.submenu').is(":visible")) { 
                        $(this).parent('li').children('.submenu').slideToggle();
                    }
                    return false; 
                }
            });

            var $submenuIndicator = $('.header-navigation li.item-has-submenu > a');
		    $submenuIndicator.append('<span class="sub-menu-indicator ms-1 float-end"><svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="12px" height="12px" viewBox="0 0 792 792" style="transform: rotate(90deg)"> <polygon points="580.802,369.604 580.802,369.604 211.198,0 184.802,26.396 554.405,396 184.802,765.604 211.198,792 607.198,396 "/> </svg></span>');
		
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fas fa-level-up-alt'></span></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },

        initializ: function() {
			oneTradingCompany.mobile_menu();
			oneTradingCompany.siteCarousel();
			oneTradingCompany.scroll_to_top();
			oneTradingCompany.background_image();
		}

    };
    $(function() {
		oneTradingCompany.initializ();
	});


})(jQuery);