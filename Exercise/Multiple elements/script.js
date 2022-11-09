            //Multiple elements

let val;
val = document.getElementsByClassName("html class'ı"); //O classa sahip bütün etiketleri alır

console.log(val);

val = val[0]; //Classlar arasındaki sırayı seçer

for(let i=0;i < val.length; i++){
    console.log(val[i]); //O class'a ait bütün elemanları tek tek yazdırır.
}

val = document.getElementsByTagName("html etiketi"); // Tek tek etiketleri getirir yukarıdaki yöntemlerle seçilebilir.

//querySelectorAll
val = document.querySelectorAll("html id # class .") //Nodelist oluşturur / For yapmaya gerek yok

val.forEach(function(item){
    console.log(item);
}); //Tek tek yazdırır

console.log(val);