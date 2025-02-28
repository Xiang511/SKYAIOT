// filepath: /C:/Users/USER/OneDrive/桌面/SKYAIOT/SKYAIOT/SKYAIOT/nuxt-app/plugins/owl-carousel.js
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

export default defineNuxtPlugin(() => {
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
});