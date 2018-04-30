/* ====================================
                Preloader
/* ==================================*/
$(window).on("load", function () {
    $("#status").delay(200).fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

/* ====================================
                Slider
/* ==================================*/
$(".carousel").carousel({
    interval: 5000,
    keyboard: true,
    pause: false,
    wrap: true
});

/* ====================================
                Navigation
/* ==================================*/

// Show and Hide White Navigation

$(function () {
    // Show/Hide On Page Load
    showHideNav();

    $(window).scroll(function () {
        // Show/Hide On Scroll
        showHideNav();
    });
});

function showHideNav() {
    if ($(window).scrollTop() > 50) {
        // Show White Nav
        $("nav").addClass("white-nav");
        // Show Back To Top Button
        //        $("#back-to-top").fadeIn();
    } else {
        // Hide White Nav
        $("nav").removeClass("white-nav");
        // Hide Back To Top Button
        //        $("#back-to-top").fadeOut();
    }
}

/* ====================================
            About Me - Accordion
/* ==================================*/
$(function () {
    $('.card-header h5').click(function () {
        $(this).parent().toggleClass('header-active');
    });
});

/* ====================================
                Progress Bars
/* ==================================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});