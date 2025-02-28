// Intelligent下拉式表單

$(".hide").click(function() {
    $(".hide2").toggle();
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
