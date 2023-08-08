const endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities= [];

//fetch() ile yukarıda verdiğimiz json dosyasından verileri çekelim:
// fetch(), Promise döndüren bir HTTP isteği yapar ve uzak bir kaynaktan veri almak için kullanılır.
//fetch(endpoint).then(blob.json()).then(data => cities.push(...data));

//json, geçici verileri depolamak için idealdir.
//then(), fetch ile istek yapılıp promise döndüğünde gerçekleşecek işlevi tanımlar.

//...data ifadesi, spread operatorü kullanılarak veri dizisini ayrıştırır ve 
//cities dizine push ile ekler

// fetch(endpoint).then(blob.json) kodu, belirtilen endpoint URL'sinden verileri alır ve bu verileri 
//JSON formatındaki bir object yapısına dönüştürür.

//fetch ile verileri çekeriz, daha sonra(then()) blob üzerinden json fonksiyonunu kullanır

fetch(endpoint).then(blob => blob.json())
.then(data =>cities.push(...data));

//search edilen kelimeyle eşleşen veriyi bulan fonks.
function findMatches(wordToMatch,cities){
    return cities.filter(place =>{
        //burada şehir veya mahalle aranan ile eşleştiğinde ne yapılacağını
        //halledeceğiz
        const regexp= new RegExp(wordToMatch,'gi');
        return place.city.match(regexp) || place.state.match(regexp);
        // "wordToMatch" kelimesini aramak için bir düzenli ifade (RegExp) oluşturuyoruz. RegExp oluşturma, 
        //büyük-küçük harf duyarsız (gi - global ve ignoreCase) bir arama yapmamızı sağlar.
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //
  }
  
//aranan değişkenleri ekranda görünütüle
function displayMatches(){
    const matchArray=findMatches(this.value, cities);
    const html= matchArray.map(place =>{
        //this.value,o anki fonksiyon içinde bulunan bir HTML form elemanının değerini temsil eder

        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name>${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
    }).join('');
    console.log(html);
    suggestions.innerHTML=html;
}

const searchInput=document.querySelector('.search');//forma giriş elemanlarını tutar
const suggestions=document.querySelector('.suggestions');//gösterilecek bloğu seçer

//giriş kısmı çalıştığında change event'ını dinleyeceğiz
searchInput.addEventListener('change',displayMatches);
//burada klavyede yapılan her bir değişkeni dinleyen event kullanıldı *keyup
searchInput.addEventListener('keyup',displayMatches);

//bir şehre tıklandığında yakın olan şehirleri listelesin:

//iki şehir arası uzaklığı hesapla (haversin formülü)
function getDistance(lat1, lat2, long1, long2){
    const R = 6371; // Dünya'nın yarıçapı (km)
    // İki nokta arasındaki enlem farkı (radyan cinsinden)
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    // İki nokta arasındaki boylam farkı (radyan cinsinden)
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    // a: İki nokta arasındaki açının sinüslerinin karelerinin toplamı
    const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
    Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

    // c: Haversine formülündeki merkez açının çiftini atan fonksiyonu ile hesaplanan değer
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

//yakın şehirleri listeleyen fonksiyon

function getList(){
    
}