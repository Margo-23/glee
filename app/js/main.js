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

$(".catalog-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    
    onStart: function (data) {
        $(".catalog-price__from").text("$"+ data.from + ".00");
        $(".catalog-price__to").text("$"+ data.to + ".00");
    },
    onChange: function (data) {
        $(".catalog-price__from").text("$"+ data.from + ".00");
        $(".catalog-price__to").text("$"+ data.to + ".00");
    },
    postfix: ".00",

});

 
    $(".catalog-recent__rateYo").rateYo({
      rating: 4,
      starWidth: "11px",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "5px"
    });

    $(".products2__rateYo").rateYo({
        rating: 4,
        starWidth: "18px",
        ratedFill: "#ffcc00",
        readOnly: true,
        spacing: "5px"
      });
   


$(".catalog-category__input").click(function(e){
    $(this).parents("label").toggleClass('catalog-category__label--active');
});
$(".catalog-brand__input").click(function(e){
    $(this).parents("label").toggleClass('catalog-brand__label--active');
});

$(".products2__item-btn").click(function(e){
    $(this).css( "display", "none" );
    $(this).next(".products2__item-links").css( "display", "flex" );
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

