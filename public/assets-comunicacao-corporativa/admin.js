var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
jQuery(document).ready(function($) {
    // Custom Tabs
    function htmega_admin_tabs( $tabmenus, $tabpane ){
        $tabmenus.on('click', 'a', function(e){
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $this.addClass('httabactive').parent().siblings().children('a').removeClass('httabactive');
            $( $tabpane + $target ).addClass('httabactive').siblings().removeClass('httabactive');
        });
    }
    htmega_admin_tabs( $(".htmega-admin-tabs"), '.htmega-admin-tab-pane' );

    // Toggle Element
    function htmega_admin_toggle( $button, $area_element ){
        $button.on('click', function() {
            var inputCheckbox = $area_element.find('.htmega_table_row input[type="checkbox"]');
            if(inputCheckbox.prop("checked") === true){
                inputCheckbox.prop('checked', false)
            } else {
                inputCheckbox.prop('checked', true)
            }
        });
    }
    htmega_admin_toggle( $(".htmega-open-element-toggle"), $("#htmega_element_tabs") );
    htmega_admin_toggle( $(".htmega-open-element-toggle"), $("#htmega_thirdparty_element_tabs") );

   // facebook access token clear function
    $("#htmegaopt-admin-panel").on('click','.htmega-fb-clear-cache-btn', function(e) {
        var siteURL = site_url_data.site_url; // localize data
        e.preventDefault();
        $.ajax({
            url: siteURL+"/wp-admin/admin-ajax.php",
            data:{action:'my_delete_transient_action',security: HTMEGAA.admin_ajax_nonce},// form data
            method : 'POST',
            success:function(data){
                $(".htmega-admin-notify").html( "Cache has been cleared");
            }
        });
    });

// Coupon code copy function
// const couponButton = document.querySelector(".htoption-coupon-btn");
// const couponText = document.querySelector(".htoption-coupon-text");
//     couponButton.addEventListener("click", () => {
//         let textValue = couponText.value;
//         navigator.clipboard.writeText(textValue);
//         couponButton.classList.remove("htoption-btn-copy-status-copy");
//         couponButton.classList.add("htoption-btn-copy-status-copied");
//         setTimeout(() => {
//             couponButton.classList.remove("htoption-btn-copy-status-copied");
//             couponButton.classList.add("htoption-btn-copy-status-copy");
//         }, 2000);
//     });

// Send ajax request for newsletter subscription.
$( document ).on( 'click', '.htmega-admin-subscribe-form button[type="submit"]', function( e ) {

    e.preventDefault();

    let button = $( this ),
        form = button.closest( 'form' ),
        email = form.find( 'input[type="email"]' ).val(),
        buttonText = form.attr( 'data-htmega-button-text' ),
        processingText = form.attr( 'data-htmega-processing-text' ),
        completedText = form.attr( 'data-htmega-completed-text' ),
        ajaxErrorText = form.attr( 'data-htmega-ajax-error-text' ),
        statusWrap = form.closest( '.htmega-admin-subscribe-wrapper' ).find( '.htmega-subscribe-status' );

    $.ajax( {
        type: 'POST',
        url: ajaxurl,
        data: {
            action: 'htmega_newsletter_subscribe',
            email: email,
            security: HTMEGAA.admin_ajax_nonce,
        },
        beforeSend: function() {
            button.html( processingText );
            form.addClass( 'htmega-admin-subscribe-processing' );
        },
        success: function( response ) {
            if ( ! response ) {
                form.removeClass( 'htmega-admin-subscribe-processing' );
                return;
            }

            if ( 'string' === typeof response ) {
                response = JSON.parse( response );
            }


            let resStatus = ( response.hasOwnProperty( 'status' ) ? response.status : 'error' ),
                resMessage = ( response.hasOwnProperty( 'message' ) ? response.message : ajaxErrorText );

            if ( 'success' === resStatus ) {
                button.html( completedText );
                form.addClass( 'htmega-admin-subscribe-success' );
                form.removeClass( 'htmega-admin-subscribe-error' );
            } else {
                button.html( buttonText );
                form.addClass( 'htmega-admin-subscribe-error' );
                form.removeClass( 'htmega-admin-subscribe-success' );
            }

            statusWrap.html( resMessage );
            form.removeClass( 'htmega-admin-subscribe-processing' );
        },
        error: function() {
            button.html( buttonText );
            statusWrap.html( ajaxErrorText );
            form.removeClass( 'htmega-admin-subscribe-processing' );
        },
    });
});

    // Footer Sticky Save Button
    var footerSaveStickyToggler = function () {
        // Footer Sticky Save Button
        var $adminHeaderArea  = $('.htmega-navigation-wrapper'),
            $stickyFooterArea = $('.htmega-opt-footer');
        if ( $stickyFooterArea.length <= 0 || $adminHeaderArea.length <= 0 ) return;
        var totalOffset = $adminHeaderArea.offset().top + $adminHeaderArea.outerHeight();
        var windowScroll    = $(window).scrollTop(),
            windowHeight    = $(window).height(),
            documentHeight  = $(document).height();


        if (windowHeight <= documentHeight) {
            $stickyFooterArea.addClass('htmega-admin-sticky');
        } else if (totalOffset > windowScroll && windowHeight > documentHeight) {
            $stickyFooterArea.removeClass('htmega-admin-sticky');
        }
    };
    $(window).on("scroll",footerSaveStickyToggler);
    //$(window).scroll(footerSaveStickyToggler);
    $(".htmega-navigation-menu li a").on('click', function() {
        $(window).scroll(footerSaveStickyToggler);
    });

});
}

/*
     FILE ARCHIVED ON 06:49:33 May 27, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:46:47 Mar 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 9.303
  load_resource: 112.305
  PetaboxLoader3.resolve: 54.118
  PetaboxLoader3.datanode: 17.471
*/