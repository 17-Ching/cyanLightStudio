// ---------------------首圖輪播-------------------//
    document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const buttons = document.querySelectorAll('.button');
    let index = 0;

    function showItem(n) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            buttons[i].classList.remove('active');
            if (i === n) {
                item.classList.add('active');
                buttons[i].classList.add('active');
            }
        });
        carousel.style.transform = `translateX(-${n * 100}%)`;
        index = n;
    }

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            showItem(i);
        });
    });

    setInterval(() => {
        showItem((index + 1) % items.length);
    }, 3000);
});

// -------------------swiper--------------------//

 
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
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


 
