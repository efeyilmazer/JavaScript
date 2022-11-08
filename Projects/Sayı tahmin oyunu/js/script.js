"use strict";

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    console.log(secretNumber);

    //İnput eğer boş girilirse
    if(!guess){
        displayMessage("Bir sayı giriniz");
    }

    //Oyuncu kazandığında
    else if(guess === secretNumber){
        displayMessage("Doğru tahmin ettiniz!");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").style.color = "#60b347";
        document.querySelector("img").style.display = "inline";
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    //Sayılar birbiriyle eşleşmiyor ise

    else if (guess !== secretNumber){
        if(score>1){
            displayMessage(guess<secretNumber ? ":Çok yüksek": "Çok düşük");
            document.querySelector(".score").textContent = score;
        }
    }




});