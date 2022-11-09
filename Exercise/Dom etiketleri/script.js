            //Dom etiketleri

//All elements
let val;

val = window.document;

val = document.all //Tüm html etiketlerini çağırır
val = document.all[10]; //10. etiketi ekrana getirir
val = document.head; //Head etiketindekileri getirir
val = document.body; //Body etiketindekileri getirir
val = document.URL;
val = document.images;
val = document.title;
val = document.forms;
val = document.forms[0].id;

console.log(val);



//Single elements
val = document.getElementById("(html id'si)");

val = document.getElementById("(html id'si)").className; //id'nin classını getirir.

val.style.fontSize = "150px"; //Html id'sindeki fsizeyi etkiler
val.style.color = "red";



//Innertext - Innerhtml
val = document.getElementById("html id'si").innerText = "Başlık"; //Html'deki başlığı değiştirir.
val = document.getElementById("html id'si").innerHTML = "<b>Başlık</b>" // Etiketler işe yarar.



//Alternative
val = document.querySelector("id için #id class için .class"); //Class seçici sadece ilk classı seçer

val = document.querySelector("li").style.color = "red"; //İlk li'yi etkiler

val = document.querySelector("li:last child").style.color = "blue"; //Son li'yi etkiler

val = document.querySelector("li:nth-child(3)").style.color = "white"; //3. li'yi etkiler



console.log(val);

