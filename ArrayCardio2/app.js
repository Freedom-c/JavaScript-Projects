const people=[
        {name:"Merve",year:2002},
        {name:"Furkan", year:2002},
        {name:"abc", year:1976},
        {name:"def", year:1649}
];

const comments=[
    {text:"Love this!", id:584950},
    {text:"Super good", id:403240},
    {text:"look pretty!", id:294985},
    {text:"pretty good!", id:956843}
];

//some() metodu,verilen fonksiyonun belirtilen testten geçip geçmemesine bağlı olarak
//true veya false döner

//19 yaşında veya daha büyük en az bir kişi var mı?

const result= people.some(function(p){
    const currentYear=(new Date()).getFullYear();
    if((currentYear- p.year)>=19){
        return true;
    }
});

console.log(result);

//every() metodu, her dizi öğesi için bir fonksiyon döndürür
//verilen fonksiyon tüm elementler için true dönerse, every metodu true döndürür

//herkes 19 yaşında veya daha mı yaşlı?

const result2= people.every(function(p){
    const currentYear=new Date().getFullYear;
    if(currentYear-p.year>=19){
        return true;
    }
});

console.log(result2);

//find() metodu, içerisine verilen fonksiyonun gerekliliğini
//karşılayan elementi döndürür.

//id'si 403240 olanı bul

const result3=comments.find(function(f){
    if(f.id==403240){
        return true;
    }
});

console.log(result3);

//findIndex() yöntemi, her dizi öğesi için bir fonksiyon yürütür.
//fonksiyonun gerekliliğini sağlayan ilk öğenin indexini döndürür.

//403240 idsine sahip öğeyi diziden silelim:

const result4=comments.findIndex(i => i.id===403240);

console.log(result4);

//slice() yöntemi, dizi öğelerini ekler ve/veya kaldırır.
//orjinal dizinin üzerine yazar


//comments.splice(result4,1);

const newComments=[
    ...comments.slice(0,result4),
    ...comments.slice(result4+1)
];