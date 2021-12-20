$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        easing: 'easy',

    });
});

$(document).ready(function() {
    $('.step-two__slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        infinite: true,
        easing: 'easy',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        variableWidth: true,

    });
});