
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
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      autoHeight: true,
      loop:true,
      autoplay:true,
    },
});