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