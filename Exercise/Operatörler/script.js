            //Operatörler

let sonuc;
const x = 60;
const y = 12;
let z = 7;
let t = 9;



//Aritmatik operatörler
sonuc = x + y;
sonuc = x - y;
sonuc = x * y;
sonuc = x / y;
sonuc = x % y;
sonuc = x % z;

sonuc = z++; //7 olarak hafızada tuttu
sonuc = ++z; //8 olarak yazdı

//Atama operatörleri
sonuc = x; //60 değeri sonuca aktarılır
sonuc += x; //sonuc = sonuc + x
sonuc -= x; // sonuç tekrar 60 çıkar.
sonuc *= x; //3600
sonuc /= x; //60
sonuc %= x;



//Karşılaştırma operatörleri
z = 9;
t = '9'; //string verir

sonuc = z == t; // boolean sonucunu verir
sonuc = z === t; //aynı zamanda typeof kontrol ediyor
sonuc = x != y; //60 != 12 olduğundan true (!= eşit değil)

z = 5;
sonuc = z > t;
sonuc = z < t;
sonuc = z >= t;
sonuc = z <= t;



//Mantıksal Operatörler
// && (And - Ve)
sonuc = (z > t) && (x > y); //2 şartta sağlanmalı

// || (Or - Veya)
sonuc = (z > t) || (x > y); //2sinden biri sağlasa yeterli

// ! (Not - Değil)
sonuc = !(z > t); // z-t'den büyük değilse true



console.log(sonuc);
console.log(typeof sonuc);