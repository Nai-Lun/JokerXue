$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        speed: '1500ms',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        //autoplay
        autoplay: {
            delay: 2500,
        },
    })
    $('#hamburger').click(function(event) {
        $('.menu').slideToggle('slow');
    });
});