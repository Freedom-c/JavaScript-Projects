const player=document.querySelector(".player");
const video=player.querySelector(".viewer");
const progress=player.querySelector(".progress");
const progressBar=player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons=player.querySelectorAll("[data-skip]");
const ranges=player.querySelector("range");

function togglePlay(){
    //.paused -> video is play or pause check
    //if video paused then set ►, or ❚ ❚
    video.paused ? video.play() : video.pause()
}

function updateButton(){
    toggle.textContent=this.paused ? '►' : '❚ ❚'
}

//"currentTime": indicates the current playback time in seconds
function skip(){
    video.currentTime +=parseFloat(this.dataset.skip);
}


function handleProgress(){
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}`;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button =>button.addEventListener('click', skip))
ranges.forEach(range=> range.addEventListener('change', handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);

let mousedown=false;

