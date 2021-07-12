$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true
    });
});

$(document).ready(function () {
    $('.news__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})