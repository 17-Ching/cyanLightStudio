 // -------------------about影片播放--------------------//
 const video = document.querySelector(".video2");
 const playbutton = document.querySelector('.play-button1');
 
 playbutton.addEventListener("click", () => {
     if (video.paused) { 
        //  console.log('video paused');
         video.play();
         playbutton.style.visibility = 'hidden';
     } 
 });

 video.addEventListener("click", () => {
    if (!video.paused) { 
        // console.log('video playing');
        video.pause();
        playbutton.style.visibility = 'visible';
    }
});



// -----------------RWD--------------------//

const video2 = document.querySelector(".video1");
const playbutton2 = document.querySelector('.play-button2');

playbutton2.addEventListener("click", () => {
    if (video2.paused) { 
       //  console.log('video paused');
        video2.play();
        playbutton2.style.visibility = 'hidden';
    } 
});

video2.addEventListener("click", () => {
   if (!video2.paused) { 
       // console.log('video playing');
       video2.pause();
       playbutton2.style.visibility = 'visible';
   }
});