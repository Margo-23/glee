$(function(){
$('.about__slider').slick({
arrows: false,
dots: true,
slidesToShow: 1,
slidesToScroll: 1,
fade: true,
autoplay: true,
autoplaySpeed: 2000,
});

    //mixitup
    let containerEl1 = document.querySelector('.products');
    let containerEl2 = document.querySelector('.design');
    let config = {
        controls: {
            scope: 'local',
        },
    };
    (() => mixitup(containerEl1, config))();
    (() => mixitup(containerEl2, config))();

});

