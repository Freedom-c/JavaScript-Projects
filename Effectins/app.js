
function playSound(e){
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
};


function removeTransitionend(e){ //geçişi kaldıran fonksiyon
if(e.propertyName !== 'transform') return; //bu bir geçiş(transform) değilse atla 
this.classList.remove('playing'); //this key'e karşılık gelir
}
const keys=document.querySelectorAll('.key'); //.key seçicisi HTML'deki tüm öğeleri seçer
keys.forEach(key => key.addEventListener('transitionend',removeTransitionend));
window.addEventListener("keydown",playSound)

//transitionend bir geçiş sonudur. geçiş sona erdiğinde removeEventTransitionend ile bu geçişi kaldırırız

