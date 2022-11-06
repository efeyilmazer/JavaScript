            //Functions

function karesiniAl(sayi){
    return sayi*sayi;
}

let a = karesiniAl(2); //a değeri 4
let b = karesiniAl(4); //b değeri 16

console.log(a,b);

function toplam(sayi1,sayi2){
    function karesiniAl(x){
        return x*x;
    }
    return karesiniAl(sayi1) + karesiniAl(sayi2);
}

let sonuc = toplam(2,4);

console.log(sonuc);
