const checkboxes=document.querySelectorAll
('.inbox input[type="checkbox"]');

let lastChecked;// son işaretlenen checkbox'ın referansını tutar

//checkbox'lara her tıklandığında gerçekleşen olaylar
function handleCheck(e){
    let inBetween=false;//seçilen kutular arasındaki kutular işaretli mi değil mi kontrol eder

    //shift tuşuna basılı olup olmadığını kontrol et
    //ve check tuşunun işaretli olup olmadığını kontrol et
    if(e.shiftKey && this.checked){
    //checkboxes NodeList'ındaki her bir checkbox için bir döngü başlatır 
    //ve her bir onay kutusunun üzerinden geçer
    checkboxes.forEach(checkbox =>{
        console.log(checkbox);

       //bu satır şu anki checkbox (this) veya son işaretlenen checkbox (lastChecked) ile 
       //döngüdeki checkbox'ın aynı olup olmadığını kontrol eder
        if(checkbox === this || checkbox ===lastChecked){
            inBetween= !inBetween;
            console.log("Starting to check them inbetween")
        }

        //son işaretlenen kutu ile şu anki kutu arasındaki kutuları işaretlet
        if(inBetween){
            checkbox.checked=true;
        }
    })
    }
    //şu anki checkboxu son checkbox olarak tanımlar
    lastChecked=this;
}

//checkbox kutularını dinleyelim
checkboxes.forEach(checkbox => checkbox.addEventListener(
    'click', handleCheck));