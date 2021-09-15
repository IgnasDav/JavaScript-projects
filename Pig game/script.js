'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEl.classList.add('hidden');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const swicthPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //Checking if the player is 0 and then the active player will be 1
  // And if the active player is 1 it will be 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  //resets the current score for the current player
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.  Generating a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled1: if true
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swicthPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the score of the active player
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore; How the current function works
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if the score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Swicth to the next player
      swicthPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
