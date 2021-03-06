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

$('.product-item__num').styler();

$('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    // responsive: [
    //     {
    //       breakpoint: 1100,
    //       settings: {
    //         vertical: false,
    //       }
    //     },
    //     ]
});
$('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    arrows: false,
    draggable: false,
    fade: true,
});

$('.related__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.related__btn-prew'),
    nextArrow: $('.related__btn-next'),
        responsive: [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 3,
          }
        },
        {
        breakpoint: 851,
         settings: {
          slidesToShow: 2,
            }
          },
        {
        breakpoint: 601,
          settings: {
            slidesToShow: 1,
            arrows: true,
            }
        },  
        ]
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
      spacing: "5px",
    });

    $(".products2__rateYo").rateYo({
        rating: 4,
        starWidth: "18px",
        ratedFill: "#ffcc00",
        readOnly: true,
        spacing: "5px"
      });

      $(".product-item__rateYo").rateYo({
        starWidth: "18px",
        ratedFill: "#ffcc00",
        readOnly: true,
        spacing: "15px"
        
      });  
   
$(".menu__btn").on('click', function(e){
        $(".menu__list").toggleClass('menu__list--active');
    });

$(".catalog__filters-btn").on('click', function(e){
        $(".catalog__filters").slideToggle();
});


$(".catalog-category__input").on('click', function(e){
    $(this).parents("label").toggleClass('catalog-category__label--active');
});
$(".catalog-brand__input").on('click', function(e){
    $(this).parents("label").toggleClass('catalog-brand__label--active');
});

$(".products2__item-btn").on('click',function(e){
    $(this).css( "display", "none" );
    $(this).next(".products2__item-links").css( "display", "flex" );
});

$(".pagination__link").on('click',function(e){
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
});

$(".product-tabs__top-item").on('click',function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
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

