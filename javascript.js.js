var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $('.owl-carousel').owlCarousel({
    slidesToShow: 4,
    slidesToScroll: 4,
    margin:15,
    loop:true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }  
})


$('.screenshot-main').owlCarousel({
  slidesToShow: 2,
  slidesToScroll: 1,
})
$('.screenshot-main').owlCarousel({
  margin:15,
  loop:true,
  autoplay: true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }  
})