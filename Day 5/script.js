            //Arrays

let country = ["Türkiye" , "Bulgaristan" , "Yünanistan" , "Gürcistan"];

let numbers = [15 , 25 , 35 , 29 , 24];

let cn = ["Türkiye" , 15 , null , undefined , ["Efe" , 22]];

//Get Arrays
console.log(country[0]);
console.log(country[1]);
console.log(cn[1]);

//Set Arrays
country[0] = "Bursa";
country[3] = "İstanbul";
country[country.length] = "Almanya";

//Add arrays item
country.push(19); //Sona ekler
country.push("Amerika")

country.unshift(22) //Başa ekler

//Remove arrays item
country.pop(); //En son elemanı kaldırır
country.shift(); //Baştaki elemanı kaldırır

//Reverse arrays
country.reverse(); //En baştakiyle sondakini değiştirir.

//Sort arrays
country.sort(); //Önce number sonra alfabetik sıralar

//Concat arrays
let x = country.concat(numbers); //Arrayları birleştirir



console.log(x);
console.log(typeof x);
console.log(x.length);