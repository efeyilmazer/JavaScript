            //Döngüler - Loops

//While loops
 let q = 0;
 while(q<10){
     console.log(i);
     q++;
 }

//Do-while loops
 let w = 0;
 do {
     console.log(w);
     w++;
 }
 while(i<10){
     console.log("Döngü bitti");
 }

//For loops
 for(let i = 0; i < 10; i++){
     if(i == 2){
         console.log("İki = " + i);
         continue;
     }
     if(i == 5){
         console.log("Beş = " + i);
         break;
     }
     console.log(i);
}

//İç içe for döngüleri

for(let i = 10; i > 0; i--){
    console.log("i = " + i);
    for(let c = 0; c < 5; c++){
    console.log("c = " + c);
    }
}
