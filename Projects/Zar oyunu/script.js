"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector("btn--new");
const btnRoll = document.querySelector("btn--roll");
const btnHold = document.querySelector("btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function(){
  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--active");
  player1El.classList.remove("player--active");
};
init ();
const switchPlayer = function(){
  document.querySelector(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1:0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click",function(){
  if (playing){
    const dice = Math.trunc(Math.random() * 6)  + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if(dice!==1){
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }
  else {
    switchPlayer();
  }
}
});

btnHold.addEventListener("click",function(){
  if(playing){
    scores[activePlayer] += currentscore;
    document.querySelector(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(score[activePlayer]>=100){
      playing = false;
      diceEl.classList.add("hidden");
    

    document.querySelector(`.player--${activePlayer}`).classList.add(".player--winner");

    document.querySelector(`.player--${activePlayer}`).classList.remove(".player--active");
  }
      else {
        switchPlayer();
      }
}
});

btnNew.add.addEventListener("click",init);