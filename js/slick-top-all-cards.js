$(".js-slick-all-cards").slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
  centerMode: true,
  swipeToSlide: true,
  pauseOnFocus: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

