window.addEventListener("keydown",function(e){
const audio=document.querySelector(`audio[data-key="${e.key}"]`);
const key=document.querySelector(`.key[data-key="${e.key}"]`);
const playingAudios = document.querySelectorAll("audio.playing");

if(!audio) return; //fonksiyonun hep birlikte çalışmasını engelleyecek

playingAudios.forEach(function(playingAudio){
    if(playingAudio!=audio){
        playingAudio.pause();
        playingAudio.currentTime=0;
        playingAudio.classList.remove("playing");
    }
});

audio.currentTime=0;//tekrar tekrar tuşa bastığımızda müziği baştan başlatır
audio.play();
audio.classList.add("playing");
key.classList.add("playing");
});

function removeEventTransitionend(e){
if(e.propertyName !== 'transion') return;
console.log(e.propertyName)
}
const keys=document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeEventTransitionend));
