const inventors=[
    { first:'Albert',last:'Einstein',year:1879,passed:1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  //1500lerde doğmuş insanları bulalım
  //bunun için bi değişkene filter() methodunu kullanarak aradığımız değerleri tutması için atayacağız
  //filter metotunun kullanacağı bi fonksiyon olmalı
  //ve bu fonksiyon aradığımız değerleri döndürecek bi işlev gerçekleştirmeli

  const fifteen= inventors.filter(i =>{ //funciton(i) ile aynı işlevi yapar
    if(i.year>=1500 && i.year<1600){
        return true; //true döndürmek bulduğumuz değerleri tutar.
    }
  });

  console.table(fifteen);
  //console.table() ifadesi, bulduğumuz değerleri console'da tablo halinde gösterir.

//ölüm tarihi 1700lerde olanları bulalım

const seventeen= inventors.filter(inventor=>{
    if(inventor.passed>=1700 && inventor.passed<1800){
        return true;
    }
});

console.table(seventeen);

//filter() yöntemi, bir fonksiyon içerisindeki işlevi gerçekleştiren öğelerle dolu yeni bir dizi oluşturur.


//mucitlerin yalnızca isim ve soyisimlerini veren yeni bir dizi oluşturalım.
const fullName= inventors.map(i => i.first + " "+i.last);
console.log(fullName);

//map(), dizi öğeleri için bir fonksiyon çağırarak yeni bir dizi oluşturur.

//bir dizi sayı verelim ve bunların 2 katından oluşan yeni bir diziyi oluşturalım:

const numbers=[1,6,3,8,3];

const result=numbers.map(i=>{return i*2;});

console.log(result);

//Mucitleri doğum tarihine göre yaşlıdan gence sıralayalım(sort())

const ages=inventors.sort(function(firstPerson,secondPerson){
    if(firstPerson.year>secondPerson.year){
        return 1;
    }else{
        return -1;
    }
});

//daha kısa yazımı

const age=inventors.sort((a,b)=> a.year>b.year ? 1: -1);

console.table(age);

//sort metodunda belirlenen işlevi gerçekleştiriyorsa 1(pozitif), gerçekleştirmiyosa -1(negatif) olduğunu belirtir.
//ve pozitif belirlenen değerler sıralanır.


//mucitlerin toplam kaç yıl yaşadığını bulalım:

const totalYears= inventors.reduce((total,inventor)=>{
    return total +(inventor.passed - inventor.year);
},0);
// fonksiyon sonuna 0 eklememızın sebebi, total'ın varsayılan değeri olarak atamasıdır.

console.log(totalYears);

//mucitleri yaşlarına göre sıralayalım:

const oldest=inventors.sort(function(a,b){
    const lastGuy=a.passed-a.year;
    const nextGuy=b.passed-b.year;

    if(lastGuy>nextGuy){
        return -1;
    }else{
        return 1;
    }
});

console.table(oldest)

//verilen linkteki Paris'te adında herhangi bir yerde 'de' geçen Bulvarların bir listesini oluşturalım:

//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris



//insanları soyadlarına gçre alfabetik sıralayalım (sort())
//isim ve soyisimi virgülle ayıralım(split())

const peoples=people.sort(function(lastOne,nextOne){
    const [aLast,aFirst]=lastOne.split(", ");
    const [bLast,bFirst]=nextOne.split(", ");
    return aLast> bLast ? 1: -1;
});
console.log(peoples);

//split() fonksiyonu, bir metni belli bir ayracı kullanarak parçalara ayıran ve elde edilen parçalardan oluşan bir dizi döndüren bir dize yöntemidir.
//Yani, bir dizeyi belirtilen ayraca göre böler ve böldüğü parçaları bir dizi içinde saklar.(ör: aşağıdaki cümle dizesi)
//örneğin bir cümle char dizisidir. (text=Bugün ne yapıyorsun)
//text.split(" "); metodu, bu cümleyi boşluklara " " göre böler.
//örn:

const text="Bugün ne yapıyorsun";
const myArray= text.split(" ");
let word=myArray[1];

document.getElementById("demo").innerHTML=word;

//Örneğin, "Bernhard, Sandra" gibi bir dizeyi split(", ") kullanarak virgüle göre böldüğümüzde, iki parçadan oluşan bir dizi elde ederiz:
// ["Bernhard", "Sandra"]


//Reduce Exercise

//reduce(), Dizideki her bir öğe üzerinde bir işlem yapar ve sonuç olarak tek bir değer döndürür.
//Genellikle dizideki sayıların toplanması, çarpılması veya ortalama alınması gibi işlemlerde kullanılır.


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


const sonuc=data.reduce(function(obj,item){
    if (!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;

},{
    //bu tanımlama, nesnelerin kaçar adet olduğuna dair
    //varsayılan değerlerdir.
  /*  car:0,
    truck:0,
    bike:0,
    balk:0,
    van:0 */
    //başlagıç olarak boş obje tanımlayalım: {}
});

console.log(sonuc);

//"data" adlı bir dizideki öğelerin frekansını hesaplamak için reduce() fonksiyonunu
//kullanır. Dizi içindeki her bir öğe (örneğin, 'car', 'truck', 'bike' gibi) nesne(obj) içinde bir anahtar olarak kullanılır
//ve bu öğelerin kaç kez tekrarlandığı tutulur. Sonuç olarak, oluşturulan nesne, öğelerin tekrar sayısını temsil eder.

//"obj", nesne içindeki anahtarları ve değerleri tutan akümülatördür, "item" ise "data" dizisindeki mevcut öğedir.
//çıktıda her öğenin tekrar sayısı nesne içinde anahtar-değer çiftleri olarak gösterilir