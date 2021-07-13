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
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 35.698,
            lng: 139.744
        },
        zoom: 10,
    });
}