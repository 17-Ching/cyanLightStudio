//---------------------首圖swiper---------------------//

var swiper = new Swiper(".swiper1", {
    autoplay: 2000,
    loop:true,
    autoplay:true,
    freeMode:true,
    speed:400,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
      paginationClickable: true,
      
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


// -------------------swiper--------------------//

 
    var swiper = new Swiper(".swiper2", {
        
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      speed:500,
      freeMode:true,
      loop:true,
    //   autoplay: 2000,
    //   autoplay: true,
      pagination: {
        el: ".swiper-pagination2",
        type: "fraction",
        paginationClickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
            
          },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            
          },
        431: {
            slidesPerView: 2,
            spaceBetween: 10,
            
          },
        0: {
            slidesPerView: 1,
            // slidesPerGroup: 1,
            spaceBetween: 10,
            
          },
    }
    });


// -------------------影片播放--------------------//

const video1 = document.querySelector(".video1");
const playbutton1 = document.querySelector('.play-button1');

playbutton1.addEventListener("click", () => {
    if (video1.paused) { 
        console.log('video paused');
        video1.play();
        playbutton1.style.visibility = 'hidden';
    } 
});

video1.addEventListener("click", () => {
    if (!video1.paused) { 
        console.log('video playing');
        video1.pause();
        playbutton1.style.visibility = 'visible';
    }
});

// -------video2

const video2 = document.querySelector(".video2");
const playbutton2 = document.querySelector('.play-button2');

playbutton2.addEventListener("click", () => {
    if (video2.paused) { 
        console.log('video paused');
        video2.play();
        playbutton2.style.visibility = 'hidden';
    } 
});

video2.addEventListener("click", () => {
    if (!video2.paused) { 
        console.log('video playing');
        video2.pause();
        playbutton2.style.visibility = 'visible';
    }
});

// ---------------------scroll------------------//


$(function () {
    let showHeight = 250;

    $(window).scroll(function(){
        $('.main .middlepic').each(function(){
            let setThis = $(this)
            let areaTop = setThis.offest().top

            if($(document).scrollTop() >= (areaTop + showHeight) - $(window).height()){
                setThis.stop().animate({
                    opacity: 1,
                }, 800)
            }else{
                setThis.stop().animate({
                    opacity: 0,
                },500)
        }
    })
    })

})

