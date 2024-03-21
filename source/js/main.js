(function() {
  'use strict';

// Фиксированное меню

document.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
});

// Управление слайдерами

$('.reviews__list').slick({
  dots: false,
  prevArrow: '<button type="button"><svg width="26" height="26"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button"><svg width="26" height="26"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  appendArrows: '.reviews__arrows',
  appendDots: '.reviews__dots',
  autoplay: false,
  slidesToShow: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        
      }
    },
  ]
});

$('.other-privilege__list').slick({
  dots: false,
  prevArrow: '<button type="button"><svg width="26" height="26"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button"><svg width="26" height="26"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  appendArrows: '.other-privilege__arrows',
  appendDots: '.other-privilege__dots',
  autoplay: false,
  slidesToShow: 4,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    },
  ]
});

$('.privilege__item-animate-slider').slick({
  dots: false,
  prevArrow: '<button type="button"><svg width="26" height="26"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  nextArrow: '<button type="button"><svg width="26" height="26"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  appendArrows: '.privilege__item-animate-slider-arrow',
});

})()