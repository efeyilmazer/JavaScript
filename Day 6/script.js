                  //Koşul ifadeleri

//if-else
let namee = "Efe";
let age = 22;
let drivingLicense = false;

if(namee == "Efe"){
    console.log("Benim adım Efe");
}

if(age == 22){
    console.log("22 yaşındayım.");
}

if(drivingLicense == true) {
    console.log("Araç kullanabilirsiniz.")
}
else {
    console.log("Araç kullanamazsınız");
}



age = 19;
drivingLicense = false;
if (age > 18) {
        if (drivingLicense === true){
            console.log("Araç kullanabilirsiniz.")
        }
        else {
            console.log("Sürücü belgeniz yok");
        }
}
else {
    (age < 18)
    console.log("Araç Kullanamazsınız");
}