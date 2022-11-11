            //Number Metotları

let x = 10;
x = "10";

x = Number("10x");
x = isNaN("10x");

//parseInt - parseFloat
let sayi = 24.213972

sayi = parseInt(sayi); //Sadece 24'ü alır
sayi = parseFloat(sayi); //Virgülden sonrasını da alır.

//Presicion fixed
sayi = sayi.toPrecision(3); //Yazdığın sayı kadar elemanı yazdırır
sayi = sayi.toFixed(3); //Virgülden sonra yazdığın elemanları yazdırır.

//Math metotları
sayi = Math.PI;
sayi = Math.round(2.8); // 3
sayi = Math.round(2.3); //2

sayi = Math.ceil(3.8); //4
sayi = Math.ceil(3.1); //4

sayi = Math.floor(5.9); //5
sayi = Math.floor(5.1); //5

sayi = Math.sqrt(36); //Karekök
sayi = Math.pow(2,4); //Üssü
sayi = Math.abs(-150); //Mutlak değer

sayi = Math.min(4,5,2,8);
sayi = Math.max(4,5,2,8);

//***
//Base modeli// sayi = Math.random();
sayi = Math.round(Math.random()*100);




console.log(sayi);
console.log(typeof sayi);