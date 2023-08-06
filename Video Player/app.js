const player=document.querySelector(".player");
const video=player.querySelector(".viewer");
const progress=player.querySelector(".progress");
const progressBar=player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons=player.querySelectorAll("[data-skip]");
const ranges=player.querySelector("range");
//player-slider: video kaydırıcı

//lets write the functions
function togglePlay(){
    //.paused -> video is play or pause check
    //if video paused then set ►, or ❚ ❚
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    } 
}

function updateButton(){
    const icon= this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent=icon;
}

//"currentTime" geçerli oynatma süresini saniye cinsinden belirtir
function skip(){
    video.currentTime +=parseFloat(this.dataset.skip);
}

//?
function handleRangeUpdate(){
    video[this.name]=this.value;
}

function handleProgress(){
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}`;
}

// eventlistener'ları ekleyelim
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button =>button.addEventListener('click', skip))
ranges.forEach(range=> range.addEventListener('change', handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);

//togle=aç/kapat
toggle.addEventListener('click', togglePlay);
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown=false;

