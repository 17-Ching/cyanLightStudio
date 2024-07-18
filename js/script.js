// ---------------------首圖輪播-------------------//
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const buttons = document.querySelectorAll('.button');
    let index = 0;
    let interval;

    // 顯示指定索引的項目
    function showItem(n, transition = true) {
        if (!transition) {
            carousel.style.transition = 'none'; // 移除過渡效果
        } else {
            carousel.style.transition = 'transform 0.5s ease'; // 恢復過渡效果
        }
        
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

        // 重新應用過渡效果
        if (!transition) {
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease';
            }, 50);
        }
    }

    // 設置自動輪播
    function startCarousel() {
        interval = setInterval(() => {
            if (index === items.length - 1) {
                showItem(0, true); // 直接切換到第一張，保留過渡效果
            } else {
                showItem((index + 1) % items.length, true);
            }
        }, 3000);
    }

    // 清除並重新設置輪播定時器
    function resetCarousel() {
        clearInterval(interval);
        startCarousel();
    }

    // 為每個按鈕添加點擊事件監聽器
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            showItem(i);
            resetCarousel(); // 點擊按鈕後重新計時輪播秒數
        });
    });

    // 啟動輪播
    startCarousel();
});


// -------------------swiper--------------------//

 
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,
      speed:500,
      freeMode:true,
      loop:true,
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

