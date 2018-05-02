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
        $("#back-to-top").fadeIn();
        // Changing the color of menu icon toggler
        $(".fa-navicon").addClass("text-dark");
    } else {
        // Hide White Nav
        $("nav").removeClass("white-nav");
        // Hide Back To Top Button
        $("#back-to-top").fadeOut();
        // Changing the color of menu icon toggler
        $(".fa-navicon").removeClass("text-dark");
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
//$(function () {
//    $("#progress-elements").waypoint(function () {
//        $(".progress-bar").each(function () {
//            $(this).animate({
//                width: $(this).attr("aria-valuenow") + "%"
//            }, 2000);
//        });
//        this.destroy();
//    }, {
//        offset: 'bottom-in-view'
//    });
//});

$(function () {
    progress(1);
    progress(2);
    progress(3);
    progress(4);
});

// Function for animating single progress bar
function progress(idNumber) {
    var selectorId = "#progress-" + idNumber;
    var selectorClass = selectorId + " .progress-bar";
    $(selectorId).waypoint(function () {
        $(selectorClass).animate({
            width: $(selectorClass).attr("aria-valuenow") + "%"
        }, 2000);
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
}
/* ====================================
            Animation on Scroll
/* ==================================*/
$(function () {

    // WOW Initialization
    new WOW().init();
});
/* ====================================
            Smooth Scrolling
/* ==================================*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // Get Section Id 
        var dest = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(dest).offset().top - 20 // Getting an offset value of section
        }, 1250, "easeInOutExpo");
    });
});