window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".container .sound");
    const pads = document.querySelectorAll('.box');
    var temp = 0;
    pads.forEach((box,index) => {
        box.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[temp].pause();
            sounds[index].play();
            temp = index;
    });

});
    
   /* function togglePlay(index); {
       var isPlaying = false; 

        if (isPlaying) {
          sounds[index].pause()
        } else {
          sounds[index].play();
        }
      };
    sounds[index].onplaying = function() {
        isPlaying = true;
      };
    sounds[index].onpause = function() {
        isPlaying = false;
      };

*/
});