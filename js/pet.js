
// $('section').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true
//   });

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     autoHeight: true,
//     loop:true,
//     autoplay:true,
//   },
// });

var mySwiper = new Swiper('.swiper', {
  autoplay:true,//等同于以下设置
    autoplay: {
    delay: 2000,
    // pauseOnMouseEnter: true,
    // stopOnLastSlide: false,
    // disableOnInteraction: true,
    },
    centeredSlides: true,
    speed:500,
      freeMode:true,

    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      autoHeight: true,
    },
    loop:true,

    breakpoints: {
      // 1200: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      //   },
      // 992: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
          
      //   },
      // 768: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
          
      //   },
      // 431: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
          
      //   },
      // 0: {
      //     slidesPerView: 1,
      //     // slidesPerGroup: 1,
      //     spaceBetween: 10,
          
      //   },
  }
});