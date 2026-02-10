
function startTimer() {

 let music = document.querySelector("audio");
 setTimeout(() => {
    music.play()
  }, 3000);

const timerMinutes = 10;

    let countDownDate = new Date().getTime() + timerMinutes * 60000;

let x;

function updateCountdown(){

    

    let now = new Date().getTime();
    let distance = countDownDate - now;

   

  

    let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const correctMinutes = minutes < 10 ? "0" + minutes: minutes;
    const correctSeconds = seconds < 10 ? "0" + seconds : seconds;

     document.querySelector(".timercontainer").innerHTML = correctMinutes + ":" + correctSeconds;
  
     if (distance <= 0) {
        distance = 0;
        clearInterval(x);
        document.querySelector(".timercontainer").innerHTML = "Done!";
        music.pause();
    }
   
};





    
    x = setInterval(updateCountdown, 1000);
    updateCountdown();
   
   

}

 function stopTimer(){
    
    clearTimeout(x);

}

function resetTimer(){
    stopTimer();
    
}




    


