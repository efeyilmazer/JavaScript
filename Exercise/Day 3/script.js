            //Date Objects

            let d = new Date();
                console.log(d);

//Get methods
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay()); //Pazar günü 0

//Set methods
d.setFullYear(1996);
d.setMonth(12);
d.setDate(25);


            //String Metotları

const ad = "Efe";
const soyad = "Yılmazer";

let x = ad + " " + soyad;

//String concat
x = ad.concat(" ",soyad);

//String lenght
x = ad.length;
x= soyad.length;

//String uppercase & lowercase
x = ad.toUpperCase();
x = soyad.toUpperCase;

x = ad.toLowerCase();
x = soyad.toLowerCase();

//String indexof
x = x.indexOf("Y"); //Kaçıncı harf 0-1-2...

//String substring
x= x.substring(0,7); //Aralıktakileri çıkartır

//String replace
x = x.replace("Efe" , "Enes");


console.log(x);
console.log(typeof x);