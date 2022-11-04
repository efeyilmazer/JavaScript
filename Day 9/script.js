//Template Literals

const fullName = "Efekan Yılmazer";
const city = "İstanbul";
const yearOfBirth = 2000;

//Eski yazım tarzı
let val = "Benim adım " + fullName + " " +
city + "'da yaşıyorum. " + (2022-yearOfBirth) + " Yaşındayım";


//Bu şekilde daha rahat yazabilirsin
val = `Benim adım ${fullName}. ${city}'da yaşıyorum. ${(2022-yearOfBirth<=18)?" 18'in Altında": "18'in üstünde"}`;


console.log(val);